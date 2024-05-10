import removeIcon from '@/app/_assets/remove.png'
export default function PopUpWithFunc(text, clickFunc) {
    return (
        <div
            className={`   w-full h-full bg-overlay absolute top-50 z-10 left-0 top-0 flex justify-center items-center`}>
            <div className="flex w-[300px] lg:w-1/3 md:1/2   h-30 text-center p-16 relative  rounded-lg bg-white font-semibold  ">
                {text}
                <button
                    onClick={() => {
                        clickFunc
                    }}
                    className="w-8 h-8 absolute -right-3 -top-3 z-20">
                    <Image src={removeIcon}></Image>
                </button>
            </div>
        </div>
    )
}
