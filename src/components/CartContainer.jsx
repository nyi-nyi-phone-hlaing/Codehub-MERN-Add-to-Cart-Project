import CartList from "./CartList";

const CartContainer = () => {
  return (
    <div className='absolute w-full h-screen rounded-md overflow-hidden shadow-lg top-1/2 left-1/2 translate-x -translate-x-1/2 -translate-y-1/2 bg-blue-50 lg:w-1/2 md:w-2/3 sm:max-h-96 sm:w-3/4'>
      <header className='h-14 flex items-center justify-between px-3 py-2 bg-blue-100'>
        <div>
          <h1 className='text-blue-500 font-bold text-base'>Shopping Cart</h1>
          <p className='text-slate-700 text-xs'>
            Cart items : <span className='text-indigo-600 font-bold'>20</span>{" "}
            pcs
          </p>
        </div>
        <button className='bg-indigo-500 text-white text-xs px-2 py-1 rounded-md shadow-inner'>
          Close
        </button>
      </header>
      <CartList />
      <footer className='h-16 flex items-end flex-col justify-between px-3 py-2 bg-blue-100 xs:h-12 xs:flex-row'>
        <h1 className='font-bold text-base text-gray-700'>
          Total - <span className='font-semibold text-indigo-600'>$2000</span>
        </h1>
        <div className='flex gap-2'>
          <button className='min-w-24 bg-rose-500 text-white text-xs py-1 rounded-md shadow-inner hover:bg-rose-600'>
            Remove All
          </button>
          <button className='min-w-32 bg-indigo-500 text-white text-xs py-1 rounded-md shadow-inner hover:bg-indigo-600'>
            Order Now
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CartContainer;
