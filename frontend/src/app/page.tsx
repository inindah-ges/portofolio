import Link from "next/link";

export default function Home() {
  return (
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
          </span>.
          <br />
          Membangun pengalaman melalui project nyata dan terus belajar teknologi baru.
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
 {/** ini section highlightsnya */}
            <section className="mpy-20"/>
        </div>

      </div>

    </section>
  );
}
           
              