"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mb-4">About Page</h2>
      <button
        onClick={() => router.push("/")}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go to Home
      </button>
    </div>
  );
}
