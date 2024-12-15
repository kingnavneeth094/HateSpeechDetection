"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-lg p-8 shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-4xl font-semibold text-center text-blue-600 dark:text-blue-400">
          Hate Speech Detection System
        </h1>
        <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-300">
          Analyze social media text for potential hate speech with our AI-powered system. Protect your platform by identifying harmful content in real-time.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/analyze"
            className="px-6 py-3 text-xl font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:text-gray-100 dark:hover:bg-blue-400 transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
