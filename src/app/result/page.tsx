"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const femaleNames = ["Sarah", "Linda", "Ada", "Emma", "Olivia", "Sophia"]
const maleNames = ["David", "Chinedu", "Emeka", "James", "Michael", "Daniel"]

const loadingMessages = [
  "Matching you with {name}...",
  "Checking compatibility...",
  "Verifying romantic potential...",
  "Oops! {name} just ghosted.",
  "Re-evaluating options...",
  "Error: No Valentine found.",
]

const rejectionMessages = [
  "Valentine loading failed. Try again in 2026.",
  "No match found. Eba and groundnut soup is your fate.",
  "Your soulmate is waiting... in another universe.",
  "Your love request was rejected by Solana blockchain.",
]

const memes = ["/memes/meme1.jpg", "/memes/meme2.jpg", "/memes/meme3.jpg", "/memes/meme4.jpg"]

export default function Result() {
  const searchParams = useSearchParams()
  const name = searchParams.get("name")
  const gender = searchParams.get("gender")

  const [loadingStep, setLoadingStep] = useState(0)
  const [matchName, setMatchName] = useState("")
  const [rejectionMessage, setRejectionMessage] = useState("")
  const [meme, setMeme] = useState("")

  useEffect(() => {
    const names = gender === "male" ? femaleNames : maleNames
    setMatchName(names[Math.floor(Math.random() * names.length)])

    const loadingInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingMessages.length - 1) {
          clearInterval(loadingInterval)
          setRejectionMessage(rejectionMessages[Math.floor(Math.random() * rejectionMessages.length)])
          setMeme(memes[Math.floor(Math.random() * memes.length)])
          return prev
        }
        return prev + 1
      })
    }, 2000)

    return () => clearInterval(loadingInterval)
  }, [gender])

  const currentLoadingMessage = loadingMessages[loadingStep].replace("{name}", matchName)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-3xl font-bold mb-8">Finding Your Valentine</h1>
      {loadingStep < loadingMessages.length && <p className="text-xl mb-4">{currentLoadingMessage}</p>}
      {rejectionMessage && (
        <>
          <p className="text-2xl font-bold mb-8 text-red-600">{rejectionMessage}</p>
          <Image
            src={meme || "/placeholder.svg"}
            alt="Funny meme"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mb-8"
          />
          <Link
            href="/"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-lg transition-colors duration-300"
          >
            Try Again
          </Link>
        </>
      )}
    </main>
  )
}

