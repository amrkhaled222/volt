import * as React from 'react'
import { Button } from '@/components/ui/button'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function Form({ formData, formFunc, setfrom }) {
    const [category, setCategory] = React.useState(formData.category_id)

    React.useEffect(() => {
        setfrom(perv => {
            return { ...perv, category_id: category }
        })
    }, [category])

    let inputStyle =
            'border border-black focus:outline-none focus:border-black  rounded-md p-[7px] ${inter.className} w-full',
        lableStyle = ' font-semibold text-lg capitalize',
        parentDivStyle = 'flex flex-col gap-3'
    return (
        <div className=" lg:basis-[59%]">
            <form className="flex flex-col p-4  gap-5  ">
                <div className={parentDivStyle}>
                    <label className={lableStyle} htmlFor="title">
                        {' '}
                        product name
                    </label>
                    <input
                        placeholder="Type name here"
                        className={inputStyle}
                        value={formData.title}
                        required
                        name="title"
                        id="productName"
                        onChange={e => {
                            formFunc(e)
                        }}></input>
                </div>

                <div className={parentDivStyle}>
                    <label className={lableStyle} htmlFor="description">
                        description
                    </label>
                    <textarea
                        className={inputStyle + ' min-h-[140px]'}
                        placeholder="Type Description here"
                        value={formData.description}
                        name="description"
                        id="description"
                        required
                        onChange={e => {
                            formFunc(e)
                        }}></textarea>
                </div>
                <div className=" flex md:items-center flex-col md:flex-row gap-4 ">
                    <div className={parentDivStyle + ' md:basis-1/2'}>
                        <label className={lableStyle} htmlFor="category">
                            {' '}
                            category
                        </label>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">category</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                asChild
                                side="bottom"
                                align="start">
                                {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
							<DropdownMenuSeparator /> */}
                                <DropdownMenuRadioGroup
                                    value={category}
                                    onValueChange={setCategory}>
                                    <DropdownMenuRadioItem value="1">
                                        Casual
                                    </DropdownMenuRadioItem>

                                    <DropdownMenuRadioItem value="2">
                                        formal
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="3">
                                        sport
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="4">
                                        party
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className={parentDivStyle + ' md:basis-1/2'}>
                        <label className={lableStyle} htmlFor="price">
                            {' '}
                            Price
                        </label>
                        <input
                            required
                            type="number"
                            className={inputStyle}
                            id="price"
                            placeholder="₹1000"
                            value={formData.price}
                            name="price"
                            onChange={e => {
                                formFunc(e)
                            }}></input>
                    </div>
                </div>
            </form>
        </div>
    )
}
