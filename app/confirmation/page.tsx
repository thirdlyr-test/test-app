"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ConfirmationPopup() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("confirmation-popup").classList.add("show");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDone = () => {
    router.push("/tracking");
  };

  return (
    <div
      id="confirmation-popup"
      className="fixed inset-0 bg-green-900 bg-opacity-90 flex flex-col items-center justify-center text-center text-white"
    >
      <div className="mb-4">
        <img src="/confetti.png" alt="Success" className="h-64 w-64 mx-auto" />{" "}
        {/* Increased size */}
      </div>
      <h2 className="text-4xl font-bold mb-2">ALL SENT</h2>
      <p className="mb-6 text-lg">Your payment was successfully sent!</p>
      <button
        onClick={handleDone}
        className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-400"
      >
        Done
      </button>
    </div>
  );
}
