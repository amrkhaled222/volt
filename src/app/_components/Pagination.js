import { inter } from '@/font'
import nextIcon from '@/app/_assets/next.png'
import PervIcon from '@/app/_assets/perv.png'
import Image from 'next/image'

export default function Example({ nPages, currentPage, setCurrentPage }) {
    const goToNextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    return (
        <div
            className={`flex items-center justify-between border-t   py-3  ${inter.className} `}>
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1)
                        }
                    }}
                    className="relative flex items-center rounded-lg px-4 py-1 border-black border  hover:scale-95 duration-300 ">
                    <Image
                        className="w-4 h-4"
                        src={PervIcon}
                        alt="perv"></Image>
                    Perv
                </button>
                <button
                    onClick={() => {
                        if (currentPage < nPages) {
                            setCurrentPage(currentPage + 1)
                        }
                    }}
                    className="relative flex items-center rounded-lg px-4 py-1 border-black border gap-1  hover:scale-95 duration-300">
                    Next
                    <Image
                        className="w-4 h-4"
                        src={nextIcon}
                        alt="next"></Image>
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <nav
                        className="isolate flex  gap-3 "
                        aria-label="Pagination">
                        {pageNumbers.map(e => {
                            return (
                                <li
                                    onClick={() => {
                                        setCurrentPage(e)
                                    }}
                                    key={e}
                                    aria-current="page"
                                    className={`flex cursor-pointer hover:scale-95 duration-300 items-center px-4  text-sm  font-medium border rounded-lg border-black ${
                                        e == currentPage &&
                                        'bg-black text-white'
                                    }   `}>
                                    {e}
                                </li>
                            )
                        })}

                        <button
                            onClick={() => {
                                if (currentPage < nPages) {
                                    setCurrentPage(currentPage + 1)
                                }
                            }}
                            className="relative flex items-center rounded-lg px-4 py-1 border-black border  hover:scale-95 duration-300">
                            Next
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
