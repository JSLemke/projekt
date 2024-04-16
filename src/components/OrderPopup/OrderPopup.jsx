import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null;

  const handleClosePopup = () => {
    setOrderPopup(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="p-4 shadow-md bg-gradient-to-br from-yellow-300 to-orange-400 dark:bg-gray-900 rounded-md w-[300px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Book Your Trip
          </h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer"
            onClick={handleClosePopup}
          />
        </div>
        {/* Body */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
          />
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-yellow-300 to-orange-400 hover:from-orange-400 hover:to-yellow-300 hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPopup;
