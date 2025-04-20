import React, { useState } from "react";
import { menuItems } from "../../../Data/menuData";
import { MenuItem } from "../../types";
import { AnimatedSection } from "../Common/AnimatedSection";
import { Filter, ChevronDown, Info } from "lucide-react";

const categories = [
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Mains" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

const dietaryLabels = [
  { id: "v", name: "Vegetarian", icon: "🥦" },
  { id: "vg", name: "Vegan", icon: "🌱" },
  { id: "gf", name: "Gluten-Free", icon: "🌾" },
  { id: "df", name: "Dairy-Free", icon: "🥛" },
  { id: "n", name: "Contains Nuts", icon: "🥜" },
];

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-[#0d2240]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-[1px] w-10 bg-[#e6c200]"></div>
            <span
              className="mx-4 text-[#e6c200] font-semibold tracking-wider"
              aria-label="Culinary Artistry"
            >
              CULINARY ARTISTRY
            </span>
            <div className="h-[1px] w-10 bg-[#e6c200]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Menu
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Featuring innovative dishes that combine modern techniques with
            classic flavors, crafted with the finest seasonal ingredients.
          </p>
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex overflow-x-auto pb-3 md:pb-0 space-x-2 md:space-x-4 w-full md:w-auto">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-[#e6c200] text-[#0a192f] font-medium shadow-md"
                    : "bg-[#0a192f] text-gray-300 hover:bg-[#0a192f]/80"
                }`}
                aria-label="Show all items"
              >
                All Items
              </button>
              {categories.map((category: { id: string; name: string }) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#e6c200] text-[#0a192f] font-medium shadow-md"
                      : "bg-[#0a192f] text-gray-300 hover:bg-[#0a192f]/80"
                  }`}
                  aria-label={`Show items in category ${category.name}`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Filter toggle button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-[#0a192f] text-gray-300 rounded-full hover:bg-[#0a192f]/80 transition-colors"
              aria-expanded={showFilters}
              aria-label="Toggle dietary filters"
            >
              <Filter size={16} className="mr-2" />
              Dietary Filters
              <ChevronDown
                size={16}
                className={`ml-2 transition-transform duration-300 ${
                  showFilters ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* Dietary filters panel */}
          <div
            className={`
            grid grid-cols-2 md:grid-cols-5 gap-3 
            overflow-hidden transition-all duration-500 ease-in-out
            ${showFilters ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"}
          `}
            aria-hidden={!showFilters}
          >
            {dietaryLabels.map((label) => (
              <div
                key={label.id}
                className="flex items-center space-x-2 bg-[#0a192f]/50 p-3 rounded-lg"
              >
                <span className="text-xl">{label.icon}</span>
                <span className="text-sm text-gray-300">{label.name}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <AnimatedSection
              key={item.id}
              delay={index * 100}
              className="group"
            >
              <div
                className="bg-[#0a192f] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedItem(item)}
                aria-label={`View details for ${item.name}`}
              >
                {item.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.featured && (
                      <div className="absolute top-3 right-3 bg-[#e6c200] text-[#0a192f] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Featured
                      </div>
                    )}
                  </div>
                )}

                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#e6c200] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[#e6c200] font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {item.description}
                  </p>

                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-auto">
                      {item.dietary.map((diet) => {
                        const dietLabel = dietaryLabels.find(
                          (label) => label.id === diet
                        );
                        return dietLabel ? (
                          <span
                            key={diet}
                            className="inline-block text-xs text-gray-300"
                            title={dietLabel.name}
                          >
                            {dietLabel.icon}
                          </span>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Modal for selected item */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
          aria-label="Close item details"
        >
          <div
            className="bg-[#0d2240] text-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.image && (
              <div className="relative h-64 md:h-72">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2240] via-transparent to-transparent"></div>
              </div>
            )}

            <div className="p-6 relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {selectedItem.name}
                </h3>
                <span className="text-[#e6c200] font-semibold text-xl">
                  ${selectedItem.price.toFixed(2)}
                </span>
              </div>

              <p className="text-gray-300 mb-6">{selectedItem.description}</p>

              {selectedItem.ingredients && (
                <div className="mb-6">
                  <h4 className="flex items-center text-[#e6c200] font-semibold mb-2">
                    <Info size={16} className="mr-2" /> Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#0a192f] rounded-full text-sm text-gray-300"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedItem.dietary && selectedItem.dietary.length > 0 && (
                <div>
                  <h4 className="text-[#e6c200] font-semibold mb-2">
                    Dietary Information
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem.dietary.map((diet) => {
                      const dietLabel = dietaryLabels.find(
                        (label) => label.id === diet
                      );
                      return dietLabel ? (
                        <div key={diet} className="flex items-center">
                          <span className="text-xl mr-2">{dietLabel.icon}</span>
                          <span className="text-gray-300">
                            {dietLabel.name}
                          </span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
