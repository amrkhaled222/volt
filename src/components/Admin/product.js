import Image from 'next/image'
import { opensans, rubik } from '@/font'
import dolar from '@/app/_assets/dolar.png'
import Link from 'next/link'

function Product(props) {
    return (
        <Link
            href={`Product/edit/${props.id}`}
            className={`flex flex-col bg-[rgb(250,250,250)] rounded-2xl gap-3 ${opensans.className} p-6 hover:scale-95 duration-300 `}>
            <div className="flex gap-3">
                <Image
                    width={84}
                    height={84}
                    className="max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px]  rounded-lg"
                    src={props.picture}
                    alt="productImage"></Image>
                <div className=" flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className={` capitalize`}>{props.title}</h2>
                        <span className=" text-seconderyItemColor text-sm">
                            {props.category_id == '1' && 'Casual'}
                            {props.category_id == '4' && 'Party'}
                            {props.category_id == '2' && 'Formal'}
                            {props.category_id == '3' && 'Sport'}
                        </span>
                    </div>
                    <div
                        className={`${rubik.className} flex  items-center text-sm font-semibold`}>
                        <Image
                            className="w-3 h-3"
                            src={dolar}
                            width={12}
                            height={12}
                            alt="dolar sign"></Image>
                        {props.price}
                    </div>
                </div>
            </div>
            <div>
                <h3 className=" font-semibold"> summary</h3>
                <p className=" text-seconderyItemColor truncate">
                    {props.description}
                </p>
            </div>
        </Link>
    )
}

export default Product
