const generateRandomId = (length = 8) =>
  [...Array(length)].map(() => Math.random().toString(36)[2]).join("");

const shopProductsData = [
  {
    id: generateRandomId(),
    pic: "/Shop_page/1.png",
    name: "Rounded Red Hat",
    price: "8.00",
    color1: "#FFD700",
    color2: "#000000",
  },
  {
    id: generateRandomId(),
    pic: "/Shop_page/2.png",
    name: "Linen-blend Shirt",
    price: "17.00",
    color1: "#8DB4D2",
    color2: "#FFD1DC",
  },
  {
    id: generateRandomId(),
    pic: "/Shop_page/3.png",
    name: "Long-sleeve Coat",
    price: "106.00",
    color1: "#EBE6DB",
    color2: "#C1E1C1",
  },
  {
    id: generateRandomId(),
    pic: "/Shop_page/4.png",
    name: "Boxy Denim Hat",
    price: "25.00",
    color1: "#FFD700",
    color2: "#000000",
  },
  {
    id: generateRandomId(),
    pic: "/Shop_page/5.png",
    name: "Rounded Red Hat",
    price: "8.00",
    color1: "#B1C5D4",
    color2: "#063E66",
  },
  {
    id: generateRandomId(),
    pic: "/Shop_page/6.png",
    name: "Linen Plain Top",
    price: "25.00",
    color1: "#C1E1C1",
    color2: "#000000",
    color3: "#FFFFFF",
  },
  {
    id: generateRandomId(),
    pic: "/Shop_page/7.png",
    name: "Polarised Sunglasses",
    price: "25.00",
    color1: "#000000",
    color2: "#836953",
  },
  {
    id: generateRandomId(),
    pic: "/Shop_page/8.png",
    name: "Rockstar Jacket",
    price: "25.00",
    color1: "#C6AEC7",
    color2: "#BEDCE3",
  },
  {
    id: generateRandomId(),
    pic: "/Shop_page/9.png",
    name: "Dotted Black Dress",
    price: "25.00",
    color1: "#063E66",
    color2: "#000000",
    color3: "#B1C5D4",
  },
];

export { generateRandomId, shopProductsData };
