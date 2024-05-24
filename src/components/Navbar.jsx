const Navbar = () => {
  return (
    <div className='w-full h-12 bg-blue-100 flex justify-between items-center px-5'>
      <h1 className='font-bold text-blue-500'>SHOP.IO</h1>
      <button className='bg-slate-800 text-white px-2 py-1 rounded-sm text-sm hover:bg-slate-700'>
        Menu
      </button>
    </div>
  );
};

export default Navbar;
