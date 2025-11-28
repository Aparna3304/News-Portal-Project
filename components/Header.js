import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">
            LiveHindustan Clone
          </span>
        </Link>

        <nav className="hidden md:flex gap-4 text-sm">
          <a className="hover:underline cursor-pointer">National</a>
          <a className="hover:underline cursor-pointer">Business</a>
          <a className="hover:underline cursor-pointer">Sports</a>
          <a className="hover:underline cursor-pointer">Lifestyle</a>
        </nav>
      </div>
    </header>
  );
}
