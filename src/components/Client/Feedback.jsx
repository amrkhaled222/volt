// import verified from "../assets/verfied.png";
import Image from 'next/image'
import star from '@/app/_assets/star.png'
import vacumStar from '@/app/_assets/vacumStar.png'

function Feedback({ ...props }) {
    let rating = props.rating
    let finalRate = Math.floor(rating)
    let stars = Array(finalRate).fill(1)
    let vacumStars = Array(5 - finalRate).fill(0)
    let allStars = [...stars, ...vacumStars]

    return (
        <div className=" box-border w-[98%] min-h-[200px] mb-2 duration-500  hover:scale-95  border-2 border-solid border-main_gray bg-white rounded-2xl p-5">
            <div className=" flex gap-2">
                {allStars.map((st, i) => {
                    if (st == 1) {
                        return (
                            <Image
                                src={star}
                                key={i}
                                className="h-4 w-4 "
                                alt="Customer Rating"
                            />
                        )
                    } else if (st == 0) {
                        return (
                            <Image
                                src={vacumStar}
                                key={i}
                                className="h-4 w-4 "
                                alt="Customer Rating"
                            />
                        )
                    }
                })}
            </div>
            <div className=" flex gap-3">
                <h5 className=" font-plusj font-bold text-xl my-2 capitalize">
                    {props.customer_name}
                </h5>
            </div>
            <p className="font-plus text-gray-500">{props.comment}</p>
        </div>
    )
}
export default Feedback
