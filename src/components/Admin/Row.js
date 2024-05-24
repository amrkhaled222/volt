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
                router.push(`order/Details/${props.id}`)
            }}
            className={`"bg-white border-b ${opensans.className} text-sm font-semibold cursor-pointer  text-black hover:scale-95 duration-300 `}>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-normal ">
                {props.id}
            </th>

            <td className="px-6 py-4">{props.created_at.split('T')[0]}</td>
            <td className="px-6 py-4"> {props.user_id}</td>
            <td className="px-6 py-4 flex items-center gap-1">
                {' '}
                <span
                    className={`w-2 h-2 rounded-full ${
                        props.status == '"deliverd"'
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
                    {props.total_price}
                </span>
            </td>
        </tr>
    )
}
export default Row
