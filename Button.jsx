import React from "react";
import SmallLoader from "./SmallLoader";
import BtnHelper from "./BtnHelper";

export default function BtnMain({
  icon,
  text,
  onClick,
  className,
  disabled,
  fullWidth = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative mr-3 cursor-pointer hover:text-gray-100 rounded-md flex items-center justify-center gap-x-1 text-center border border-green-500 py-2 px-8 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white ${
        fullWidth && "w-full"
      } ${className}`}
    >
      {disabled == true ? (
        <SmallLoader text={text} />
      ) : (
        <BtnHelper icon={icon} text={text} />
      )}
    </button>
  );
}

// Sample Import of this button

/* <BtnMain
  text="Text"
  icon={<AiOutlinePlus className="text-2xl" />}
  className="className"
  onClick={handleClick}
  disabled={false} // If true it enables the loading.
  fullWidth={false} // If true it automatically takes width.
/>; */
