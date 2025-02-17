"use client";

import React from "react";

interface RecipientNavbarProps {
  currentPage: string;
}

const RecipientNavbar: React.FC<RecipientNavbarProps> = ({ currentPage }) => {
  return (
    <nav>
      <div className="flex items-center justify-center py-6 border-b border-gray-200 w-full max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between py-6 w-full px-[24px]">
          <div className="flex items-center space-x-6">
            <img
              src="/thirdlyr-high-res.png" // Update the path to your logo image
              alt="Thirdlyr Logo"
              className="h-[24px]"
            />
          </div>

          <div>
            <ul className="flex space-x-6 text-lg font-medium text-gray-600">
              <li className={currentPage === "recipient" ? "text-gray-900 font-semibold" : ""}>Recipient</li>
              <li className={currentPage === "amount" ? "text-gray-900 font-semibold" : ""}>Amount</li>
              <li className={currentPage === "review" ? "text-gray-900 font-semibold" : ""}>Review</li>
              <li className={currentPage === "pay" ? "text-gray-900 font-semibold" : ""}>Pay</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Profile Section */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-900 rounded-full font-medium">
                JT
              </div>
              <span className="text-sm font-medium text-gray-700">
                Jackie Tan
              </span>
            </div>

            {/* Close Button */}
            <button
              className="text-gray-700 hover:text-gray-900"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RecipientNavbar;