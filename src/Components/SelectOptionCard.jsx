import { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SelectOptionCard = ({ totals }) => {
  const { image, name, details } = totals;
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (

    <div className={showDetails ? `w-96 relative flex flex-col  justify-center items-center  h-80 mt-28 rounded-xl   border border-pink-400 ` : `w-96 relative flex flex-col  justify-center items-center  h-80 mt-28  border rounded-xl border-gray-200`}>

      <img src={image} alt="Shoes" className={showDetails ? `rounded-xl absolute left-24 -top-24 h-40 w-48` : `rounded-xl  h-48 w-48`} />

      <div className={showDetails ? `mt-16 items-center text-center` : ` items-center text-center`}>
        <h2 className=" text-xl font-extrabold">{name}</h2>
        {showDetails && (
          <p className="text-gray-400">{details}</p>
        )}

      </div>
      {showDetails ? <div className="w-8 h-8 border mt-4 border-pink-500 bg-pink-500 rounded-full">
        <IoCheckmarkOutline className="ml-1 mt-1 text-white text-xl" />
      </div> : <div onClick={handleClick} className="w-8 h-8 border mt-4 border-gray-300 rounded-full">

      </div>}

    </div>




  );
};

export default SelectOptionCard;