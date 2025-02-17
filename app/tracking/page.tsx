"use client";
import Sidebar from "@/components/Sidebar";
import MainNavbar from "@/components/MainNavbar";
import { useState, useEffect } from "react";

export default function TrackingPage() {
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    const storedDetails = sessionStorage.getItem("paymentDetails");
    if (storedDetails) {
      const details = JSON.parse(storedDetails);
      const formattedTime = new Intl.DateTimeFormat("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Singapore",
      }).format(new Date(details.setupTime));

      details.formattedTime = formattedTime;
      setPaymentDetails(details);
    }
  }, []);

  const [activeTab, setActiveTab] = useState("updates");

  const handleTabClick = (tab) => setActiveTab(tab);

  const amountFormatted = parseFloat(paymentDetails?.amount).toLocaleString(
    "en-US",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

  return (
    <div className="h-screen flex column-layout max-w-[1440px] mx-auto">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1016px] mx-auto px-[64px]">
          <MainNavbar currentPage="tracking" />
          <h1 className="text-2xl font-bold text-gray-900 my-6">
            Transaction details
          </h1>

          <div className="bg-gray-100 rounded-xl p-6 flex justify-between items-center mb-6">
            <div>
              <p className="font-semibold text-gray-800">
                {paymentDetails?.company.name || "Loading..."}
              </p>
              <span className="text-sm text-gray-500">Sent</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">
                {amountFormatted || "0"} USD
              </p>
              <span className="text-sm text-gray-500">
                {amountFormatted || "0"} USD
              </span>
            </div>
          </div>

          <div className="flex border-b mb-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "updates"
                  ? "border-b-2 border-green-500 text-green-600 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("updates")}
            >
              Updates
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "details"
                  ? "border-b-2 border-green-500 text-green-600 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("details")}
            >
              Details
            </button>
          </div>

          {activeTab === "updates" ? (
            <div>
              <ul className="space-y-4">
                <li className="flex space-x-4 items-start">
                  <span className="text-green-500 mt-1">✔</span>
                  <div>
                    <p className="font-medium text-gray-800">
                      You set up your transfer
                    </p>
                    <span className="text-sm text-gray-500">
                      {paymentDetails?.formattedTime || "Loading..."}
                    </span>
                  </div>
                </li>
                <li className="flex space-x-4 items-start">
                  <span className="text-green-500 mt-1">✔</span>
                  <div>
                    <p className="font-medium text-gray-800">
                      Payment send to to{" "}
                      {paymentDetails?.company.name || "Loading..."}
                    </p>
                    <span className="text-sm text-gray-500">
                      {paymentDetails?.formattedTime || "Loading..."}
                    </span>
                  </div>
                </li>
                <li className="flex space-x-4 items-start">
                  <span className="text-green-500 mt-1">✔</span>
                  <div>
                    <p className="font-medium text-gray-800">
                      Funds received by{" "}
                      {paymentDetails?.company.name || "Loading..."}
                    </p>
                    <span className="text-sm text-gray-500">
                      {paymentDetails?.formattedTime || "Loading..."}
                    </span>
                  </div>
                </li>
              </ul>
              <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
                Share with recipient
              </button>
            </div>
          ) : (
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="font-semibold text-lg mb-4">
                Transaction details
              </h2>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="font-medium">You sent</div>
                <div>{amountFormatted || "0"} USD USD</div>
                <div className="font-medium">Fees</div>
                <div>{paymentDetails?.fee || "0"} USD</div>
                <div className="font-medium">Recipient</div>
                <div>{paymentDetails?.company.name || "Loading..."}</div>
                <div className="font-medium">Account number</div>
                <div>{paymentDetails?.company.account || "Loading..."}</div>
                <div className="font-medium">Transaction date</div>
                <div>{paymentDetails?.formattedTime || "Loading..."}</div>
                <div className="font-medium">Document</div>
                <div>
                  <a
                    href="#"
                    className="text-green-500 underline hover:text-green-600"
                  >
                    {paymentDetails?.document || "No document"}
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 w-full">
                  Repeat this transfer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
