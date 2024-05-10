export default function Loader() {
    return (
        <div
            className={`   w-full h-full bg-overlay absolute top-50 z-10 left-0 top-0 flex justify-center items-center`}>
            <div className="flex w-[300px] lg:w-1/3 md:1/2   h-30 text-center p-16 relative  rounded-lgfont-semibold  ">
                <div className="border-4 border-black border-t border-t-transparent rounded-[50%] w-40 h-40 animate-spin bg-transparent  "></div>
            </div>
        </div>
    )
}
