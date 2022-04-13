import { FiShoppingBag } from "react-icons/fi";

function navbar() {
  return (
    <div>
      <>
        <div className="bg-white drop-shadow-lg">
          <div className="flex justify-between py-3 px-5">
            <div className="flex justify-between gap-2 items-center">
              <FiShoppingBag />
              <p className="font-semibold text-sm"> Product List </p>
            </div>
            <div>
              <p className="font-bold text-xl "> SHOESMART</p>
            </div>
            <div className="flex gap-5 items-center text-xs">
              <p className="font-semibold cursor-pointer hover:text-red-800 ">
                {" "}
                Login
              </p>{" "}
              <p className="bg-sky-900 px-5 py-1.5 text-white rounded-md font-medium hover:opacity-80 cursor-pointer">
                {" "}
                Register
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default navbar;
