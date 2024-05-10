'use client'
import { opensans } from '@/font'
import dolar from '@/app/_assets/dolar.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Row(props) {
    let router = useRouter()
    return (
        <tr
            onClick={() => {
                router.push(`orderList/orderDetails/${props.orderId}`)
            }}
            className={`"bg-white border-b ${opensans.className} text-sm font-semibold cursor-pointer  text-black hover:scale-95 duration-300 `}>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-normal ">
                {props.product}
            </th>
            <td className="px-6 py-4">{props.orderId}</td>
            <td className="px-6 py-4">{props.date}</td>
            <td className="px-6 py-4"> {props.customerName}</td>
            <td className="px-6 py-4 flex items-center gap-1">
                {' '}
                <span
                    className={`w-2 h-2 rounded-full ${
                        props.status == 'delivered'
                            ? 'bg-darkBlue'
                            : 'bg-[#FFA52F]'
                    }`}></span>{' '}
                {props.status}
            </td>
            <td className="px-6 py-4">
                <span className="flex items-center">
                    <Image
                        alt="dolar sign"
                        src={dolar}
                        className="w-4 h-4"></Image>
                    {props.amount}
                </span>
            </td>
        </tr>
    )
}
export default Row
