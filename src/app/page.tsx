import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-20 md:p-24 text-center">
      <h1 className="text-4xl font-bold mb-5">Find Your Perfect Valentine... Or Not 😂</h1>
      <p className="text-xl mb-8">{"Let’s Pair You with Your Ideal Match!, Your Valentine is Just One Click Away… ❤️🎯"}</p>
      <Link
        href="/find"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mb-20 rounded-full text-lg transition-colors duration-300"
      >
        Start My Search
      </Link>
      <span className="text-white text-sm">Made with hatred by Horjet 🙂</span>
    </main>
  )
}

