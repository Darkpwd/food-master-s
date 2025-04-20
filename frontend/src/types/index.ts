export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: "starters" | "mains" | "desserts" | "drinks";
  dietary?: Array<"v" | "vg" | "gf" | "df" | "n">; // v=vegetarian, vg=vegan, gf=gluten-free, df=dairy-free, n=contains nuts
  featured?: boolean;
  ingredients?: string[];
}

export interface Reservation {
  date: Date;
  time: string;
  partySize: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
}

export interface ChefSpecial {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}
