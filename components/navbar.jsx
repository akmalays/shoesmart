import { FiShoppingBag } from "react-icons/fi";

function navbar() {
  return (
    <div>
      <>
        <div className="bg-white drop-shadow-lg">
          <div className="flex justify-between py-4 px-5">
            <div className="flex justify-between gap-1 items-center">
              <FiShoppingBag />
              <p className="font-medium"> Store </p>
            </div>
            <div>
              <p className="font-bold text-xl "> SHOESMART</p>
            </div>
            <div className="flex gap-5 items-center text-sm">
              <p className="font-medium "> Login</p>{" "}
              <p className="bg-blue-800 px-7 py-1 text-white rounded-lg font-medium">
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
