import star from '@/app/_assets/star.png'
import Image from 'next/image'
import Link from 'next/link'

function ClothItem({ ...props }) {
    let rating = 0
    if (props.rate) {
        rating = props.rate
    }

    let finalRate = Math.floor(rating)
    const stars = new Array(finalRate).fill(0)
    return (
        <Link
            href={`/product/${props.id}`}
            className=" cursor-pointer shadow-sm rounded-lg p-4 hover:scale-95 duration-500"
            key={props.id}>
            <div className=" mb-3">
                <Image
                    src={props.picture}
                    width={300}
                    height={400}
                    alt={props.title}
                    className="max-h-[300px] rounded-md"
                />
            </div>

            <h3 className=" font-plusj font-bold text-xl mb-2 truncate">
                {props.title}
            </h3>

            <div className="flex gap-5 mb-2">
                <div className=" flex gap-2">
                    {stars.map((st, i) => (
                        <Image
                            src={star}
                            key={i}
                            className="h-4 w-4 "
                            alt="Customer Rating"
                        />
                    ))}
                </div>

                <p className="font-plusj font-bold text-sm">{props.rating}</p>
            </div>

            <p className=" font-plusj  text-seconderyItemColor  text-sm">{`$${props.price}`}</p>
        </Link>
    )
}
export default ClothItem
