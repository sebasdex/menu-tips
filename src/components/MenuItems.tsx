import { Food } from "./interfaces/food.interface";

interface MenuItemsProps {
  menu: Food[];
  orders: Food[];
  setOrders: (value: Food[]) => void;
}

function MenuItems({ menu, orders, setOrders }: MenuItemsProps) {
  const handleAdd = (id: Food["id"]) => {
    const newOrder = menu.find((food) => food.id === id);
    if (newOrder) {
      setOrders([...orders, newOrder]);
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
