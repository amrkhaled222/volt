import Button from '@/components/Client/Button'

import { sendData } from '@/ApiFunctions/post'
import Loader from '@/components/Loader'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

function WriteReview({ cancelReview, productId, display, handleAdd }) {
    const [review, setReview] = useState({
        rating: 0,
        comment: '',
    })

    const [dataSent, setDataSent] = useState(false)
    const [loader, setLoader] = useState(false)
    const router = useRouter()

    const handleSendData = ()=> {
        setLoader(true)
        sendData(setDataSent, review,`/api/review/${productId}`)
    }

    useEffect(() => {
      if(dataSent){
        handleAdd(1)
        display('rating')
      }
    }, [dataSent])
    

    return (
        <form
            className="mt-4"
            onSubmit={e => {
                e.preventDefault()
            }}>
            {/* <div className="  md:w-1/2 flex flex-col gap-3 mb-4 ">
                <label htmlFor="name" className=" font-plusj font-bold text-xl">
                    Name :
                </label>
                <input
                    type="text"
                    id="name"
                    className="border-[1px] border-solid border-gray-500 rounded-lg p-3 font-plusj"
                    placeholder="Enter your name"
                />
            </div> */}
            <div className="  md:w-1/2 flex flex-col gap-3 mb-4 ">
                <label
                    htmlFor="Rating"
                    className=" font-plusj font-bold text-xl">
                    Your Rating :
                </label>
                <input
                    type="number"
                    id="Rating"
                    className="border-[1px] border-solid border-gray-500 rounded-lg p-3 font-plusj"
                    placeholder="Enter your Rating from 1-5"
                    min={1}
                    max={5}
                    value={review.rating}
                    onChange={(e) => setReview(pre => {
                        return { ...pre, rating: e.target.value }
                    })}
                />
            </div>
            <div className="  md:w-1/2 flex flex-col gap-3 mb-5 ">
                <label
                    htmlFor="Feedback"
                    className=" font-plusj font-bold text-xl">
                    Your Feedback :
                </label>
                <textarea
                    id="Feedback"
                    className="border-[1px] border-solid border-gray-500 rounded-lg p-3 font-plusj"
                    placeholder="Enter your Feedback"
                    value={review.comment}
                    onChange={(e) => setReview(pre => {
                        return { ...pre, comment: e.target.value }
                    })}
                />
            </div>
            <div className=" flex gap-5">
                <div>
                    <button 
                        className="rounded-3xl  block py-2 px-3 border-2 border-solid font-plusj bg-black text-white"
                        onClick={(e) => loader? e.preventDefault():handleSendData()}
                    >
                        {loader ? (
                            <span className="w-5 h-5 block border border-b-transparent rounded-full animate-spin "></span>
                        ) : (
                            ('Submit')
                        )}
                    </button>
                </div>
                <div>
                    <input
                        type="reset"
                        className="rounded-3xl  block py-2 px-3 border-2 border-solid font-plusj text-black"
                    />
                </div>
                <div>
                    <button
                    className="rounded-3xl  block py-2 px-3 border-2 border-solid font-plusj text-black"
                     onClick={cancelReview}> cancel</button>
                </div>
            </div>
        </form>
    )
}
export default WriteReview
