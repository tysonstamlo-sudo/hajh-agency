export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <div
        className="h-[70vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 p-8 rounded-xl">

          <h1 className="text-5xl font-bold">
            For Most Galaxy Hajj Agency updates
          </h1>

          <p className="text-gray-200 mt-4 text-lg">
            Your trusted partner for Hajj & Umrah journeys to Makkah
          </p>

          <div className="mt-6 flex gap-4 justify-center">

            <a href="/packages" className="bg-white text-black px-6 py-3 rounded-lg">
              View Packages
            </a>

            <a href="/book" className="border border-white px-6 py-3 rounded-lg">
              Book Now
            </a>

          </div>

        </div>
      </div>

      {/* INFO SECTION */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-semibold">
          Plan Your Spiritual Journey with Confidence
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We provide complete Hajj and Umrah packages including flights,
          accommodation, visa assistance, and guided support.
        </p>
      </section>

    </main>
  );
}