import Backdrop from "./components/Backdrop";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className='relative font-poppins w-full h-screen bg-slate-50 flex justify-center items-center overflow-hidden'>
      <section className='relative w-full h-screen bg-blue-50 overflow-y-scroll xl:w-2/3 '>
        <Navbar />
        <section className='w-full h-calc-100vh-minus-3rem flex justify-center items-center'>
          <div className='w-4/5'>
            <h1 className='text-lg font-bold text-center text-blue-500 mb-2'>
              Best shopping website in myanmar.
            </h1>
            <p className='text-base text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              nobis culpa omnis ducimus eos. Modi harum autem, voluptatibus
              itaque accusantium error. Atque quia dolor fuga reiciendis nihil
              similique optio aliquid.
            </p>
          </div>
        </section>
        <ProductList />
      </section>
      <Backdrop>
        <CartContainer />
      </Backdrop>
    </div>
  );
}

export default App;
