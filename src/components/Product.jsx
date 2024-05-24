import PropTypes from "prop-types";
const Product = ({ product }) => {
  const { title, image, category, price, rating } = product;
  const { rate } = rating;
  return (
    <div className='w-full bg-white shadow-md duration-200 rounded-md border-2 border-gray-400 hover:bg-gray-100  hover:border-blue-500 hover:shadow-xl '>
      <div className='w-full bg-white rounded-md aspect-[2/1]'>
        <img src={image} alt={title} className='w-full h-full object-contain' />
      </div>
      <div className='p-3'>
        <h1 className='text-sm text-blue-500 mb-2'>
          {title.length > 25 ? title.substring(0, 25) + "..." : title}
        </h1>
        <ul className='mb-2 overflow-hidden'>
          <li className='text-xs text-gray-500 mb-1 text-nowrap'>
            Category -{" "}
            <span className='text-slate-700 font-bold '>{category}</span>
          </li>
          <li className='text-xs text-gray-500 mb-1'>
            Rating - <span className='text-orange-500 font-bold'>{rate}</span>
          </li>
          <li className='text-xs text-gray-500 mb-1'>
            Price - <span className='text-blue-500 font-bold'>{price}</span> USD
          </li>
        </ul>
        {/* <p className='text-xs line-break-anywhere hyphens-auto-custom'>
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p> */}
        <div className='flex justify-start items-center gap-2 lg:justify-between'>
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

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
