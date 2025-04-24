import { ChefSpecial, RestaurantInfo } from "../src/types";

export const restaurantInfo: RestaurantInfo = {
  name: "Master's Food",
  address: "123 Stellar Avenue, Metropolis, NY 10001",
  phone: "+1 (212) 555-8900",
  email: "reservations@mastersfoodrestaurant.com",
  hours: {
    Monday: "5:00 PM - 10:00 PM",
    Tuesday: "5:00 PM - 10:00 PM",
    Wednesday: "5:00 PM - 10:00 PM",
    Thursday: "5:00 PM - 11:00 PM",
    Friday: "5:00 PM - 12:00 AM",
    Saturday: "12:00 PM - 12:00 AM",
    Sunday: "12:00 PM - 10:00 PM",
  },
  socialMedia: {
    instagram: "https://instagram.com/masters_foodrestaurant",
    facebook: "https://facebook.com/masters_foodrestaurant",
    twitter: "https://twitter.com/masters_foodrestaurant",
  },
};

export const chefSpecials: ChefSpecial[] = [
  {
    id: "cs1",
    name: "Molecular Gastronomy Tasting",
    description:
      "A seven-course journey through texture, flavor, and technique featuring smoke-infused elements and edible sculptures.",
    image: "https://images.pexels.com/photos/6287548/pexels-photo-6287548.jpeg",
    ingredients: [
      "Seasonal ingredients",
      "Molecular elements",
      "Chef's inspiration",
    ],
  },
  {
    id: "cs2",
    name: "Floating Seafood Medley",
    description:
      "Fresh-caught seafood suspended in clear consommé with compressed vegetables and aromatic herbs.",
    image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
    ingredients: [
      "Daily catch",
      "Clear consommé",
      "Compressed vegetables",
      "Micro herbs",
    ],
  },
  {
    id: "cs3",
    name: "Interactive Dessert Experience",
    description:
      "Watch as our pastry chef creates a personalized dessert table side with liquid nitrogen, edible flowers, and artisanal chocolates.",
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
    ingredients: [
      "Artisanal chocolate",
      "Seasonal fruits",
      "Edible flowers",
      "Liquid nitrogen",
    ],
  },
];
