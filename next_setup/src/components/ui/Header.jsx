import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { Input } from "@/components/ui/input";


export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      {/* Left section: Logo and Title */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg"
            alt="MovieVerse Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className=" font-extrabold text-3xl text-yellow-400  drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]">MovieVerse</span>
        </Link>
      </div>

      {/* Center section: Button */}
      <Button
        variant="outline"
        className="hidden lg:inline-flex bg-transparent text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-black  ml-[-110px]">
        Go Premium
      </Button>

      {/* Right section: Navigation */}
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/movie" className="hover:text-gray-300">
          Movies
        </Link>
        <Link href="/tv" className="hover:text-gray-300">
          TV Shows
        </Link>
        <Link href="/watchlist" className="text-pink-500">
          Watchlist
        </Link>
        <Link href="/verse-plus" className="hover:text-gray-300">
          Verse+
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
      <form className="relative hidden lg:block">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-8 bg-gray-800 border-gray-700 focus:border-pink-500 text-white"
        />
      </form>
      <Button size="icon" variant="ghost"
  className="rounded-full"
>
  <Image
    src="/placeholder.svg?height=32&width=32"
    alt="User Avatar"
    width={32}
    height={32}
    className="rounded-full"
  />
  <span className="sr-only">User menu</span>
</Button>
    </div>
    </header>
  );
}