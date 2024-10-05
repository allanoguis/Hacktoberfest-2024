"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-w-full bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Website Name and Logo */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-400">Gojirun</h2>
            <p className="mt-2 text-gray-400">
              Run, jump, and enjoy the adventure! Play the game now.
            </p>
          </div>

          {/* Open Source Project Information */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-400">
              Open Source Contribution
            </h2>
            <p className="mt-2 text-gray-400">
              This is an open-source project. Contributions are welcome! Check
              out the GitHub repository for more information.
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <Link
                href="https://github.com/allanoguis/Hacktoberfest-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub Repository</span>
              </Link>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/allanoguis/Hacktoberfest-2024/issues"
                  )
                }
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                Raise an Issue
              </button>
            </div>
          </div>

          {/* Game Updates Subscription */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-400">
              Subscribe for Game Updates
            </h2>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="mt-2 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Gojirun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
