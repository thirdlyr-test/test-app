"use client";
import RecipientNavbar from "@/components/RecipientNavbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AmountPage() {
  const [company, setCompany] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const storedCompany = sessionStorage.getItem("selectedCompany");
    if (storedCompany) {
      setCompany(JSON.parse(storedCompany));
    }
  }, []);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentTime = new Date().toISOString(); // Get current date-time in ISO format

    const formData = {
      company,
      amount: e.target.amount.value,
      document: fileName,
      setupTime: currentTime, // Add timestamp to the form data
    };

    sessionStorage.setItem("paymentDetails", JSON.stringify(formData));
    router.push("/review");
  };

  return (
    <div className="h-screen flex flex-col max-w-[1440px] mx-auto">
      <RecipientNavbar currentPage="amount" />
      <div className="flex-1 overflow-y-auto px-6 py-8 max-w-[1016px] mx-auto no-scrollbar">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Payment Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company and Account Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              value={company?.name || ""}
              readOnly
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-3xl shadow-sm bg-gray-100 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Account Number
            </label>
            <input
              type="text"
              value={company?.account || ""}
              readOnly
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-3xl shadow-sm bg-gray-100 text-gray-700"
            />
          </div>
          {/* Amount Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount (USD)<span className="text-red-500">*</span>
            </label>
            <input
              name="amount"
              type="float"
              required
              placeholder="Enter amount"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:border-green-500"
            />
          </div>
          {/* Upload Document Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Document<span className="text-red-500">*</span>
            </label>
            <input
              name="document"
              type="file"
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:border-green-500"
              onChange={(e) => setFileName(e.target.files[0]?.name || "")}
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-3xl hover:bg-green-600 transition"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}
