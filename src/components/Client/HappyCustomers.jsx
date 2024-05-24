'use client'
import arrowLeft from '@/app/_assets/arrow-left-bold 2.svg'
import arrowRight from '@/app/_assets/arrow-right-bold 1.svg'
import stars from '@/app/_assets/stars.svg'
import Feedback from './Feedback'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { feedbacks } from './feedbacks'
import { sliderSettings } from './sliderSettings'
import { useEffect, useState } from 'react'
import { getReviews } from '@/ApiFunctions/get'
import Loader from '../Loader'
function HappyCustomers() {
    const [reviews, setReveiws] = useState([])

    useEffect(() => {
        const getdata = async () => {
            const reviewData = await (await getReviews()).data.reviews
            setReveiws(reviewData)
        }
        getdata()
    }, [])
    console.log(reviews)
    return (
        <section className=" mt-20 mb-52 z-0">
            <div className="container m-auto px-4 max-w-7xl z-10">
                <div className=" flex justify-between">
                    <h2 className="uppercase font-extrabold font-montserrat text-3xl sm:text-5xl">
                        OUR HAPPY CUSTOMERS
                    </h2>
                </div>
                <div className="mt-16 max-w-full relative min-h-[20vh]">
                    {reviews.length ? (
                        <>
                            <Slider
                                {...sliderSettings}
                                autoplay={true}
                                autoplaySpeed={3000}
                                arrows={false}>
                                {reviews.map(feedback => (
                                    <Feedback key={feedback.id} {...feedback} />
                                ))}
                            </Slider>
                        </>
                    ) : (
                        <Loader childStyle="flex justify-center items-center"></Loader>
                    )}
                </div>
            </div>
        </section>
    )
}
export default HappyCustomers
