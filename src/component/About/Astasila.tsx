export default function Astasila() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 p-4 md:p-8 flex items-center justify-center">
      {/* Main Container with Glassmorphism Effect */}
      <div className="max-w-7xl w-full bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>

        {/* Content Layout */}
        <div className=" gap-8 lg:gap-10 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-wider text-center bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Company Value: Asta Sila
          </h1>
          {/* Text Content */}
          <div className="flex-1 text-white order-2 lg:order-1">
            <div className="text-base md:text-lg leading-relaxed text-white/90 space-y-8">
              {/* Point 1: Spiritual Foundation */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-justify">
                    Kami adalah makhluk Allah yang Maha Pengasih dan Penyayang.
                    Oleh karena itu, setiap takdir yang kami terima adalah yang
                    terbaik. Apapun keadaannya, mari selalu bersyukur
                    kepada-Nya.
                  </p>
                </div>
              </div>

              {/* Point 2: Personal Excellence */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-justify">
                    Allah menciptakan kami dengan sempurna. Melalui usaha
                    sungguh-sungguh dan doa, kami percaya bahwa kami dapat
                    membentuk takdir terbaik untuk diri kami. Menjadi kebanggaan
                    orangtua dan keluarga adalah cita-cita kami. Kami
                    berkomitmen untuk membuat mereka bangga dan menjaga nama
                    baik keluarga.
                  </p>
                </div>
              </div>

              {/* Point 3: Team Collaboration */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-justify">
                    Rekan kerja kami adalah orang yang paling sering
                    berinteraksi satu sama lain. Kami berusaha untuk saling
                    mendukung, bekerja sama tanpa adanya pengkhianatan, dan
                    terus belajar bersama untuk tumbuh dan berkembang menjadi
                    tim yang hebat.
                  </p>
                </div>
              </div>

              {/* Point 4: Mutual Respect */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  4
                </div>
                <div className="flex-1">
                  <p className="text-justify">
                    Kami adalah makhluk yang berbudi pekerti, karena itu kami
                    menghargai sopan santun dan menghormati perbedaan. Orang
                    yang lebih tua harus membimbing yang lebih muda, dan yang
                    lebih muda harus menghormati yang lebih tua.
                  </p>
                </div>
              </div>

              {/* Point 5: Customer Focus */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  5
                </div>
                <div className="flex-1">
                  <p className="text-justify">
                    Pelanggan adalah sahabat kami. Mereka telah memberikan
                    kepercayaan kepada kami dan tanpa mereka perusahaan kami
                    tidak akan berkembang. Oleh karena itu, kami berkomitmen
                    untuk memberikan layanan yang terbaik, mendengarkan, dan
                    membuat mereka senang.
                  </p>
                </div>
              </div>

              {/* Point 6: Continuous Growth */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mt-1">
                  6
                </div>
                <div className="flex-1">
                  <p className="text-justify">
                    Kemajuan tim adalah prioritas utama kami. Kami berusaha
                    membangun budaya kerja yang baik, patuh pada
                    profesionalitas, bekerja dengan fokus, gigih, dan optimal.
                    Hidup hanya sekali, maka raihlah ilmu setinggi-tingginya,
                    tanamkan tauhid yang murni, terapkan strategi dengan
                    sempurna, dan berusahalah sehebat-hebatnya dalam setiap
                    pemikiran dan tindakan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}
