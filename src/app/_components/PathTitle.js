'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { opensans } from '@/font'
import plus from '../_assets/plus.png'
import Image from 'next/image'

function PathTitle() {
    let pathname = usePathname().split('/')

    let dir = []
    for (let i = 1; i < pathname.length; i++) {
        dir[i - 1] = pathname[i].split(/(?=[A-Z])/).join(' ')
    }
    return (
        <div className="flex justify-between items-center container p-4 m-auto">
            <div className=" capitalize flex flex-col ">
                <h2 className=" capitalize font-semibold text-2xl ">
                    {dir[0]}
                </h2>
                <p className={`${opensans.className}  font-semibold`}>
                    {' '}
                    home {dir.map(e => ` > ${e}`)}
                </p>
            </div>
            {pathname.length == 2 && pathname[1] == 'allProduct' && (
                <Link
                    className="bg-black text-white px-6 py-3 rounded-lg flex gap-2  text-sm items-center uppercase hover:scale-95 duration-300"
                    href={'/allProduct/addProduct'}>
                    <Image className="w-4 h-4" src={plus} alt="add"></Image>
                    add new product
                </Link>
            )}
        </div>
    )
}
export default PathTitle
