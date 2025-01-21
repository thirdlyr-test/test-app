export default function Sidebar() {
  return (
    <div className="sidebar-container column-layout-left position-sticky flex flex-col white w-60 h-full">
      {/* Accessibility Center */}
      <div className="accessibility-center flex items-center justify-center py-4 h-[136px]">
        <img
          src="/thirdlyr-high-res.png" // Replace with the actual path to your logo image
          alt="Logo"
          className="h-[24px] max-w-full"
        />
      </div>

      {/* Sidebar Navigation */}
      <div className="nav-sidebar flex-1 flex flex-col">
        {/* Body Section */}
        <div className="nav-sidebar__body px-6 mb-4">
          <ul className="list-none">
            {/* Home Navigation Item */}
            <li aria-current="page">
              <a
                role="menuitem"
                href="/home"
                className="generic-menu-item active text-black block py-3 px-4 rounded hover:bg-gray-700 flex items-center space-x-3"
              >
                <span className="tw-icon tw-icon-home">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="none"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.972 13.287 12.513 2.829a.83.83 0 0 0-1.2 0L.857 13.287l1.2 1.2L4.2 12.344v8.228a.86.86 0 0 0 .857.857h13.715a.86.86 0 0 0 .857-.857v-8.228l2.142 2.143zm-5.058 6.428h-12V10.63l6-6 6 6z"></path>
                  </svg>
                </span>
                <span>Home</span>
              </a>
            </li>

            {/* Card Navigation Item */}
            <li>
              <a
                role="menuitem"
                href="/card"
                className="generic-menu-item text-gray-500 block py-3 px-4 rounded hover:bg-gray-700 flex items-center space-x-3"
              >
                <span className="tw-icon tw-icon-card-transferwise">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="none"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21.424 4.714c.476 0 .862.386.862.862v6.423c0 .237-.2.424-.415.526a1.3 1.3 0 0 0-.416.322 1.8 1.8 0 0 0-.33.568 2.1 2.1 0 0 0-.125.728c0 .255.044.502.126.728.081.225.196.416.328.567s.276.256.417.323c.203.096.393.268.413.486h.002v2.606a.86.86 0 0 1-.862.861H2.576a.86.86 0 0 1-.862-.861V5.576c0-.476.386-.862.862-.862zm-.853 12.242V18H3.428V6.429h17.143v4.9a3 3 0 0 0-.407.39c-.278.318-.5.696-.65 1.112s-.228.862-.228 1.312.077.896.228 1.312c.15.416.372.794.65 1.112q.19.216.407.39m-15-5.813h2.572V9.429H5.57z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Card</span>
              </a>
            </li>

            {/* Recipients Navigation Item */}
            <li>
              <a
                role="menuitem"
                href="/recipients"
                className="generic-menu-item text-gray-500 block py-3 px-4 rounded hover:bg-gray-700 flex items-center space-x-3"
              >
                <span className="tw-icon tw-icon-recipients">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="none"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.186 12.3a5.11 5.11 0 0 0 2.1-4.157C19.286 5.314 16.97 3 14.143 3a5.17 5.17 0 0 0-4.457 2.571c-2.743.086-4.972 2.358-4.972 5.143 0 1.715.815 3.215 2.1 4.157A6.8 6.8 0 0 0 3 21h1.714c0-2.014 1.2-3.771 2.872-4.629.643-.3 1.328-.514 2.1-.514h.171C12.686 15.857 15 18.171 15 21h1.714c0-2.7-1.543-5.014-3.814-6.129a5.6 5.6 0 0 0 1.414-1.585c2.743.085 4.972 2.357 4.972 5.143H21c0-2.7-1.543-5.015-3.814-6.129m-8.272 1.714C7.5 13.586 6.43 12.3 6.43 10.714c0-1.628 1.114-2.957 2.614-3.343.257-.042.514-.085.814-.085.343 0 .643.043.943.128 1.457.429 2.486 1.715 2.486 3.3 0 .257-.043.472-.086.729-.343 1.543-1.714 2.7-3.343 2.7-.343 0-.643-.043-.943-.129m6.043-2.528c.043-.257.043-.515.043-.772 0-2.228-1.414-4.114-3.429-4.843a3.38 3.38 0 0 1 2.572-1.157 3.44 3.44 0 0 1 3.428 3.429c0 1.628-1.114 2.957-2.614 3.343"></path>
                  </svg>
                </span>
                <span>Recipients</span>
              </a>
            </li>

            {/* Payments Navigation Item */}
            <li>
              <a
                role="menuitem"
                href="/payments"
                className="generic-menu-item text-gray-500 block py-3 px-4 rounded hover:bg-gray-700 flex items-center space-x-3"
              >
                <span className="tw-icon tw-icon-multi-currency">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="none"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.086 8.57a3.45 3.45 0 0 0 3.042-1.843 6.3 6.3 0 0 1 1.415.943 6.86 6.86 0 0 1 2.314 4.329h1.714a8.64 8.64 0 0 0-3.428-6.043 9 9 0 0 0-1.629-.943c-.085-1.843-1.585-3.3-3.428-3.3s-3.343 1.457-3.429 3.3v.128c0 .558.129 1.115.386 1.586a3.45 3.45 0 0 0 3.043 1.843m-1.543-4.157a1.73 1.73 0 0 1 1.543-.986c.685 0 1.285.429 1.543.986.085.214.171.471.171.728 0 .386-.129.729-.343.986-.3.429-.814.729-1.371.729-.558 0-1.072-.3-1.372-.729a1.53 1.53 0 0 1-.343-.986c0-.257.043-.471.172-.728m8.785 10.156c-.02-.021-.042-.032-.064-.043a.2.2 0 0 1-.064-.043c-.471-.3-1.029-.428-1.543-.471a3.46 3.46 0 0 0-3.129 1.714c-.642 1.157-.6 2.529.086 3.557q-.706.45-1.543.772a6.76 6.76 0 0 1-4.928-.172c0 .043-.857 1.543-.857 1.5a8.52 8.52 0 0 0 6.943.043 8 8 0 0 0 1.67-.943 3.407 3.407 0 0 0 4.544-1.328c.943-1.586.428-3.6-1.115-4.586m-.342 3.729c-.343.6-.986.9-1.629.857-.257-.043-.471-.086-.686-.215-.343-.17-.557-.47-.685-.77-.215-.472-.215-1.072.085-1.544.3-.514.772-.771 1.329-.857.343-.043.686.043 1.029.214.214.129.385.3.514.472.3.557.385 1.243.043 1.843M4.943 12.557c1.243-.043 2.486.557 3.129 1.714.685 1.114.6 2.486-.086 3.643-.257.428-.686.814-1.157 1.114-.043 0-.086 0-.129.043-1.586.857-3.6.257-4.543-1.329a3.48 3.48 0 0 1 1.157-4.628 7.3 7.3 0 0 1 0-1.929 8.55 8.55 0 0 1 3.515-6c-.017-.032.097.164.246.421.244.422.584 1.01.61 1.036a6.8 6.8 0 0 0-2.613 4.2 5.8 5.8 0 0 0-.13 1.715m1.029 4.885c.3-.171.557-.471.685-.771.257-.471.215-1.071-.043-1.543a1.72 1.72 0 0 0-1.328-.857c-.343-.043-.686.043-1.029.214-.214.129-.385.257-.514.472-.386.514-.429 1.242-.086 1.842s.986.9 1.629.858c.214 0 .471-.086.686-.215"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Payments</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
