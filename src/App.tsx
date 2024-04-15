import { useState } from "react";
import { menuItems } from "./libs/db.ts";
import MenuItems from "./components/MenuItems.tsx";
import MenuIcon from "./components/icons/MenuIcon.tsx";
import RecentOrders from "./components/RecentOrders.tsx";
import { Food } from "./components/interfaces/food.interface.ts";
function App() {
  const [menu] = useState(menuItems);
  const [menuOn, setMenuOn] = useState(false);
  const [orders, setOrders] = useState<Array<Food>>([]);

  return (
    <>
      <header className="p-4 bg-orange-500 text-white flex justify-between items-center">
        <h1 className="uppercase font-bold text-center text-xl">
          Menú de Comida
        </h1>
        <button
          onClick={() => setMenuOn(!menuOn)}
          className="md:hidden hover:border"
        >
          <MenuIcon />
        </button>
      </header>
      <main className="p-4 min-h-screen flex flex-col bg-gray-100 md:flex-row md:items-start md:gap-4">
        <MenuItems menu={menu} orders={orders} setOrders={setOrders} />
        <RecentOrders menuOn={menuOn} setMenuOn={setMenuOn} orders={orders} />
      </main>
    </>
  );
}

export default App;
