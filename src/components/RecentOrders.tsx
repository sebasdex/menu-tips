import CloseIcon from "./icons/CloseIcon";
interface RecentOrdersMenu {
  menuOn: boolean;
  setMenuOn: (value: boolean) => void;
}
function RecentOrders({ menuOn, setMenuOn }: RecentOrdersMenu) {
  return (
    <section
      className={`min-h-screen bg-white fixed inset-0 md:w-1/3 md:block md:static
         ${menuOn ? "block" : "hidden"}`}
    >
      <header className="flex justify-between text-white p-2 bg-orange-500">
        <h2 className="p-2 text-white uppercase font-bold text-center text-xl">
          Ordenes Recientes
        </h2>
        <button onClick={() => setMenuOn(!menuOn)} className="md:hidden p-2">
          <CloseIcon />
        </button>
      </header>
      <article className="p-2 border-b flex justify-between gap-4 m-2 bg-white">
        <img src="" alt="" className="w-24 h-20" />
        <div className="w-full">
          <p className="font-bold">Pizza</p>
          <p className="text-gray-500">Italiana</p>
          <p className="text-orange-500 font-bold">$5.00</p>
          <div className="flex justify-between items-center w-16">
            <button className="bg-gray-200 w-5 h-5 rounded">-</button>
            <p className="text-sm font-semibold text-gray-500">1</p>
            <button className="bg-gray-200 w-5 h-5 rounded">+</button>
          </div>
        </div>
      </article>
      <footer className="p-2 bg-white flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold">Items(7)</p>
          <p className="font-bold">$50.00</p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p>Propina 10%</p>
          <p className="font-bold">$5.00</p>
        </div>
        <p>Total: $55.00</p>
        <button
          className="w-full hover:bg-orange-100 h-10 rounded-xl bg-orange-500
         text-white font-bold"
        >
          Pagar
        </button>
      </footer>
    </section>
  );
}

export default RecentOrders;