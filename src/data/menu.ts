/**
 * MENU DATA — the single source of truth for the digital menu.
 *
 * To update the menu, edit only this file:
 *  - name:        item name as it should appear
 *  - price:       number in PKR, or null when the price is not provided
 *  - unit:        e.g. "per kg", "per plate" (optional)
 *  - note:        short factual note (optional)
 *  - available:   set to false to show the item as currently unavailable
 *  - image:       optional image key from `categoryImages`
 */

export type MenuItem = {
  name: string;
  price: number | null;
  unit?: string;
  note?: string;
  available?: boolean;
};

export type MenuGroup = {
  label?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  name: string;
  groups: MenuGroup[];
  /** Optional fixed price table (used by Pizza sizes) */
  priceTable?: { label: string; price: number }[];
  extras?: MenuItem[];
};

export const PRICE_UNAVAILABLE = "Price unavailable — contact restaurant";

export const formatPrice = (price: number | null) =>
  price === null ? PRICE_UNAVAILABLE : `Rs. ${price.toLocaleString("en-US")}`;

export const menu: MenuCategory[] = [
  {
    id: "desi-food",
    name: "Desi Food",
    groups: [
      {
        label: "Per KG",
        items: [
          { name: "Chicken Boneless Handi", price: 3000, unit: "per kg" },
          { name: "Chicken White Karahi", price: 2200, unit: "per kg" },
          { name: "Chicken Red Karahi", price: 2000, unit: "per kg" },
          { name: "Chicken Green Karahi", price: 2000, unit: "per kg" },
          { name: "Chicken White Handi", price: 2200, unit: "per kg" },
          { name: "Chicken Spring", price: 2000, unit: "per kg" },
          { name: "Mutton White Karahi", price: 4000, unit: "per kg" },
          { name: "Mutton Karahi", price: 3600, unit: "per kg" },
        ],
      },
      {
        label: "Per Plate",
        items: [
          { name: "Mutton Qorma", price: 800, unit: "per plate" },
          { name: "Chicken Qorma", price: 500, unit: "per plate" },
          { name: "Chicken Nihari", price: 400, unit: "per plate" },
        ],
      },
    ],
  },
  {
    id: "biryani-pulao",
    name: "Biryani & Pulao",
    groups: [
      {
        items: [
          { name: "Bombay Biryani", price: 500 },
          { name: "Kabli Pulao (Chicken)", price: 700 },
          { name: "Kabli Pulao (Mutton)", price: 1400 },
          { name: "Beef Biryani", price: 700 },
        ],
      },
    ],
  },
  {
    id: "chinese",
    name: "Chinese",
    groups: [
      {
        items: [
          { name: "Chicken Fried Rice", price: 500 },
          { name: "Chicken Jalfrezi", price: 1060 },
          { name: "Chicken Shashlik", price: 1060 },
          { name: "Vegetable Fried Rice", price: 400 },
          { name: "Egg Fried Rice", price: 400 },
        ],
      },
    ],
  },
  {
    id: "fish",
    name: "Fish",
    groups: [
      {
        items: [
          { name: "Fish Curry", price: 400, unit: "per plate" },
          { name: "Fish Fry (Big)", price: 1800 },
          { name: "Fish Fry (Small)", price: 1200 },
          { name: "Steam Fish", price: 1950 },
        ],
      },
    ],
  },
  {
    id: "mix-vegetable",
    name: "Mix Vegetable",
    groups: [
      {
        items: [
          { name: "Mix Vegetable", price: 250 },
          { name: "Daal", price: 250 },
          { name: "Daal Makhni", price: 400 },
        ],
      },
    ],
  },
  {
    id: "tandoor",
    name: "Tandoor",
    groups: [
      {
        items: [
          { name: "Naan", price: 40 },
          { name: "Chapati", price: 25 },
          { name: "Roti", price: 20 },
        ],
      },
    ],
  },
  {
    id: "sweets",
    name: "Sweets",
    groups: [
      {
        items: [
          { name: "Kheer Mix", price: 150 },
          { name: "Lab-e-Shireen", price: 200 },
          { name: "Fruit Custard", price: 150 },
          { name: "Sweet Flavoured Rice", price: 500 },
          { name: "Ice Cream", price: 120 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    groups: [
      {
        items: [
          { name: "Doodh Patti Tea", price: 100 },
          { name: "Coffee", price: 120 },
          { name: "Green Tea", price: 60 },
          { name: "Normal Tea", price: 80 },
          { name: "Regular Cold Drink", price: 60 },
        ],
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    priceTable: [
      { label: "Small", price: 450 },
      { label: "Medium", price: 900 },
      { label: "Large", price: 1200 },
      { label: "Extra Large", price: 1500 },
    ],
    extras: [{ name: "Extra Cheese Topping", price: 100 }],
    groups: [
      {
        items: [
          { name: "Chicken Supreme Pizza", price: null },
          { name: "Chicken Tikka Pizza", price: null },
          { name: "Cheese Lover Pizza", price: null },
          { name: "Mango Cream Pizza", price: null },
          { name: "Chicken Malai Pizza", price: null },
          { name: "Bar BQ Pizza", price: null },
          { name: "Sicilian Pizza", price: null },
          { name: "Veg Lover Pizza", price: null },
          { name: "Arabic Pizza", price: null },
          { name: "Fajita Pizza", price: null },
        ],
      },
    ],
  },
  {
    id: "burger-broast",
    name: "Burger / Broast",
    groups: [
      {
        items: [
          { name: "Large Broast with Fries", price: 500 },
          { name: "Mighty Burger", price: 499 },
          { name: "Zinger Burger", price: 400 },
          { name: "Jimmy Cheese Burger", price: 499 },
          { name: "Bar BQ Zinger Burger", price: 399 },
        ],
      },
    ],
  },
  {
    id: "bar-b-q",
    name: "Bar B.Q",
    groups: [
      {
        items: [
          { name: "Malai Boti", price: 1500 },
          { name: "Chicken Tikka Boti", price: 1200 },
          { name: "Behari Boti", price: 1500 },
          { name: "Chicken Green Boti", price: 1500 },
          { name: "Seekh Kabab", price: 800 },
          { name: "Shami Kabab", price: 80 },
          { name: "Chicken Tikka", price: 400 },
        ],
      },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich",
    groups: [
      {
        items: [
          { name: "Club Sandwich", price: 450 },
          { name: "Mexican Sandwich", price: 450 },
          { name: "Fajita Sandwich", price: 450 },
          { name: "Mozzarella Sandwich", price: 450 },
        ],
      },
    ],
  },
  {
    id: "fries",
    name: "Fries",
    groups: [
      {
        items: [
          { name: "Mayo Fries", price: 250 },
          { name: "Masala Fries", price: 250 },
          { name: "Plan Fries", price: 199 },
          { name: "Special Pizza Fries", price: 399 },
        ],
      },
    ],
  },
  {
    id: "roll",
    name: "Roll",
    groups: [
      {
        items: [
          { name: "Bar BQ Roll", price: 199 },
          { name: "Crispy Spring Roll", price: 199 },
          { name: "Arabic Roll", price: 199 },
          { name: "Green Chatni Roll", price: 199 },
          { name: "Special Garlic Roll", price: 199 },
          { name: "Special Tasty Roll", price: 199 },
          { name: "Mayo Roll", price: 199 },
          { name: "Vegetable Roll", price: 199 },
          { name: "Chicken Roll", price: 199 },
          { name: "Sicilian Roll", price: 199 },
        ],
      },
    ],
  },
];

/** Categories offered, used in About / SEO copy */
export const cuisineList = [
  "Desi Food",
  "Biryani & Pulao",
  "Chinese",
  "Fish",
  "BBQ",
  "Tandoor",
  "Pizza",
  "Burgers & Broast",
  "Sandwiches",
  "Rolls",
  "Fries",
  "Sweets",
  "Drinks",
];
