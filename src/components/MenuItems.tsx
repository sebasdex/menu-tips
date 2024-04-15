import { Food } from "./interfaces/food.interface";

interface MenuItemsProps {
  menu: Food[];
  orders: FoodQuantity[];
  setOrders: (value: FoodQuantity[]) => void;
}

interface FoodQuantity extends Food {
  quantity: number;
}

function MenuItems({ menu, orders, setOrders }: MenuItemsProps) {
  const handleAdd = (id: Food["id"]) => {
    const isItemInOrders = orders.some((order) => order.id === id);

    if (isItemInOrders) {
      const updatedOrders = orders.map((order) =>
        order.id === id ? { ...order, quantity: order.quantity + 1 } : order
      );
      setOrders(updatedOrders);
    } else {
      const newOrder = menu.find((foodItem) => foodItem.id === id);
      if (newOrder) {
        setOrders([...orders, { ...newOrder, quantity: 1 }]);
      }
    }
  };
  return (
    <section className="flex flex-col items-center gap-4 md:w-full md:flex-row md:items-start md:flex-wrap ">
      {menu.map((food) => (
        <article
          key={food.id}
          className="p-4 flex flex-col justify-center items-center text-center w-80 h-96 bg-white md:w-[calc(33%-0.5rem)]"
        >
          <button onClick={() => handleAdd(food.id)}>
            <img
              src={food.src}
              alt={food.name}
              className="w-44 h-44 object-right-center rounded-full object-cover border-4 border-orange-500 hover:opacity-70"
            />
          </button>
          <p className="font-bold text-xl mt-2">{food.name}</p>
          <p>{food.type}</p>
          <p className="italic text-gray-500">{food.ingredients.join(", ")}</p>
          <p className="text-orange-500 font-bold">${food.cost}</p>
        </article>
      ))}
    </section>
  );
}

export default MenuItems;
