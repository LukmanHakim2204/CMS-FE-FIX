const DirectorAbout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-4 md:p-8 flex items-center justify-center">
      {/* Main Container */}
      <div className="max-w-4xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border-4 border-orange-400 relative">
        {/* Header Section with Profile */}
        <div className="flex flex-col items-center text-center gap-6 mb-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-orange-400 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Muhammad Nasirudin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Muhammad Nasirudin, S.Kom.
            </h1>
            <p className="text-lg text-orange-600 font-semibold italic">
              Director
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-400 pb-2">
            About
          </h2>

          {/* Introduction */}
          <div className="bg-orange-50 p-9 rounded-2xl border-l-4 border-orange-400">
            <p className="text-gray-700 leading-relaxed text-justify">
              Dilahirkan pada 25 Juni 1995 di Bandung. Lulus dari S1 Teknik
              Informatika di Stikom Poltek Cirebon pada 2016, Nasir telah
              mengukir jejaknya sebagai inovator tangguh.
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">📚</span>
              </div>
              Pendidikan yang Mengilhami:
            </h3>
            <div className="pl-9">
              <p className="text-gray-700 leading-relaxed text-justify bg-gray-50 p-2 rounded-lg">
                Menjadi lulusan S1 Teknik Informatika adalah langkah pertama
                Nasir untuk menjelajahi dunia teknologi. Perjalanan akademiknya
                di Stikom Poltek Cirebon (2012-2016) memberikan fondasi yang
                kokoh, mempersenjatainya dengan pengetahuan mendalam dalam
                menghadapi tantangan di era digital.
              </p>
            </div>
          </div>

          {/* Professional Achievement Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🏆</span>
              </div>
              Mengukir Prestasi di Dunia Profesional:
            </h3>
            <div className="pl-9 ">
              <p className="text-gray-700 leading-relaxed text-justify bg-gray-50 p-2 rounded-lg">
                Sejak 2020, Nasir memimpin sebagai Direktur di sebuah perusahaan
                pemasaran digital. Perannya yang dinamis tidak hanya
                menggambarkan kepemimpinan yang kuat, tetapi juga kemampuannya
                membawa perusahaan bergerak maju di tengah persaingan yang
                sengit.
              </p>
            </div>
          </div>

          {/* Leadership Enhancement Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">📈</span>
              </div>
              Peningkatan Kepemimpinan dan Marketing:
            </h3>
            <div className="pl-9">
              <p className="text-gray-700 leading-relaxed text-justify bg-gray-50 p-2 rounded-lg">
                Dalam perjalanannya, Nasir mengambil tantangan Grounded
                Executing & Supervisory Training (GEST) pada Juli 2022, mengasah
                keterampilan kepemimpinannya. Pada Juni 2023, prestasinya
                semakin mempesona dengan meraih Grounded Total Marketing,
                menunjukkan kelincarnya dalam menghadapi dinamika dunia
                pemasaran.
              </p>
            </div>
          </div>

          {/* Management Adventure Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🤝</span>
              </div>
              Petualangan Manajemen dan Kolaborasi:
            </h3>
            <div className="pl-9">
              <p className="text-gray-700 leading-relaxed text-justify bg-gray-50 p-2 rounded-lg">
                Tak hanya di dunia digital, Nasir juga merambah ke realm
                manajemen dengan mengikuti Outbound Management Training pada
                Oktober 2023. Pengalaman ini bukan hanya tentang mengelola tim,
                tetapi juga mempupuk kolaborasi yang harmonis.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-orange-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-orange-300 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default DirectorAbout;
