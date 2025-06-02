import heroRightImg from "/assets/images/Working-rafiki.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ff6b35 -10%, #f7931e 50%, #ff4500 110%)",
        // Extend gradient beyond edges
        backgroundSize: "110% 110%",
        backgroundPosition: "center",
        border: "none",
        outline: "none",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center text-center lg:text-left relative z-10">
        {/* Hero Text */}
        <div
          className="flex-1 space-y-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Bara Reca Niroga.</h2>
          <p
            className="text-lg md:text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Menjadi yang memberikan dampak positif, merefleksikan nilai-nilai
            keimanan, integritas dan pertumbuhan bersama.
          </p>
        </div>

        {/* Hero Image */}
        <div
          className="flex-1 mt-10 lg:mt-0"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src={heroRightImg}
            alt="Hero"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Custom Wave - Fixed for Mobile */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{
          lineHeight: 0,
          fontSize: 0,
          border: "none",
          outline: "none",
        }}
      >
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{
            border: "none",
            outline: "none",
            display: "block",
            margin: 0,
            padding: 0,
            verticalAlign: "bottom",
            maxWidth: "100%",
          }}
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            stroke="none"
            strokeWidth="0"
            style={{
              border: "none",
              outline: "none",
            }}
            d="M0,160L80,133.3C160,107,320,53,480,69.3C640,85,800,171,960,181.3C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
