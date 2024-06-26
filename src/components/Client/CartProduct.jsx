import { useState, useEffect } from 'react'
import deleteIcon from '@/app/_assets/delete.png'
import Plus from '@/app/_assets/plusIcon.svg'
import Minus from '@/app/_assets/MinusIcon.svg'
import Image from 'next/image'
import axios from '@/lib/axios'
import Loader from '@/components/Loader'

function CartProduct({ productid, quantity, changeTotal, changeCart }) {
    const [product, setProduct] = useState([])

    const [q, setq] = useState(quantity)
    const [loader, setLoader] = useState()

    const fetchProduct = async () => {
        setLoader(true)
        try {
            await axios.get(`api/product/${productid}`).then(res => {
                setProduct(res.data.product)
                setLoader(false)
            })
        } catch (err) {
            throw new Error(err)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [q])
    async function handleAdd() {
        try {
            await axios
                .post(`api/cart/add/${productid}`, {
                    quantity: 1,
                })
                .then(res => {
                    setq(e => e + 1)
                    changeTotal(e => e + product.price)
                })
        } catch (err) {
            throw new Error(err)
        }
    }

    async function handleMinus() {
        try {
            await axios
                .post(`api/cart/remove/${productid}`, {
                    quantity: 1,
                })
                .then(res => {
                    changeTotal(e => e - product.price)
                    setq(e => e - 1)
                })
        } catch (err) {
            throw new Error(err)
        }
    }
    async function handleDelete() {
        try {
            await axios
                .post(`api/cart/remove/${productid}`, {
                    quantity: q,
                })
                .then(res => {
                    changeTotal(e => e - product.price * q)
                    setq(0)
                })
        } catch (err) {
            throw new Error(err)
        }
    }

    if (q == 0) {
        changeCart(e => e.filter(e => e.product_id == productid))
    }

    return (
        <>
            <div className="flex gap-3 relative flex-col sm:flex-row min-h-[150px]  ">
                {loader ? (
                    <Loader childStyle="flex justify-center items-center  lg:!w-full"></Loader>
                ) : (
                    <>
                        <div>
                            <Image
                                src={product.picture}
                                alt={product.title}
                                height="124"
                                width="124"
                                className=" sm:w-[99px] sm:h-[99px] md:h-[124px] md:w-[124px] w-full "
                            />
                        </div>
                        <div className="sm:w-[70%] w-full">
                            <div className="flex justify-between">
                                <h5 className="mb-1 text-sm md:text-lg font-plusj font-bold">
                                    {product.title}
                                </h5>
                                <div className=" w-6 h-6">
                                    <button>
                                        <Image
                                            onClick={handleDelete}
                                            src={deleteIcon}
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="flex w-full justify-between my-2 items-center">
                                <p className=" font-plusj font-bold text-base md:text-2xl">{`${
                                    product.price * q
                                } LE`}</p>
                                <div className=" flex md:w-[30%] items-center bg-main_gray gap-2 justify-between rounded-3xl text-sm md:text-base  p-1 border-2 border-solid font-plusj">
                                    <button
                                        className="font-bold w-4 h-4 md:w-5 md:h-5"
                                        onClick={handleMinus}>
                                        <Image src={Minus} alt="" />
                                    </button>
                                    <p className=" font-plusj text-lg">{q}</p>
                                    <button
                                        className="font-bold w-4 h-4 md:w-5 md:h-5"
                                        onClick={handleAdd}>
                                        <Image src={Plus} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <hr className="h-1 bg-hrColor my-4" />
        </>
    )
}
export default CartProduct
