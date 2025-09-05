// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-lg font-bold">Test Pipeline</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
      </div>
    </nav>
  );
}
git push origin main