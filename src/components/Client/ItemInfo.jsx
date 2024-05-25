'use client'

import Button from './Button'
import Feedback from './Feedback'
import arrowDown from '@/app/_assets/arrowDown.svg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useState, useEffect } from 'react'

import { feedbacks } from './feedbacks'
import { sliderSettings } from './sliderSettings'
import WriteReview from './WriteReview'
import Image from 'next/image'

import { getReviews } from '@/ApiFunctions/get'
import Loader from '../Loader'

function ItemInfo({ children, itemId, productDetails, ...props }) {
    const [Display, setDisplay] = useState('rating')
    const [productReviews, setProductReviews] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        const getdata = async () => {
            const reviewData = await (await getReviews(itemId)).data?.reviews
            setProductReviews(reviewData)
            setLoader(false)
        }
        getdata()
    }, [])

    const listButtonClass = `text-black font-bold`

    return (
        <section className=" my-7">
            <div className="conatiner px-4 m-auto max-w-7xl">
                <div>
                    <ul className="flex justify-between sm:justify-around">
                        <li className=" font-plusj  text-gray-500 hover:text-black">
                            <button
                                className={
                                    Display === 'Details' ? listButtonClass : ''
                                }
                                onClick={() => setDisplay('Details')}>
                                Product Details
                            </button>
                        </li>
                        <li className=" font-plusj  text-gray-500  hover:text-black">
                            <button
                                className={
                                    Display === 'rating' ? listButtonClass : ''
                                }
                                onClick={() => setDisplay('rating')}>
                                Rating & Reviews
                            </button>
                        </li>
                        <li className=" font-plusj  text-gray-500  hover:text-black">
                            <button
                                className={
                                    Display === 'FAQs' ? listButtonClass : ''
                                }
                                onClick={() => setDisplay('FAQs')}>
                                FAQs
                            </button>
                        </li>
                    </ul>
                    <hr className="h-1 bg-hrColor mt-4" />
                    <div className="mt-4 flex justify-between">
                        <div className="flex sm:gap-2 items-center">
                            <p className="font-montserrat font-bold text-2xl">
                                {Display}
                            </p>
                            {Display == 'rating' && (
                                <p className=" font-plusj text-sm text-gray-500">
                                    {`(${productReviews.length})`}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className=" mt-7 min-h-[30vh] w-full flex flex-col gap-4 relative">
                    {loader ? (
                        <Loader childStyle="flex justify-center items-center"></Loader>
                    ) : (
                        <>
                            {Display === 'rating' && (
                                <div className=" flex items-center justify-end mt-1">
                                    <Button
                                        title="Write a review"
                                        text_color="text-white  p-3 "
                                        bg_color="bg-black"
                                        handleClick={() => {
                                            setDisplay('Write a review')
                                        }}
                                    />
                                </div>
                            )}
                            {Display == 'Details' && (
                                <p className=" text-gray-500 text-lg font-plusj my-5">
                                    {productDetails}
                                </p>
                            )}

                            {Display == 'FAQs' && (
                                <p className=" text-3xl text-center font-montserrat font-extrabold my-5">
                                    This Section is under Devolpment
                                </p>
                            )}

                            {Display === 'Write a review' && (
                                <WriteReview
                                    cancelReview={() => setDisplay('rating')}
                                />
                            )}
                            {Display == 'rating' && (
                                <>
                                    {productReviews.length ? (
                                        <>
                                            <Slider
                                                {...sliderSettings}
                                                autoplay={true}
                                                autoplaySpeed={5000}
                                                arrows={false}
                                                rows={2}>
                                                {productReviews.map(
                                                    feedback => (
                                                        <Feedback
                                                            key={feedback.id}
                                                            {...feedback}
                                                        />
                                                    ),
                                                )}
                                            </Slider>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-3xl text-center font-montserrat font-extrabold my-5">
                                                opps!! there is no reviews to
                                                show{' '}
                                            </p>{' '}
                                            <p className="text-2xl text-center font-montserrat font-extrabold my-5">
                                                be the first one and write now!!{' '}
                                            </p>
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
export default ItemInfo

// function handleClick(param) {
//     if (param == 'rating') {
//         setDisplay('rating')
//     } else if (param == 'Details') {
//         setDisplay('Details')
//     } else if (param == 'FAQs') {
//         setDisplay('FAQs')
//     }
// }

// function handleWriteReviewClick() {
//     setDisplay('Write a review')
// }

// let liTitle

// if (Display === 'rating') {
//     liTitle = 'All Reviews'
// } else if (Display === 'Details') {
//     liTitle = 'Description'
// } else if (Display === 'FAQs') {
//     liTitle = 'FAQs'
// } else if (Display === 'Write a review') {
//     liTitle = 'Submit Your Review'
// }
