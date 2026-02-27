export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        How PurePath AI Works
      </h1>

      <div className="max-w-4xl mx-auto space-y-10">

        <div>
          <h2 className="text-xl font-semibold mb-2">
            1. Citizens Report Waste
          </h2>
          <p className="text-gray-600">
            Users upload a photo of waste, add location details, and submit a report through the platform.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            2. AI Analyzes the Report
          </h2>
          <p className="text-gray-600">
            Our AI classifies the waste type, estimates severity, and detects hotspot patterns.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            3. Authorities Receive Alerts
          </h2>
          <p className="text-gray-600">
            City officials receive real-time notifications and optimized collection routes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">
            4. Impact is Measured
          </h2>
          <p className="text-gray-600">
            Dashboard analytics track waste reduction, response times, and citizen engagement.
          </p>
        </div>

      </div>
    </div>
  );
}
