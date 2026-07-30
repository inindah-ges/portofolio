import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for projects
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Halo, saya </span>

            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Indah Mudani Ramadhan
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Siswa XII RPL 1 yang passionate dalam{" "}
            <span className="text-indigo-300 font-medium">
              Web Development
            </span>
            .
            <br />
            Membangun pengalaman melalui project nyata dan terus belajar
            teknologi baru.
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/portofolio"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold hover:scale-105 transition"
            >
              Lihat Portofolio
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition"
            >
              Hubungi Saya
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Apa yang saya lakukan
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto">
              Beberapa keahlian dan bidang yang saya tekuni selama belajar di
              jurusan RPL.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">

              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <span className="text-2xl">🏘️</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                Frontend Development
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Membangun antarmuka website yang responsif dan interaktif
                menggunakan React, Next.js, dan Tailwind CSS.
              </p>

            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">

              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <span className="text-2xl">💲</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                Backend Development
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Mengembangkan API dan server-side logic dengan Express.js dan
                mengelola database MySQL.
              </p>

            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">

              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <span className="text-2xl">💕</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                UI/UX Design
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Mendesain pengalaman pengguna yang intuitif dan tampilan visual
                yang modern dan menarik.
              </p>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}