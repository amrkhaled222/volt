'use client'
import Vector1 from '@/app/_assets/Vector1.png'
import Vector2 from '@/app/_assets/Vector2.png'
import versace from '@/app/_assets/versace.svg'
import Zara from '@/app/_assets/zara-logo-1 1.svg'
import Gucci from '@/app/_assets/gucci-logo-1 1.svg'
import prada from '@/app/_assets/prada-logo-1 1.svg'
import Calvin from '@/app/_assets/calvin.svg'
import Preview from '@/app/_components/client/Preview'
import Browse from '@/app/_components/client/Browse'
import HappyCustomers from '@/app/_components/client/HappyCustomers.jsx'
import Footer from '@/app/_components/client/Footer'
import MobileNav from '@/app/_components/client/MobileNav.jsx'
import Nav from '@/app/_components/client/Nav.jsx'
import ClothItem from '@/app/_components/client/ClothItem.jsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import Loader from '@/app/_components/Loader'
function Home() {
    // to change route
    let router = useRouter()

    const [latest, setLatest] = useState([])
    //get BestSeller
    const [best, setBest] = useState([])

    const fetchLatest = async () => {
        try {
            await axios.get(`api/product`).then(res => {
                setLatest(res.data.products.data.slice(0, 3))
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    const fetchBestData = async () => {
        try {
            await axios.get(`api/product?best_seller=1`).then(res => {
                setBest(res.data.products.data.slice(0, 4))
            })
        } catch (err) {
            throw new Error(err)
        }
    }
    useEffect(() => {
        fetchLatest()
        fetchBestData()
    }, [])

    return (
        <main>
            <div className=" container px-4 m-auto ">
                <MobileNav />
                <Nav />
            </div>
            <header className="bg-main_gray  bg-MainModels  md:bg-pcMainModels bg-bottom md:bg-[center_right_-8rem] xl:bg-right   bg-no-repeat bg-[length:500px_600px] md:bg-cover xl:bg-cover">
                <div className="container px-4 m-auto md:pt-0 pt-8">
                    <div className=" h-[120vh] md:h-fit md:pt-20  relative">
                        <div>
                            <h1 className=" font-extrabold font-montserrat text-4xl  md:text-3xl  lg:text-5xl    xl:text-6xl mb-10 md:max-w-[450px] lg:max-w-[500px] ">
                                FIND CLOTHES THAT MATCHES YOUR STYLE
                            </h1>
                            <p className=" font-plusj text-gray-500  text-sm md:text-base lg:text-lg mb-10 md:max-w-[400px] lg:max-w-[490px]">
                                Browse through our diverse range of meticulously
                                crafted garments, designed to bring out your
                                individuality and cater to your sense of style.
                            </p>
                            <button
                                onClick={() => {
                                    router.push('/shop')
                                }}
                                className="rounded-3xl cursor-pointer hover:scale-95 duration-300  block p-2 border-2 border-solid font-plusj w-full md:w-[250px]  bg-black text-white">
                                Shop Now
                            </button>

                            <div className="flex gap-x-14 gap-y-5 justify-center md:justify-start md:gap-4 flex-row flex-wrap my-10">
                                <div className=" w-fit pr-2 border-r-2 border-gray-500">
                                    <h4 className=" font-montserrat font-bold text-xl md:text-3xl lg:text-4xl  w-fit">
                                        200+
                                    </h4>
                                    <p className=" font-plusj text-gray-500 text-[10px] w-fit ">
                                        International Brands
                                    </p>
                                </div>
                                <div className=" w-fit pr-2 border-r-2 border-gray-500">
                                    <h4 className=" font-montserrat font-bold text-xl md:text-3xl lg:text-4xl    w-fit">
                                        2,000+
                                    </h4>
                                    <p className=" font-plusj text-gray-500 text-[10px] w-fit ">
                                        High-Quality Products
                                    </p>
                                </div>
                                <div className=" w-fit pr-2 border-r-2 border-gray-500">
                                    <h4 className=" font-montserrat font-bold text-xl md:text-3xl lg:text-4xl   w-fit">
                                        30,000+
                                    </h4>
                                    <p className=" font-plusj text-gray-500 text-[10px] w-fit ">
                                        Happy Customers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Image
                            src={Vector1}
                            alt=""
                            className="  absolute  left-[3%] sm:left-[10%] md:left-[50%] lg:left-[55%] top-[65%] md:top-[45%] h-[40px]"
                        />
                        <Image
                            src={Vector2}
                            alt=""
                            className=" absolute right-[-2%] sm:right-[10%] md:right-[0%] top-[55%] md:top-[15%] xl:top-[10%] h-[70px]"
                        />
                    </div>
                </div>
                <div className=" bg-black min-h-28 relative z-10 flex items-center">
                    <div className=" container m-auto max-w-7xl p-4 flex flex-wrap justify-center gap-6 md:justify-evenly md:items-center h-full">
                        <Image
                            src={versace}
                            alt="versace"
                            width={'auto'}
                            height={'auto'}
                            className=" w-28 md:w-fit"
                        />
                        <Image
                            src={Zara}
                            alt="Zara"
                            width={'auto'}
                            height={'auto'}
                            className=" max-w-28 md:max-w-fit h-[35px] md:h-fit"
                        />
                        <Image
                            src={Gucci}
                            alt="Gucci"
                            width={'auto'}
                            height={'auto'}
                            className=" max-w-28 md:max-w-fit"
                        />
                        <Image
                            src={prada}
                            alt="prada"
                            width={'auto'}
                            height={'auto'}
                            className=" max-w-28 md:max-w-fit"
                        />
                        <Image
                            src={Calvin}
                            alt="Calvin"
                            width={'auto'}
                            height={'auto'}
                            className=" max-w-28 md:max-w-fit"
                        />
                    </div>
                </div>
            </header>

            <Preview path={'latest=1'} title="new arrivals">
                <div className="flex flex-wrap justify-center gap-4 mb-10  min-h-[20vh] relative w-full">
                    {latest.length == 0 && (
                        <Loader
                            style=" bg-transparent"
                            childStyle=" justify-center items-center"></Loader>
                    )}

                    {latest.length > 0 &&
                        latest.map(product => (
                            <ClothItem key={product.id} {...product} />
                        ))}
                </div>
            </Preview>

            <Preview path={'best_seller=1'} title="top selling">
                <div className="flex flex-wrap justify-center gap-4 mb-10 min-h-[20vh] relative">
                    {best.length == 0 && (
                        <Loader
                            style="bg-transparent"
                            childStyle=" justify-center items-center"></Loader>
                    )}

                    {best.length > 0 &&
                        best.map(product => (
                            <ClothItem key={product.id} {...product} />
                        ))}
                </div>
            </Preview>
            <Browse />
            <HappyCustomers />
            <Footer />
        </main>
    )
}
export default Home
