export default function CopanyAbout() {
  return (
    <>
    
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img
                src="/assets/images/herbal-products.jpg"
                alt="Produk herbal Bara Reca"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=800&h=600&fit=crop";
                }}
              />
            </div>

            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Perjalanan Kami
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Bara Reca Niroga didirikan dengan visi mulia untuk
                  menghadirkan produk herbal berkualitas tinggi yang dapat
                  dinikmati oleh seluruh masyarakat Indonesia. Sebagai
                  perusahaan FMCG berbasis digital marketing, kami memahami
                  pentingnya inovasi dalam pendistribusian produk.
                </p>
                <p>
                  Dengan memanfaatkan teknologi digital dan strategi pemasaran
                  modern, kami tidak hanya fokus pada penjualan produk, tetapi
                  juga pada pembentukan generasi muda yang siap menghadapi
                  tantangan industri masa depan.
                </p>
                <p>
                  Komitmen kami terhadap kualitas dan inovasi telah membawa
                  dampak positif bagi ribuan konsumen dan mitra bisnis di
                  seluruh Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
