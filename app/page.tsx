import Sidebar from "@/components/Sidebar";
import MainNavbar from "@/components/MainNavbar";

export default function Page() {
  return (
    <div className="h-screen flex column-layout max-w-[1440px] mx-auto">
      {/* Sidebar Column */}
      <Sidebar />

      {/* Main Content Column */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-[1016px] mx-auto px-[64px]">
          {/* Navbar */}
          <MainNavbar />
          <div className="space-y-6">
            {/* Total Balance Section */}
            <section className="bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-semibold text-gray-600">
                    Total balance
                  </h1>
                  <p className="text-3xl font-bold text-gray-900">1.13 SGD</p>
                </div>
                {/* Action Buttons */}
              </div>
            </section>

            <section>
              <div className="flex space-x-4 items-center">
                <button className="h-[32px] px-4 bg-green-100 text-green-700 font-medium rounded-full hover:bg-green-200">
                  Send
                </button>
                <button className="h-[32px] px-4 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200">
                  Add money
                </button>
                <button className="h-[32px] px-4 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200">
                  Request
                </button>
              </div>
            </section>

            {/* Cards Section */}
            <section>
              <div className="carousel-container overflow-x-auto flex gap-[12px]">
                {/* Card 1 */}
                <a
                  aria-label="SGD balance. 0.69 SGD. Account details ending in 557-10."
                  className="balanceCard bg-gray-100 rounded-2xl p-4 w-[256px] flex-shrink-0 h-[208px] flex flex-col justify-between"
                  href="#"
                >
                  {/* Top Section with Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="sg-flag-square-250.png" // Adjust to the actual path of the icon
                        alt="SGD Flag"
                        className="w-12 h-12 rounded-full"
                      />
                      <span className="text-gray-700 text-lg font-bold ml-3">
                        SGD
                      </span>
                    </div>
                  </div>

                  {/* Balance Information */}
                  <div>
                    {/* Middle Section */}
                    <div className="text-sm text-gray-500 np-text-body-default flex items-center">
                      <span
                        className="tw-icon tw-icon-bank mr-2"
                        data-testid="bank-icon"
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
                          <path
                            fillRule="evenodd"
                            d="M12.905 2.658a1.3 1.3 0 0 0-1.373-.015L2.42 8.156a.87.87 0 0 0 .45 1.614h1.304v10.002h-1.74v1.739h19.131v-1.74h-1.739v-10h1.304V9.77a.869.869 0 0 0 .466-1.604zm5.23 5.373-5.933-3.76-6.216 3.76zm-5.266 1.74h5.218v10H12.87zm-6.956 0v10h5.217v-10z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <p>...123-45</p>
                    </div>
                    {/* Bottom Section */}
                    <div>
                      <p className="text-2xl font-bold text-gray-900">0.69</p>
                    </div>
                  </div>
                </a>
                {/* Card 2 */}

                <a
                  aria-label="CNY balance. 2.35 CNY. Account details ending in 178-65."
                  className="balanceCard bg-grey bg-gray-100 rounded-2xl p-4 w-[256px] flex-shrink-0 h-[208px]"
                  href="#"
                >
                  <p className="text-base font-semibold text-gray-700">
                    CNY balance
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    2.35 CNY
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Account details ending in 178-65.
                  </p>
                </a>
                {/* Card 3 */}
                <a
                  aria-label="GBP balance. 0.00 GBP. Account details ending in --."
                  className="balanceCard bg-grey bg-gray-100 rounded-2xl p-4 w-[256px] flex-shrink-0 h-[208px]"
                  href="#"
                >
                  <p className="text-base font-semibold text-gray-700">
                    GBP balance
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">
                    0.00 GBP
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Account details ending in --.
                  </p>
                </a>
                {/* Add more cards as needed */}
              </div>
            </section>

            {/* Transactions Section */}
            <section className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-800">
                  Transactions
                </h2>
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
                    <p className="text-sm text-gray-500">
                      Cancelled • Saturday
                    </p>
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
    </div>
  );
}
