import Sidebar from "@/components/Sidebar";
import MainNavbar from "@/components/MainNavbar";

export default function Page() {
  return (
    <div className="h-screen flex column-layout max-w-[1440px] mx-auto">
      {/* Sidebar Column */}
      <Sidebar />

      {/* Main Content Column */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        <div className="max-w-[1016px] mx-auto px-[64px]">
          {/* Navbar */}
          <MainNavbar />

          {/* Total Balance Section */}
          <section className="mt-8 bg-white p-6 rounded-lg shadow border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-base font-semibold text-gray-600">
                  Total balance
                </h1>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  1.13 SGD
                </p>
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
