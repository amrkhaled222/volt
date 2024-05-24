function UpToDate() {
  return (
    <div className=" absolute top-[-139px]  md:top-[-60px]  left-[50%] translate-x-[-50%]  w-[80%] m-auto font-montserrat  bg-black rounded-3xl py-6 px-4 flex md:justify-between md:py-6 md:px-12  md:flex-row flex-col gap-5 flex-wrap ">
      <h2 className=" font-plusj uppercase text-white text-2xl font-extrabold md:w-1/2 xl:text-3xl sm:w-full lg:text-2xl md:text-2xl ">
        stay up to date about our latest offers
      </h2>
      <div className="flex flex-col gap-y-4 md:w-1/3 lg:gap-y-3 md:gap-y-2 font-plusj ">
        <input
          type="text"
          className=" rounded-3xl p-1 outline-none text-center font-plusj block "
          placeholder="Enter your email address"
        />
        <button className=" capitalize bg-white rounded-3xl p-1 block m-auto sm:w-full w-full ">
          subscribe to newsletter
        </button>
      </div>
    </div>
  );
}
export default UpToDate;
