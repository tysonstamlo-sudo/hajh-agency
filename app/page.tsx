export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20">

      {/* HERO */}
      <h1 className="text-5xl font-bold tracking-tight">
  HAJH AI AGENCY
</h1>

<p className="mt-6 text-lg text-gray-300">
  We build AI systems that automate businesses, generate leads, and increase revenue.
</p>

<div className="mt-10 flex gap-4 justify-center">
  <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:opacity-80">
    Book a Demo
  </button>

  <button className="px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-900">
    See Services
  </button>
</div>

      {/* SERVICES */}
      <section className="mt-24 w-full max-w-4xl">

  <h2 className="text-2xl font-semibold text-center">
    What We Do
  </h2>

  <div className="mt-10 grid md:grid-cols-3 gap-6">

    <div className="p-6 border border-gray-800 rounded-xl">
      <h3 className="font-semibold">AI Content</h3>
      <p className="text-gray-400 mt-2 text-sm">
        Short-form videos for TikTok, Reels, and YouTube Shorts.
      </p>
    </div>

    <div className="p-6 border border-gray-800 rounded-xl">
      <h3 className="font-semibold">AI Automation</h3>
      <p className="text-gray-400 mt-2 text-sm">
        Automate business workflows and save time.
      </p>
    </div>

    <div className="p-6 border border-gray-800 rounded-xl">
      <h3 className="font-semibold">Lead Generation</h3>
      <p className="text-gray-400 mt-2 text-sm">
        Systems that bring consistent customers.
      </p>
    </div>

  </div>

</section><section className="mt-24 w-full max-w-4xl">

  <h2 className="text-2xl font-semibold text-center">
    Pricing
  </h2>

  <div className="mt-10 grid md:grid-cols-3 gap-6">

    <div className="p-6 border border-gray-800 rounded-xl">
      <h3 className="font-semibold">Starter</h3>
      <p className="text-2xl mt-2">$500</p>
      <p className="text-gray-400 mt-2 text-sm">
        Basic AI content system for small businesses.
      </p>
    </div>

    <div className="p-6 border border-gray-800 rounded-xl">
      <h3 className="font-semibold">Growth</h3>
      <p className="text-2xl mt-2">$2,000</p>
      <p className="text-gray-400 mt-2 text-sm">
        AI automation + content + lead generation.
      </p>
    </div>

    <div className="p-6 border border-gray-800 rounded-xl">
      <h3 className="font-semibold">Scale</h3>
      <p className="text-2xl mt-2">$5,000</p>
      <p className="text-gray-400 mt-2 text-sm">
        Full AI system for scaling and automation.
      </p>
    </div>

  </div>

</section><section className="mt-24 w-full max-w-2xl mx-auto text-center">

  <h2 className="text-2xl font-semibold">
    Book a Demo
  </h2>

  <p className="text-gray-400 mt-3">
    Leave your details and we’ll contact you.
  </p>

  <section className="mt-24 w-full max-w-2xl mx-auto text-center">

  <h2 className="text-2xl font-semibold">
    Book a Demo
  </h2>

  <p className="text-gray-400 mt-3">
    Contact us instantly
  </p>

  <div className="mt-8 flex flex-col gap-4">

    <a
      href="https://wa.me/0615767075"
      target="_blank"
      className="p-3 bg-green-500 text-black font-semibold rounded-xl"
    >
      Chat on WhatsApp
    </a>

    <a
      href="mailto:tysonstamlo@gmail.com"
      className="p-3 border border-gray-700 rounded-xl"
    >
      Send Email
    </a>

  </div>

</section>

</section>

      {/* FOOTER */}
      <footer className="mt-32 text-gray-500">
        © HAJH Agency
      </footer>

    </main>
  );
}
