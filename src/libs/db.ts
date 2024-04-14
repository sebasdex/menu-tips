interface Food {
  id: number;
  name: string;
  type: string;
  cost: number;
  ingredients: string[];
  src: string;
}

export const menuItems: Food[] = [
  {
    id: 1,
    name: "Pizza",
    type: "Italiana",
    cost: 10.99,
    ingredients: ["Queso", "Pepperoni", "Champiñones"],
    src: "../img/pizza.jpg",
  },
  {
    id: 2,
    name: "Hamburguesa",
    type: "Americana",
    cost: 8.99,
    ingredients: ["Carne de res", "Queso cheddar", "Lechuga", "Tomate"],
    src: "../img/hamburger.jpg",
  },
  {
    id: 3,
    name: "Sushi",
    type: "Japonés",
    cost: 15.99,
    ingredients: ["Salmón fresco", "Aguacate", "Arroz", "Algas nori"],
    src: "../img/sushi.jpg",
  },
  {
    id: 4,
    name: "Tacos",
    type: "Mexicana",
    cost: 7.99,
    ingredients: ["Carne de cerdo", "Cebolla", "Cilantro", "Salsa"],
    src: "../img/tacos.jpg",
  },
  {
    id: 5,
    name: "Ensalada César",
    type: "Internacional",
    cost: 6.99,
    ingredients: ["Lechuga romana", "Pollo a la parrilla", "Queso parmesano"],
    src: "../img/salad.jpg",
  },
  {
    id: 6,
    name: "Pasta Carbonara",
    type: "Italiana",
    cost: 12.99,
    ingredients: ["Spaghetti", "Bacon", "Huevo", "Queso Parmesano"],
    src: "../img/pasta.jpg",
  },
  {
    id: 7,
    name: "Sándwich de Pollo",
    type: "Americana",
    cost: 9.49,
    ingredients: ["Pechuga de pollo", "Lechuga", "Tomate", "Mayonesa"],
    src: "../img/sandw.jpg",
  },
  {
    id: 8,
    name: "Ramen",
    type: "Japonés",
    cost: 11.99,
    ingredients: ["Fideos", "Caldo de huesos", "Huevo", "Cebollín"],
    src: "../img/ramen.jpg",
  },
  {
    id: 9,
    name: "Ensalada Griega",
    type: "Internacional",
    cost: 7.99,
    ingredients: ["Lechuga", "Tomate", "Pepino", "Aceitunas", "Queso Feta"],
    src: "../img/greeksalad.jpg",
  },
];
