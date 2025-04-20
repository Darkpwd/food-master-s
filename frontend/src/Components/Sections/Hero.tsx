import { Button } from "../Common/Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 to-[#0a192f]/70"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent" />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left md:max-w-3xl lg:max-w-4xl relative">
        <div className="space-y-6 md:space-y-8">
          {/* Title */}
          <div
            className="animate-fadeIn opacity-1"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-transparent bg-gradient-to-r from-white via-[#facc15] to-[#eab308]"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A Culinary Journey
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className="animate-fadeIn opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto md:mx-0">
              Where innovation meets tradition in a symphony of flavors designed
              for the modern palate.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn opacity-0"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <Button variant="primary" size="lg">
              Reserve Your Experience
            </Button>
            <Button variant="outline" size="lg">
              Explore Our Menu
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-0 animate-bounce">
          <a
            href="#specials"
            className="text-white/80 hover:text-[#e6c200] transition-colors duration-300"
            aria-label="Scroll to specials section"
          ></a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-[#5e48e8]/10 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-[#e6c200]/10 blur-3xl animate-pulse"
        style={{ animationDuration: "7s" }}
      />
    </section>
  );
};
