import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { getAllArticles } from "../../lib/api";
import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const articles = getAllArticles();

  const paths = articles.map((article) => ({
    params: { slug: article.slug }
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const dataPath = path.join(process.cwd(), "data", "articles.json");
  const json = fs.readFileSync(dataPath, "utf8");
  const articles = JSON.parse(json);

  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: { article },
    revalidate: 60
  };
}

export default function ArticlePage({ article }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [article.image],
    "datePublished": article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "description": article.summary
  };

  return (
    <Layout
      title={article.title}
      description={article.summary}
      ogImage={article.image}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

        <p className="text-sm text-gray-500 mb-4">
          {new Date(article.publishedAt).toISOString().split("T")[0]} •{" "}
          {article.author}
        </p>

        <div className="relative w-full h-64 mb-6">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded"
          />
        </div>

        <div
          className="prose max-w-none text-lg"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </Layout>
  );
}
