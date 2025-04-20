import React from "react";
import { chefSpecials } from "../../../Data/restaurantData.ts";
import { AnimatedSection } from "../Common/AnimatedSection.tsx";
import { Sparkles } from "lucide-react";

export const ChefSpecials: React.FC = () => {
  return (
    <section
      id="specials"
      className="py-20 bg-gradient-to-b from-[#0a192f] to-[#0d2240]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-[#e6c200]"></div>
            <span className="mx-4 text-[#e6c200] font-semibold tracking-wider">
              CURATED EXPERIENCES
            </span>
            <div className="h-[1px] w-10 bg-[#e6c200]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Chef's Signature Creations
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Exclusive dishes crafted by our executive chef, combining innovative
            techniques with the finest seasonal ingredients.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefSpecials.map((special, index) => (
            <AnimatedSection
              key={special.id}
              delay={index * 200}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl h-96 bg-gradient-to-br from-gray-900 to-[#0a192f] shadow-xl">
                {/* Image with overlay */}
                <div
                  className="absolute inset-0 opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${special.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-0 z-10">
                  <div className="flex items-center mb-3">
                    <Sparkles size={18} className="text-[#e6c200] mr-2" />
                    <h3 className="text-xl font-bold">{special.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {special.description}
                  </p>

                  {/* Ingredients */}
                  <div className="pt-2 border-t border-gray-700">
                    <h4 className="text-sm text-[#e6c200] mb-1">
                      FEATURED INGREDIENTS
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {special.ingredients.map((ingredient, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#5e48e8]/20 text-gray-200"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-[#e6c200]/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-[#e6c200]/60 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#e6c200]/10 backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
