import { useState } from "react";
import { Food } from "./interfaces/food.interface";

interface RecentOrdersMenu {
  orders: FoodQuantity[];
  totalItems: number;
  totalCost: string;
}

interface FoodQuantity extends Food {
  quantity: number;
}
function OrderFooter({ totalItems, totalCost, orders }: RecentOrdersMenu) {
  const [tip, setTip] = useState<number>(0);

  return (
    <footer className="p-4 bg-white flex flex-col gap-4 sticky bottom-0">
      <div className="flex justify-between">
        <p className="font-bold">Items({totalItems})</p>
        <p className="font-bold">${totalCost}</p>
      </div>
      <p className="font-bold -mb-3">Propina</p>
      <div className="flex justify-between border-b pb-2">
        <form className="flex justify-center items-center gap-2">
          <input
            type="radio"
            name="tip"
            onChange={() => setTip(10)}
            value={tip}
            disabled={orders.length === 0}
          />
          <label htmlFor="tip">10%</label>
          <input
            type="radio"
            name="tip"
            onChange={() => setTip(15)}
            value={tip}
            disabled={orders.length === 0}
          />
          <label htmlFor="tip">15%</label>
          <input
            type="radio"
            name="tip"
            onChange={() => setTip(20)}
            value={tip}
            disabled={orders.length === 0}
          />
          <label htmlFor="tip">20%</label>
        </form>
        <p className="font-bold">$0.00</p>
      </div>
      <p className="font-bold">Total: ${totalCost}</p>
      <button
        className="w-full hover:bg-orange-100 h-10 rounded-xl bg-orange-500
         text-white font-bold disabled:bg-orange-300"
        disabled={orders.length === 0}
      >
        Pagar
      </button>
    </footer>
  );
}

export default OrderFooter;
