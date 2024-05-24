const Cart = () => {
  return (
    <div className='h-28 flex items-center justify-start gap-3 p-2 bg-white shadow-md rounded-md mb-2'>
      <img src='' alt='Hello' className='w-20 h-full bg-slate-900 rounded-md' />
      <div className='h-full'>
        <h1 className='text-sm font-bold text-blue-500 mb-1'>
          Lorem ipsum dolor sit amet.
        </h1>
        <ul className='mb-2 flex overflow-hidden'>
          <li className='text-xs text-gray-300 text-nowrap mr-2'>
            <span className='text-slate-700 font-bold '>Fashion</span>
          </li>
          <li className='text-xs text-gray-500  mr-2'>
            {"|"} <span className='text-orange-500 font-bold'>4.3</span>
          </li>
          <li className='text-xs text-gray-500'>
            {"|"} <span className='text-blue-500 font-bold'>$399</span>
          </li>
        </ul>
        <div className='flex justify-start items-center gap-2'>
          <button className='bg-blue-200 size-7 text-blue-700 border duration-200 border-blue-700 rounded-sm active:bg-blue-400 active:border-slate-900 active:text-slate-900'>
            -
          </button>
          <p className='w-20 text-center text-indigo-700 text-base font-bold'>
            20
          </p>
          <button className='bg-blue-200 size-7 text-blue-700 border duration-200 border-blue-700 rounded-sm active:bg-blue-400 active:border-slate-900 active:text-slate-900'>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
