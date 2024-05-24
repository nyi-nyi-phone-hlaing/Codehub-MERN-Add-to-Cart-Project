import PropTypes from "prop-types";
import { useState } from "react";
const Backdrop = ({ children }) => {
  const [isActive] = useState(true);

  return (
    <section
      className={`absolute w-full h-screen bg-slate-900 bg-opacity-50 overflow-hidden xl:w-2/3 ${
        isActive
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      {children}
    </section>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node,
};

export default Backdrop;
