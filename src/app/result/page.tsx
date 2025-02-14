"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import meme1 from "../../assets/boy.jpeg";
import meme2 from "../../assets/eba.jpeg";
import meme3 from "../../assets/ebao.jpeg";
import meme4 from "../../assets/messi.jpeg";
import meme5 from "../../assets/sabbi.jpeg";
import meme6 from "../../assets/strong-eba.jpeg";
import meme7 from "../../assets/warm-eba.jpeg";

const femaleNames = [
  "Ada",
  "Sarah",
  "Linda",
  "Blessing",
  "Chiamaka",
  "Jennifer",
  "Sophia",
  "Joy",
  "Aisha",
  "Tolu",
  "Kemi",
  "Hannah",
  "Nkechi",
  "Mariam",
  "Bolanle",
  "Stella",
  "Ifeoma",
  "Vivian",
  "Naomi",
  "Sandra",
];
const maleNames = [
  "Emeka",
  "Chinedu",
  "David",
  "Michael",
  "Tunde",
  "Sola",
  "Francis",
  "Kunle",
  "Charles",
  "Victor",
  "Uche",
  "Segun",
  "Paul",
  "Ibrahim",
  "Deji",
  "Collins",
  "Femi",
  "Kingsley",
  "Joshua",
  "Henry",
];

const loadingMessages = [
  "Matching you with {name}...",
  "Checking compatibility...",
  "Verifying romantic potential...",
  "Oops! {name} just ghosted.",
  "Re-evaluating options...",
  "Error: No Valentine found.",
];

const rejectionMessages = [
  "No match found. Focus on your career.",
  "Your love request was denied. Go and gym.",
  "Even Google Maps can’t find love for you.",
  "We checked… even your ancestors are single.",
  "Your soulmate is in your dreams. Go back to sleep.",
  "Love is in the air, but you forgot to breathe.",
  "Rejection successful. Please try again in 2030.",
  "Your Valentine application has been declined. Eba is waiting.",
  "We searched everywhere… even your village people refused.",
  "Your match ran away. Try again after washing plate.",
  "The best Valentine for you is your phone charger.",
  "Sorry, but even your shadow left you.",
  "We found a match, but they said ‘God forbid’.",
  "This is not heartbreak, this is heartbreak pro max.",
  "No Valentine? Don’t worry, food will never leave you.",
  "Even your crush is matching with someone else right now.",
  "Our AI tried, but even it couldn’t find hope for you.",
  "Try again next year, maybe love will be cheaper.",
  "Love is not your calling. Maybe carpentry is.",
  "Your last seen was 1 minute ago. Even loneliness is tired of you.",
];

const memes = [meme1, meme2, meme3, meme4, meme5, meme6, meme7];

const ResultContent = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const gender = searchParams.get("gender");

  const [loadingStep, setLoadingStep] = useState(0);
  const [matchName, setMatchName] = useState("");
  const [rejectionMessage, setRejectionMessage] = useState("");
  const [meme, setMeme] = useState(meme1);

  useEffect(() => {
    const names = gender === "male" ? femaleNames : maleNames;
    setMatchName(names[Math.floor(Math.random() * names.length)]);

    const loadingInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingMessages.length - 1) {
          clearInterval(loadingInterval);
          setRejectionMessage(
            rejectionMessages[
              Math.floor(Math.random() * rejectionMessages.length)
            ]
          );
          setMeme(memes[Math.floor(Math.random() * memes.length)]);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(loadingInterval);
  }, [gender]);

  const currentLoadingMessage = loadingMessages[loadingStep].replace(
    "{name}",
    matchName
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-3xl font-bold mb-8">
        Finding Your Valentine... Hang on {name} 😊
      </h1>
      {loadingStep < loadingMessages.length && (
        <p className="text-xl mb-4">{currentLoadingMessage}</p>
      )}
      {rejectionMessage && (
        <>
          <p className="text-2xl font-bold mb-8 text-red-600">
            {rejectionMessage}
          </p>
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
  );
};

const Result = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
};

export default Result;
