"use client";
import { useRouter } from "next/navigation";

export default function MainNavbar({ currentPage }) {
  const router = useRouter();
  console.log(currentPage); // Check what currentPage is

  return (
    <div className="h-[136px] flex items-center justify-between bg-white px-6">
      {/* Back Arrow for Tracking Page */}
      {currentPage?.toLowerCase() === "tracking" && (
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>
      )}

      <div className="flex items-center space-x-4 ml-auto">
        <div className="w-10 h-10 bg-gray-300 text-white flex items-center justify-center rounded-full">
          JT
        </div>
        <span className="text-gray-700 font-medium">Jackie Tan</span>
        <span
          className="ml-1 hidden sm:inline transform rotate-90 text-gray-500"
          data-testid="chevron-right-icon"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="none"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.771 7.115a.83.83 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
