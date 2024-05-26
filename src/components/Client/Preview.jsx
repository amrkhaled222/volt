'use client'
import { useRouter } from 'next/navigation'
function Preview({ title, children, path }) {
    const router = useRouter()
    return (
        <section className=" my-20">
            <div className="container m-auto px-4 max-w-7xl ">
                <h2 className=" cursor-default font-montserrat font-extrabold uppercase my-12 text-center text-3xl">
                    {title}
                </h2>

                {children}

                <div className="flex justify-center font-montserrat">
                    <button
                        onClick={() => {
                            router.push(`/shop?${path}`)
                        }}
                        className="rounded-3xl duration-300 hover:scale-95  block p-2 border-2 border-solid font-plusj text-black bg-white w-40">
                        View All
                    </button>
                </div>
                <hr className=" h-1 bg-hrColor mt-10" />
            </div>
        </section>
    )
}
export default Preview
