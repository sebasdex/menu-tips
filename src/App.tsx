import { useState } from "react";
import { menuItems } from "./libs/db.ts";
import MenuItems from "./components/MenuItems.tsx";
import MenuIcon from "./components/icons/MenuIcon.tsx";
import CloseIcon from "./components/icons/CloseIcon.tsx";
function App() {
  const [menu] = useState(menuItems);
  const [menuOn, setMenuOn] = useState(false);

  return (
    <>
      <header className="p-2  bg-orange-500 text-white flex justify-between items-center">
        <h1 className="uppercase font-bold text-center text-xl">
          Menú de Comida
        </h1>
        <button onClick={() => setMenuOn(!menuOn)} className="md:hidden">
          <MenuIcon />
        </button>
      </header>
      <main className="p-4 min-h-screen flex flex-col bg-gray-100 md:flex-row md:items-start md:gap-4">
        <MenuItems menu={menu} />
        <section
          className={`min-h-screen border bg-orange-500 fixed inset-0 md:w-1/3 md:block md:static
         ${menuOn ? "block" : "hidden"}`}
        >
          <header className="flex justify-between text-white p-2">
            <h2 className="p-2 bg-orange-500 text-white uppercase font-bold text-center text-xl">
              Ordenes Recientes
            </h2>
            <button onClick={() => setMenuOn(!menuOn)} className="md:hidden">
              <CloseIcon />
            </button>
          </header>
        </section>
      </main>
    </>
  );
}

export default App;
