import Image from 'next/image'
export default function ImagePreview({ picture, title }) {
    return (
        <>
            {picture != '' && (
                <div className="flex gap-2 min-h-[380px] rounded-lg justify-center items-center p-3 ">
                    {console.log(picture)}
                    <Image
                        loader={picture => picture}
                        width={30}
                        height={30}
                        src={picture}
                        alt={title}
                        // onLoad={() => {
                        // 	URL.revokeObjectURL(ImagePreview.preview);
                        // }}
                        className=" w-full h-full rounded-md"
                    />
                </div>
            )}
            {picture == '' && (
                <div className="flex gap-2 min-h-[380px] bg-[rgb(0,0,0,0.2)] rounded-lg justify-center items-center p-3 "></div>
            )}
        </>
    )
}
