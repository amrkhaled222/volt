export default function PopUp({ text }) {
    return (
        <div
            className={`   w-full h-full bg-overlay absolute top-50 z-10 left-0 top-0 flex justify-center items-center`}>
            <div className="flex w-[300px] lg:w-1/3 md:1/2   h-30 text-center p-16 relative  rounded-lg bg-white font-semibold  ">
                {text}
            </div>
        </div>
    )
}
