import Button from '@/components/Client/Button'
import CartProduct from '@/components/Client/CartProduct'
import cloth from '@/app/_assets/cloth.svg'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from '@/lib/axios'
import PopUp from '@/components/PopUp'
import Loader from '../Loader'

function Cart({ cart, total = 0, changeTotal, changeCart }) {
    const router = useRouter()
    const [placeLaoder, setPlaceLoader] = useState(false)
    const [isOrderPlaced, setOrderPlaced] = useState(false)
    const handlePlaceOrder = async () => {
        try {
            setPlaceLoader(true)
            await axios.post(`api/order`).then(res => {
                setOrderPlaced(true)
                setPlaceLoader(false)
            })
        } catch (err) {
            throw new Error(err)
        }
    }
    useEffect(() => {
        if (isOrderPlaced) {
            setTimeout(() => {
                router.push('/')
            }, 3000)
        }
    }, [isOrderPlaced])
    return (
        <div className="flex flex-col md:flex-row gap-7 p-4 w-full rounded-md">
            {isOrderPlaced && (
                <PopUp
                    parentClass="rounded-md"
                    childClass="flex justify-center items-center capitalize"
                    text={'order placed succesfully!!'}>
                    {' '}
                </PopUp>
            )}
            <div className="w-full md:w-[50%] relative p-3 min-h-[20vh] rounded-xl border-2 border-solid border-main_gray">
                {!cart && (
                    <Loader childStyle="flex justify-center items-center"></Loader>
                )}
                {cart.map(i => (
                    <CartProduct
                        key={i.product_id}
                        productid={i.product_id}
                        quantity={i.quantity}
                        changeTotal={changeTotal}
                        changeCart={changeCart}
                    />
                ))}
            </div>

            <div className=" w-full md:w-[40%] p-3 rounded-xl relative border-2 border-solid border-main_gray">
                {!total && (
                    <Loader childStyle="flex justify-center items-center"></Loader>
                )}
                {total && (
                    <>
                        <h4 className=" font-plusj font-bold h-fit flex-grow-0 mb-4 text-lg">
                            Order Summary
                        </h4>
                        <div className=" flex justify-between mb-4">
                            <p className=" font-plusj text-gray-500">
                                Subtotal
                            </p>
                            <p>{`${total} LE`}</p>
                        </div>
                        <div className=" flex justify-between">
                            <p className=" font-plusj text-gray-500">
                                Delivery Fee
                            </p>
                            <p>{`${15} LE`}</p>
                        </div>

                        <hr className="h-1 bg-hrColor my-4" />

                        <div className=" flex justify-between">
                            <p className=" font-plusj">Total</p>
                            <p>{`${total + 15} LE`}</p>
                        </div>
                        <div className=" my-5">
                            <Button
                                title={
                                    placeLaoder ? (
                                        <div className="w-6 h-6 border rounded-[50%]  border-white border-r-transparent animate-spin"></div>
                                    ) : (
                                        'Place Order '
                                    )
                                }
                                bg_color={
                                    'bg-black flex justify-center items-center  '
                                }
                                pc_width={'w-full'}
                                mobile_width={'w-full'}
                                text_color={'text-white'}
                                handleClick={
                                    placeLaoder
                                        ? e => {
                                              e.preventDefault()
                                          }
                                        : handlePlaceOrder
                                }
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default Cart
