'use client'
import Image from 'next/image'
import revenue from '@/app/_assets/revenue.png'
import orderSammary from '@/app/_assets/orderSummary.png'
import customersSammary from '@/app/_assets/customersSummary.png'

function Stats({ stat }, props) {
    return (
        <div className="bg-white shadow-md flex flex-col py-5 px-6 pb-9 rounded-2xl  gap-5 capitalize hover:scale-95 duration-300  min-w-[260px] ">
            <h2 className="font-bold text-sm ">{stat[0]}</h2>
            <div className=" flex items-center justify-between gap-7">
                <div className="flex gap-2 items-center">
                    <Image
                        src={
                            stat[0] == 'total revenue'
                                ? revenue
                                : stat[0] == 'total orders'
                                ? orderSammary
                                : customersSammary
                        }
                        className="w-9 h-9"
                        alt="descriptive Image"></Image>{' '}
                    <span className=" font-semibold flex items-center">
                        {stat[1]}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Stats
