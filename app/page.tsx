import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div className="h-screen flex column-layout max-w-[1440px] mx-auto">
      {/* Sidebar Column */}
      <Sidebar />

      {/* Main Content Column */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {/* Main Content */}
        <div className="max-w-[1016px] mx-auto px-[64px]">
          {/* Navbar */}
          <div className="h-[136px] flex items-center justify-end bg-white border-b border-gray-200">
            <div className="flex items-center space-x-4">
              {/* Profile Section */}
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

          {/* Total Balance Section */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-base font-semibold text-gray-600">
                  Total balance
                </h1>
                <p className="mt-2 text-3xl font-bold text-gray-900">1.13 SGD</p>
              </div>
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded-full hover:bg-green-200">
                  Send
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200">
                  Add money
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200">
                  Request
                </button>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="mt-8 grid grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-left">
              <p className="text-base font-semibold text-gray-700">SGD</p>
              <p className="text-sm text-gray-500">.. 557-10</p>
              <p className="text-2xl font-bold mt-2 text-gray-900">0.69</p>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-left">
              <p className="text-base font-semibold text-gray-700">CNY</p>
              <p className="text-sm text-gray-500">.. 178-65</p>
              <p className="text-2xl font-bold mt-2 text-gray-900">2.35</p>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-left">
              <p className="text-base font-semibold text-gray-700">IDR</p>
              <p className="text-sm text-gray-500">--</p>
              <p className="text-2xl font-bold mt-2 text-gray-900">0.23</p>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-left">
              <p className="text-base font-semibold text-gray-700">GBP</p>
              <p className="text-sm text-gray-500">--</p>
              <p className="text-2xl font-bold mt-2 text-gray-900">0.00</p>
            </div>
          </section>

          {/* Transactions Section */}
          <section className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-gray-800">Transactions</h2>
              <a
                href="#"
                className="text-sm font-medium text-green-700 hover:underline"
              >
                See all
              </a>
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">
                    Nguyen Thi Yen Nhi
                  </p>
                  <p className="text-sm text-gray-500">Sent • Saturday</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">57,702 VND</p>
                  <p className="text-sm text-gray-500">5 SGD</p>
                </div>
              </li>
              <li className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Jiang Hang</p>
                  <p className="text-sm text-gray-500">Cancelled • Saturday</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">80.38 CNY</p>
                  <p className="text-sm text-gray-500">20 SGD</p>
                </div>
              </li>
              <li className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Jiang Hang</p>
                  <p className="text-sm text-gray-500">Sent • 31 Dec 2024</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">288 CNY</p>
                  <p className="text-sm text-gray-500">312.65 CNY</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
