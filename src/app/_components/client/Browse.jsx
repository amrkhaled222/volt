function Browse() {
  return (
    <section className=" mt-20 mb-52 md:mb-40">
      <div className=" container m-auto px-4 max-w-7xl">
        <div className=" bg-lightgrey rounded-3xl p-11">
          <h2 className="uppercase font-extrabold font-montserrat text-3xl sm:text-5xl text-center mb-10">
            BROWSE BY dress STYLE
          </h2>
          <div className=" grid gap-5 grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2 justify-center">
            <div className="hover:shadow-xl hover:cursor-pointer bg-white rounded-3xl p-9 h-[289px] bg-mobileCasual md-bg-casual bg-no-repeat bg-cover md:bg-fill bg-right md:col-start-1 md:col-end-2">
              <h4 className=" uppercase font-plusj font-bold text-3xl">
                casual
              </h4>
            </div>
            <div className=" hover:shadow-xl hover:cursor-pointer bg-white rounded-3xl p-9 h-[289px] bg-mobileFormal md:bg-formal bg-no-repeat  bg-cover md:bg-fill bg-right md:col-start-2 md:col-end-4">
              <h4 className=" uppercase font-plusj font-bold text-3xl">
                formal
              </h4>
            </div>
            <div className=" hover:shadow-xl hover:cursor-pointer bg-white rounded-3xl p-9 h-[289px] bg-mobileParty md:bg-party bg-no-repeat bg-cover md:bg-fill bg-right md:col-start-1 md:col-end-3">
              <h4 className=" uppercase font-plusj font-bold text-3xl">
                party
              </h4>
            </div>
            <div className=" hover:shadow-xl hover:cursor-pointer bg-white rounded-3xl p-9 h-[289px] bg-mobileGym md:bg-gym bg-no-repeat bg-cover md:bg-fill bg-right md:col-start-3">
              <h4 className=" uppercase font-plusj font-bold text-3xl">gym</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Browse;
