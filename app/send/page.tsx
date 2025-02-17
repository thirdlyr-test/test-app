"use client";
import RecipientNavbar from "@/components/RecipientNavbar";
import { useRouter } from "next/navigation";

export default function RecipientPage() {
  const router = useRouter();

  const handleSelectCompany = (company) => {
    sessionStorage.setItem("selectedCompany", JSON.stringify(company));
    router.push("/amount");
  };

  const companies = [
    { name: "Wilhemsen Thailand", account: "0799" },
    { name: "Maritime Port Authority (Singapore)", account: "1987" },
    { name: "JTY Maritime", account: "3127" },
  ];

  return (
    <div className="h-screen flex flex-col max-w-[1440px] mx-auto">
      {/* Navbar */}
      <RecipientNavbar currentPage="recipient" />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8 max-w-[1016px] mx-auto no-scrollbar">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Who are you sending money to?
        </h1>

        {/* Search Input */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search company name, email, or phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Add Recipient Section */}
        <div className="flex items-center space-x-4 p-4 bg-gray-50 border border-gray-200 rounded-3xl mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c2.485 0 4.5-2.015 4.5-4.5S14.485 2 12 2 7.5 4.015 7.5 6.5 9.515 11 12 11z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c-5.52 0-10 3.423-10 7.5V21h20v-1.5c0-4.077-4.48-7.5-10-7.5z"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">
            Add a recipient
          </span>
        </div>

        {/* Companies List */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            All Companies
          </h2>
          <ul className="space-y-4">
            {companies.map((company, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-4 bg-white cursor-pointer hover:bg-gray-50"
                onClick={() => handleSelectCompany(company)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-700 rounded-full font-medium">
                    {company.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{company.name}</p>
                    <p className="text-sm text-gray-500">
                      Account ending in {company.account}
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
