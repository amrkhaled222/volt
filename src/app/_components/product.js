import Image from 'next/image'
import { opensans, rubik } from '@/font'
import productImg from '../_assets/productDesign.png'
import dolar from '../_assets/dolar.png'
import Link from 'next/link'

function Product(props) {
    return (
        <Link
            href={`allProduct/productDetails/${props.id}`}
            className={`flex flex-col bg-[rgb(250,250,250)] rounded-2xl gap-3 ${opensans.className} p-4 hover:scale-95 duration-300 `}>
            <div className="flex gap-3">
                <Image
                    className="w-22 h-22"
                    src={productImg}
                    alt="productImage"></Image>
                <div className=" flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                        <h2 className={` capitalize`}>{props.title}</h2>
                        <span className=" text-seconderyItemColor text-sm">
                            {props.type}
                        </span>
                    </div>
                    <div
                        className={`${rubik.className} flex  items-center text-sm font-semibold`}>
                        <Image
                            className="w-3 h-3"
                            src={dolar}
                            alt="dolar sign"></Image>
                        {props.price}
                    </div>
                </div>
            </div>
            <div>
                <h3 className=" font-semibold"> summary</h3>
                <p className=" text-seconderyItemColor">{props.summary}</p>
            </div>
            <div className="border border-seconderyItemColor flex flex-col gap-2 p-3 rounded-lg">
                <div className="flex  justify-between relative after:block after:w-full after:h-[0.5px] after:bg-seconderyItemColor after:absolute  after:bottom-[-2px]  after:left-0    ">
                    {' '}
                    <span>sales</span> <span>{props.sales}</span>
                </div>

                <div className="flex justify-between">
                    {' '}
                    <span>remaining products</span>{' '}
                    <span>{props.remainingProducts}</span>
                </div>
            </div>
        </Link>
    )
}

export default Product
