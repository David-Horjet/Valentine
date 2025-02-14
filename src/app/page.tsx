import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Find Your Perfect Valentine... Or Not 😂</h1>
      <p className="text-xl mb-8">Because who needs love when you have memes?</p>
      <Link
        href="/find"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-lg transition-colors duration-300"
      >
        Start My Search
      </Link>
    </main>
  )
}

