import { useState } from "react";
import { menuItems } from "./libs/db.ts";
import MenuItems from "./components/MenuItems.tsx";
function App() {
  const [menu] = useState(menuItems);
  return (
    <>
      <h1 className="p-2  bg-orange-500 text-white uppercase font-bold text-center text-xl">
        Menú de Comida
      </h1>
      <main className="p-4 min-h-screen flex flex-col bg-gray-100 md:flex-row md:items-start md:gap-4">
        <MenuItems menu={menu} />
        <section className="min-h-screen border border-orange-500 md:w-1/3"></section>
      </main>
    </>
  );
}

export default App;
