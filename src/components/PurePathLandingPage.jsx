import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PurePathLandingPage() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 bg-white shadow-sm relative">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-md"></div>
          <span className="font-semibold text-lg">PurePath AI</span>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 text-sm text-gray-600 items-center">

          {/* Features Dropdown */}
          <div className="relative">
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-black cursor-pointer"
            >
              Features
            </div>

            {showDropdown && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl w-48 p-2 z-50">

                <div
                  onClick={() => {
                    navigate("/dashboard");
                    setShowDropdown(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                >
                  Dashboard
                </div>

                <div
                  onClick={() => {
                    navigate("/report");
                    setShowDropdown(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                >
                  Report Waste
                </div>

                <div
                  onClick={() => {
                    navigate("/result");
                    setShowDropdown(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                >

                  Result Frame
                </div>

                <div
                  onClick={() => {
                    navigate("/alert");
                    setShowDropdown(false);
                  }}
                  className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                >
                  Alert Details
                </div>

              </div>
            )}
          </div>

          <Link to="/how-it-works" className="hover:text-black">
            How It Works
          </Link>

        </div>

        <Link
          to="/dashboard"
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition"
        >
          Go to Dashboard
        </Link>

      </nav>


      {/* ================= HERO ================= */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-10 py-20 items-center">

        <div>
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            NEXT-GEN URBAN TECH
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            AI-Powered Civic Reporting for{" "}
            <span className="text-blue-600">Smarter Cities</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-lg">
            Empowering citizens and municipalities with real-time sanitation
            analytics to build cleaner, more resilient urban environments.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/dashboard"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition"
            >
              Go to Dashboard →
            </Link>

            <Link
              to="/how-it-works"
              className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              How It Works
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807"
            alt="Waste collection"
            className="rounded-2xl shadow-lg w-full h-[450px] object-cover"
          />
        </div>

      </section>


      {/* ================= CRISIS SECTION ================= */}
      <section className="bg-white py-20 px-6 md:px-10 text-center">
        <h2 className="text-3xl font-bold">The Hidden Crisis of Urban Waste</h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Legacy infrastructure and manual reporting systems are failing
          growing cities. PurePath identifies sanitation gaps before
          they escalate into public emergencies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Urban Waste Overload",
              desc: "Inefficient collection routes lead to overflowing bins and street litter."
            },
            {
              title: "Drainage Blockage",
              desc: "Blocked drainage systems cause severe flooding in rainy seasons."
            },
            {
              title: "Public Health Risks",
              desc: "Sanitation gaps increase disease spread in dense communities."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= SOLUTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            The PurePath AI Solution
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            PurePath uses Artificial Intelligence to predict waste hotspots,
            optimize collection routes, and provide real-time analytics dashboards
            for city authorities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-3">
                AI Waste Prediction
              </h3>
              <p className="text-gray-600">
                Detects high-risk dumping areas using real-time reports.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-3">
                Smart Route Optimization
              </h3>
              <p className="text-gray-600">
                Improves efficiency of waste trucks and reduces fuel costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl shadow-md bg-white">
              <h3 className="text-xl font-semibold mb-3">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600">
                Gives municipalities live dashboards and sanitation alerts.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-green-900 text-white py-14 px-6 md:px-10 grid md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold">40%</h3>
          <p>Waste Reduced</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">12m</h3>
          <p>Response Time</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">15+</h3>
          <p>Cities Covered</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">850k</h3>
          <p>Citizens Engaged</p>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-20 px-6 flex justify-center bg-blue-600">
        <div className="text-white text-center max-w-3xl">
          <h2 className="text-2xl font-bold">
            Ready to transform your city's sanitation?
          </h2>

          <p className="mt-4 text-blue-100">
            Join municipalities already using PurePath AI.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/how-it-works"
              className="bg-green-400 text-black px-6 py-3 rounded-lg font-medium"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-100 text-gray-700 pt-16 pb-8 border-t">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              PurePath AI
            </h3>
            <p className="text-sm text-gray-500">
              Building smarter, cleaner cities through AI-driven civic reporting.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Analytics</li>
              <li>Reporting</li>
              <li>Dashboard</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-300"
            />
          </div>

        </div>

        <div className="text-center text-sm text-gray-400 mt-10">
          © 2024 PurePath AI. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
