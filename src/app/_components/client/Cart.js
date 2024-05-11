import Button from '@/app/_components/client/Button'
import CartProduct from '@/app/_components/client/CartProduct'
import cloth from '@/app/_assets/cloth.svg'

function Cart() {
    let subTotal

    return (
        <div className="flex flex-col md:flex-row gap-7 p-4">
            <div className="w-full md:w-[50%] p-3 rounded-xl border-2 border-solid border-main_gray">
                <CartProduct
                    src={cloth}
                    title={'Gradient Graphic T-shirt'}
                    size={'Large'}
                    color={'White'}
                    price={145}
                />
            </div>
            <div className=" w-full md:w-[40%] p-3 rounded-xl border-2 border-solid border-main_gray">
                <h4 className=" font-plusj font-bold h-fit flex-grow-0 mb-4 text-lg">
                    Order Summary
                </h4>
                <div className=" flex justify-between mb-4">
                    <p className=" font-plusj text-gray-500">Subtotal</p>
                    <p>{`$${subTotal}`}</p>
                </div>
                <div className=" flex justify-between">
                    <p className=" font-plusj text-gray-500">Delivery Fee</p>
                    <p>{`$${15}`}</p>
                </div>

                <hr className="h-1 bg-hrColor my-4" />

                <div className=" flex justify-between">
                    <p className=" font-plusj">Total</p>
                    <p>{`$${subTotal + 15}`}</p>
                </div>
                <div className=" my-5">
                    <Button
                        title={'Go to Checkout'}
                        bg_color={'bg-black'}
                        pc_width={'w-full'}
                        mobile_width={'w-full'}
                        text_color={'text-white'}
                    />
                </div>
            </div>
        </div>
    )
}
export default Cart
