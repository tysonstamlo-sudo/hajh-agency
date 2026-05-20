export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center">

      <div className="w-full max-w-5xl p-10">

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor your Hajj agency performance
        </p>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="border border-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">Revenue</p>
            <h2 className="text-3xl font-bold mt-2">$48,000</h2>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">Bookings</p>
            <h2 className="text-3xl font-bold mt-2">124</h2>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <p className="text-gray-400">Profit</p>
            <h2 className="text-3xl font-bold mt-2">$18,500</h2>
          </div>

        </div>

        {/* TABLE */}
        <div className="mt-12 border border-gray-800 rounded-xl overflow-hidden">

          <div className="p-4 border-b border-gray-800">
            <h2 className="text-xl font-semibold">Recent Bookings</h2>
          </div>

          <table className="w-full text-left">

            <thead className="bg-gray-900">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Package</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t border-gray-800">
                <td className="p-4">Ahmed Ali</td>
                <td className="p-4">VIP</td>
                <td className="p-4 text-green-400">Confirmed</td>
              </tr>

              <tr className="border-t border-gray-800">
                <td className="p-4">Fatima Noor</td>
                <td className="p-4">Premium</td>
                <td className="p-4 text-yellow-400">Pending</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}