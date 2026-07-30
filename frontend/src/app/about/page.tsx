export default function AboutPage() {
  return (
    <>
      {/* ini headernya */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>

            <p className="text-gray-400 max-w-xl mx-auto">
              Kenali lebih lanjut siapa saya, apa yang saya pelajari, dan apa
              yang mmemotivasi saya.
            </p>
          </div>

          {/* ini profile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ini photo & info */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              {/* ini avatar */}
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 border border-gray-800/50 flex items-center justify-center">
                <span className="tetx-6xl">
                  {" "}
                  <img
                    src="/porto.jpg"
                    alt="Porto"
                  />{" "}
                </span>
              </div>

              {/* ini cards */}
              <div className="w-full space-y-3">
                {[
                  { label: "Nama", value: "Indah Mudani Ramadhan" },
                  { label: "Kelas", value: "XII RPL 1" },
                  { label: "Sekolah", value: "SMK Telkom Makassar" },
                  { label: "Lokasi", value: "Indonesia" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-900/50 border border-gray-800/50"
                  >
                    <span className="text-gray-400 text-sm">{item.label}</span>

                    <span className="text-white text-sm font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* deskripsi kanan */}
            <div className="sapce-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  siapa saya?
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  Saya adalah siswa di SMK Telkom Makassar yang sedang duduk di
                  kelas 12 Jurusan Rekayasa Perangkat Lunak (RPL) yang memiliki
                  kemampuan besar di bidang web devalopment. Saya senang
                  membangun website dan aplikasi web yang tidak hanya
                  fungsional, tetapi juga memiliki tampian yang menarik dan
                  memberikan pengalaman kepada pengguna dengan baik.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Perjalanan Saya
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  Perjalana saya di dunia programing di mulai sejak saya kelas
                  10, saat itu saya hanya belajar HTML dan css, sejak saat itu
                  saya mulai mengeksplorasi berbagai macam teknologi mulai dari
                  JavaScript, React, Next.js, hingga backend dengan Express.js
                  dan database MySQL.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Tujuan Saya
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  Saya ingin terus berkembang menjadi full-stack web devaloper
                  yang handal, jago, dan di percaya. Melalui portofolio pertama
                  saya ini, saya ingin menunjukkan hasil kerja dan kemampuan
                  yang telah saya bangun selama bersekolah di SMK Telkom
                  Makassar dan menekuni di jurusan RPL.
                </p>
              </div>
            </div>
          </div>

          {/* ini edukasi dan timeline pendidikan */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mv-10">
              Pendidikan
            </h2>

            <div className="max-w-2xl mx-auto apce-y-6">
              {/* timeline 1 */}
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-950" />

                <div className="p-5 rounded-xl bg-gray-900/50 border border-grey-800/50">
                  <span className="text-xs text-indigo-400- font-medium">
                    2024 - Sekarang
                  </span>

                  <h3 className="text-white font-semibold mt-1">
                    SMK Telkom Makassar - XII RPL 1
                  </h3>

                  <p className="text-grey-400 text-sm mt-1">
                    Mempelajari pemrograman web, mobile, dan desktop. Fookus
                    pada pengembangan fullstack web application
                  </p>
                </div>
              </div>

              {/* timeline 2 */}
              <div className="relative pl-8 border-l-2 border-gray-800/50">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-gray-700 border-4 border-gray-950" />

                <div className="p-5 rounded-xl bg-gray-900/50 border border-grey-800/50">
                  <span className="text-xs text-gray-500- font-medium">
                    2023 - 2024
                  </span>

                  <h3 className="text-white font-semibold mt-1">
                    SMPIT Nurul Fikri Makassar
                  </h3>

                  <p className="text-grey-400 text-sm mt-1">
                    Masa SMP dimana saya mulai tertarik denan dunia teknologi
                    dan perkomputeran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
