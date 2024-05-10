import Image from 'next/image'
import { opensans } from '@/font'
import correctIcon from '@/app/_assets/correct.png'
import removeIcon from '@/app/_assets/remove.png'
export default function AcceptedImage({ image, title, removeFile }) {
    return (
        <>
            <li
                className={`relative rounded-md p-4  bg-[#FAFAFA] font-semibold justify-between items-center  flex gap-1 ${opensans.className} hover:scale-95 duration-300 `}>
                <div className="flex gap-2">
                    <Image
                        loader={image => image}
                        width={30}
                        height={30}
                        src={image}
                        alt={title}
                        // onLoad={() => {
                        // 	URL.revokeObjectURL(file.preview);
                        // }}
                        className="h-12 w-12 rounded-md"
                    />
                </div>
                <div className="max-w-[50%]">
                    <p className=" text-ellipsis max-w-full break-words	">
                        {title}
                    </p>
                </div>
                <div className="flex gap-1 ">
                    <button
                        type="button"
                        className=" absolute -top-3 -right-3 "
                        onClick={() => removeFile()}>
                        <Image
                            alt="remove"
                            className="w-5 h-5"
                            src={removeIcon}></Image>
                    </button>
                    <Image
                        alt="uploded"
                        src={correctIcon}
                        className="w-7 h-7"></Image>
                </div>
            </li>
        </>
    )
}
