"use client";
import RecipientNavbar from "@/components/RecipientNavbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReviewPage() {
  const handleConfirmAndSend = () => {
    const storedDetails = sessionStorage.getItem("paymentDetails");
    if (storedDetails) {
      const paymentDetails = JSON.parse(storedDetails);
      const currentTime = new Date().toISOString(); // Capture current timestamp
      const updatedDetails = { ...paymentDetails, setupTime: currentTime, fee: fee }; // Add timestamp

      sessionStorage.setItem("paymentDetails", JSON.stringify(updatedDetails)); // Store updated data
    }
    router.push("/confirmation");
  };

  const [paymentDetails, setPaymentDetails] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedDetails = sessionStorage.getItem("paymentDetails");
    if (storedDetails) {
      setPaymentDetails(JSON.parse(storedDetails));
    }
  }, []);

  if (!paymentDetails) return <p>Loading...</p>;

  const { company, amount, document } = paymentDetails;
  const { name: companyName, account: accountNumber } = company;
  const fee = Number(amount * 0.001).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const amountFormatted = parseFloat(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="h-screen flex flex-col max-w-[1440px] mx-auto">
      <RecipientNavbar currentPage="review" />
      <div className="flex-1 overflow-y-auto px-6 py-8 max-w-[1016px] mx-auto no-scrollbar">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Review Payment
        </h1>

        <div className="bg-white p-6 space-y-6">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-700">
            <div className="font-semibold text-base">Company Name</div>
            <div className="font-bold text-xl">{companyName}</div>

            <div className="font-semibold text-base">Account Number</div>
            <div className="text-base">{accountNumber}</div>

            <div className="font-semibold text-base">Amount</div>
            <div className="font-bold text-xl">{amountFormatted} USD</div>

            <div className="font-semibold text-base">Total Fees</div>
            <div className="text-base">{fee} USD</div>

            <div className="font-semibold text-base">Estimated Arrival</div>
            <div className="text-base">In seconds</div>

            <div className="font-semibold text-base">Document</div>
            <div className="text-base">{document}</div>
          </div>

          <button
            type="button"
            onClick={handleConfirmAndSend} // Use the new handler
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-3xl hover:bg-green-600 transition"
          >
            Confirm and Send
          </button>
        </div>
      </div>
    </div>
  );
}
