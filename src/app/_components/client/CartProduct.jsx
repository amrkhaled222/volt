import { useState } from "react";
import deleteIcon from "../../assets/delete.png";
import Plus from "../../assets/plusIcon.svg";
import Minus from "../../assets/MinusIcon.svg";
function CartProduct({ ...props }) {
  const [counter, setCounter] = useState(1);
  function handleAdd() {
    setCounter((prev) => prev + 1);
  }

  function handleMinus() {
    setCounter((prev) => prev - 1);
  }
  return (
    <>
      <div className="flex gap-3">
        <div>
          <img
            src={props.src}
            alt={props.title}
            className=" w-[99px] h-[99px] md:h-[124px] md:w-[124px]"
          />
        </div>
        <div className="w-[70%]">
          <div className="flex justify-between">
            <h5 className="mb-1 text-sm md:text-lg font-plusj font-bold">
              {props.title}
            </h5>
            <div className=" w-6 h-6">
              <button>
                <img src={deleteIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="flex">
            <p className="font-plusj text-sm md:text-base">Size:</p>
            <p className="font-plusj text-gray-500 text-sm md:text-base">
              {props.size}
            </p>
          </div>
          <div className="flex">
            <p className="font-plusj text-sm md:text-base">Color:</p>
            <p className="font-plusj text-gray-500 text-sm md:text-base">
              {props.color}
            </p>
          </div>

          <div className="flex w-full justify-between my-2 items-center">
            <p className=" font-plusj font-bold text-base md:text-2xl">{`$${
              props.price * counter
            }`}</p>
            <div className=" flex md:w-[30%] items-center bg-main_gray gap-2 justify-between rounded-3xl text-sm md:text-base  p-1 border-2 border-solid font-plusj">
              <button
                className="font-bold w-4 h-4 md:w-5 md:h-5"
                onClick={handleMinus}
              >
                <img src={Minus} alt="" />
              </button>
              <p className=" font-plusj text-lg">{counter}</p>
              <button
                className="font-bold w-4 h-4 md:w-5 md:h-5"
                onClick={handleAdd}
              >
                <img src={Plus} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-1 bg-hrColor my-4" />
    </>
  );
}
export default CartProduct;
