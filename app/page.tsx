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
                  <p className="text-3xl font-bold text-gray-900">17,125.54 SGD</p>
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
                  aria-label="USD balance. 100.00 USD. Account details ending in 234-45."
                  className="balanceCard bg-gray-100 rounded-2xl p-4 w-[256px] flex-shrink-0 h-[208px] flex flex-col justify-between"
                  href="#"
                >
                  {/* Top Section with Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="us-flag-square-250.png" // Adjust to the actual path of the icon
                        alt="US Flag"
                        className="w-12 h-12 rounded-full"
                      />
                      <span className="text-gray-700 text-lg font-bold ml-3">
                        USD
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
                      <p>...234-56</p>
                    </div>
                    {/* Bottom Section */}
                    <div>
                      <p className="text-2xl font-bold text-gray-900">100.00</p>
                    </div>
                  </div>
                </a>

                {/* Card 3 */}
                <a
                  aria-label="USDC balance. 12500.00 USDC. Account details ending in 0x...1234."
                  className="balanceCard bg-gray-100 rounded-2xl p-4 w-[256px] flex-shrink-0 h-[208px] flex flex-col justify-between"
                  href="#"
                >
                  {/* Top Section with Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="usd-coin-usdc-logo.png" // Adjust to the actual path of the icon
                        alt="USDC"
                        className="w-12 h-12 rounded-full"
                      />
                      <span className="text-gray-700 text-lg font-bold ml-3">
                        USDC
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
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.31 9H14.0176C12.351 9 11 10.3431 11 12C11 13.6569 12.351 15 14.0176 15H21.31M14 12V12.01M3.55556 5.72222C4.08333 5.36111 7.77778 5 12 5C16.2222 5 19.9167 5.36111 20.4444 5.72222C20.7556 5.93511 21.0667 7.40107 21.2697 8.75005C21.3207 9.08894 21.3649 9.45201 21.4005 9.83339C21.4637 10.509 21.5 11.2421 21.5 12.0001C21.5 13.1859 21.4111 14.3108 21.2697 15.2501C21.0667 16.599 20.7556 18.0649 20.4444 18.2778C19.9167 18.6389 16.2222 19 12 19C7.77778 19 4.08333 18.6389 3.55556 18.2778C3.02778 17.9167 2.5 14.8889 2.5 12.0001C2.5 11.2421 2.53633 10.509 2.59946 9.83339C2.77694 7.9339 3.16625 5.98859 3.55556 5.72222Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <p>0x...1234</p>
                    </div>
                    {/* Bottom Section */}
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        12,500.00
                      </p>
                    </div>
                  </div>
                </a>
                {/* Add more cards as needed */}
              </div>
            </section>

            {/* Transactions Section */}
            <section>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">
                  Transactions
                </h3>
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
