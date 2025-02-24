"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ConfirmationPopup() {
  const router = useRouter();
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowImage(true);
    }, 1000); // 1 second delay
    return () => clearTimeout(loaderTimer);
  }, []);

  const handleDone = () => {
    router.push("/tracking");
  };

  return (
    <div
      id="confirmation-popup"
      className="fixed inset-0 bg-green-900 bg-opacity-90 flex flex-col items-center justify-center text-center text-white"
    >
      {!showImage ? (
        <div className="loader border-8 border-white border-t-8 border-t-green-500 rounded-full w-64 h-64 animate-spin mb-4"></div>
      ) : (
        <div className="mb-4">
          <img
            src="/confetti.png"
            alt="Success"
            className="h-64 w-64 mx-auto"
          />
        </div>
      )}
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
