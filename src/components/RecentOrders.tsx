import OrderFooter from "./OrderFooter";
import CloseIcon from "./icons/CloseIcon";
import { Food } from "./interfaces/food.interface";
interface RecentOrdersMenu {
  menuOn: boolean;
  setMenuOn: (value: boolean) => void;
  orders: FoodQuantity[];
  setOrders: (value: FoodQuantity[]) => void;
}

interface FoodQuantity extends Food {
  quantity: number;
}

function RecentOrders({
  menuOn,
  setMenuOn,
  orders,
  setOrders,
}: RecentOrdersMenu) {
  const totalCost: number = orders.reduce(
    (acc, order) => acc + order.cost * order.quantity,
    0
  );
  const totalItems = orders.reduce((acc, order) => acc + order.quantity, 0);

  const handleIncrement = (id: Food["id"]) => {
    const updatedOrders = orders.map((order) =>
      order.quantity < 10 && order.id === id
        ? {
            ...order,
            quantity: order.quantity + 1,
          }
        : order
    );
    setOrders(updatedOrders);
  };

  const handleDecrement = (id: Food["id"]) => {
    const updatedOrders = orders.map((order) =>
      order.quantity > 1 && order.id === id
        ? {
            ...order,
            quantity: order.quantity - 1,
          }
        : order
    );
    setOrders(updatedOrders);
  };
  return (
    <section
      className={`min-h-screen bg-white overflow-y-auto fixed inset-0 md:w-[40rem] md:block md:sticky lg:min-h-0
         ${menuOn ? "block" : "hidden"}`}
    >
      <header className="flex justify-between text-white p-2 bg-orange-500 sticky top-0">
        <h2 className="p-2 text-white uppercase font-bold text-center text-xl">
          Ordenes Recientes
        </h2>
        <button onClick={() => setMenuOn(!menuOn)} className="md:hidden p-2">
          <CloseIcon />
        </button>
      </header>
      <div className="lg:h-[calc(100vh-30rem)] md:h-[calc(100vh-24rem)] overflow-y-auto overflow-x-hidden">
        {orders.length > 0 ? (
          orders.map((order) => (
            <article
              className="p-2 border-b flex items-center gap-4 m-2 bg-white md:w-full"
              key={order.id}
            >
              <img
                src={order.src}
                alt={order.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="w-full">
                <p className="font-bold">{order.name}</p>
                <p className="text-gray-500">{order.type}</p>
                <p className="text-orange-500 font-bold">${order.cost}</p>
                <div className="flex justify-between items-center w-16 mt-2">
                  <button
                    className="bg-gray-200 w-5 h-5 rounded flex items-center justify-center"
                    onClick={() => handleDecrement(order.id)}
                  >
                    <span>-</span>
                  </button>
                  <p className="text-sm font-semibold text-gray-500">
                    {order.quantity}
                  </p>
                  <button
                    className="bg-gray-200 w-5 h-5 rounded flex items-center justify-center"
                    onClick={() => handleIncrement(order.id)}
                  >
                    <span>+</span>
                  </button>
                </div>
              </div>
              <button
                className="flex items-center justify-center font-bold pb-3 p-2 md:mr-4 rounded-full bg-red-500 text-white w-6 h-6 hover:bg-red-600"
                onClick={() =>
                  setOrders(orders.filter((item) => item.id !== order.id))
                }
              >
                <span>x</span>
              </button>
            </article>
          ))
        ) : (
          <p className="p-4 font-semibold h-96 text-center flex justify-center items-center">
            No hay ordenes recientes
          </p>
        )}
      </div>
      <OrderFooter
        totalCost={totalCost}
        totalItems={totalItems}
        orders={orders}
      />
    </section>
  );
}

export default RecentOrders;
