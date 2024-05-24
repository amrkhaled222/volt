'use client'
import { useEffect, useState } from 'react'
import ImagePreview from '@/components/Admin/ImagePreview'
import StyledButton from '@/components/Admin/StyledButton'
import { useRouter } from 'next/navigation'
import removeIcon from '@/app/_assets/remove.png'
import Loader from '@/components/Loader'
import { validateForm } from '@/components/function'
import PopUp from '@/components/PopUp'
import Image from 'next/image'
import Form from '@/components/Admin/Form'
import Dropzone from '@/components/Dropzone'
import { sendData } from '@/ApiFunctions/post'
function ProductDetails(props) {
    //validate form and show propiate massege
    const [formValidate, setFormValidate] = useState({
        state: true,
        problem: '',
    })

    //prvent more than one Image
    const [uploadExceed, setUploadExceed] = useState(false)
    //intialize form data
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category_id: '',
        price: '',
        picture: '',
    })
    const [query, setquery] = useState('')
    const [dataSent, setDataSent] = useState(false)
    const [loader, setloader] = useState(false)

    // send data to api

    // redirect User

    const redirectUser = () => {
        router.push('/allProduct')
    }

    //remove uploaded Image

    const takepic = inputPic => {
        setFormData(e => {
            return { ...e, picture: inputPic }
        })
    }

    // remove rejected Image

    ///handle input
    const handleFormdata = e => {
        const { name, value } = e.target

        setFormData(e => ({
            ...e,
            [name]: value,
        }))
    }
    console.log(formData.picture)
    //use router for cancel button

    let router = useRouter()
    const changePath = () => {
        router.push('/Product')
    }

    //form validation and send data

    const AddButton = e => {
        e.preventDefault()

        setFormValidate(validateForm(formData))

        if (formValidate.state) {
            setquery('send data')
        }
    }
    useEffect(() => {
        if (query == 'send data') {
            setloader(true)
            sendData(setDataSent, formData, '/api/product')
        }
    }, [query])

    useEffect(() => {
        if (dataSent) {
            setTimeout(() => {
                redirectUser()
                setloader(false)
            }, 3000)
        }
    }, [dataSent])

    return (
        <div className=" p-4 container m-auto">
            <div className="bg-white  flex  rounded-xl flex-col lg:flex-row min-h-[80vh]">
                {/* pop up when upload more than one image */}

                {uploadExceed && (
                    <div
                        className={` w-full h-full bg-overlay absolute top-50 z-10 left-0 top-0 flex justify-center items-center`}>
                        <div className="flex w-[300px] lg:w-1/3 md:1/2   h-30 text-center p-16 relative  rounded-lg bg-white font-semibold  ">
                            oops!! max one image
                            <button
                                onClick={() => {
                                    setUploadExceed(false)
                                }}
                                className="w-8 h-8 absolute -right-3 -top-3 z-20">
                                <Image src={removeIcon}></Image>
                            </button>
                        </div>
                    </div>
                )}

                {/* pop up when form invalid */}
                {!formValidate.state && (
                    <div
                        className={` w-full h-full bg-overlay absolute top-50 z-10 left-0 top-0 flex justify-center items-center`}>
                        <div className="flex w-[300px] lg:w-1/3 md:1/2   h-30 text-center p-16 relative  rounded-lg bg-white font-semibold  ">
                            please add ${formValidate.problem}
                            <button
                                onClick={() => {
                                    setFormValidate({
                                        state: true,
                                        problem: '',
                                    })
                                }}
                                className="w-8 h-8 absolute -right-3 -top-3 z-20">
                                <Image src={removeIcon}></Image>
                            </button>
                        </div>
                    </div>
                )}
                {query == 'send data' && !dataSent && (
                    <Loader
                        style="bg-transparent"
                        childStyle="flex justify-center items-center"></Loader>
                )}
                {query == 'send data' && dataSent && (
                    <PopUp text={'product uploaded successfully'} />
                )}

                <Form
                    formData={formData}
                    formFunc={handleFormdata}
                    AddButton={AddButton}
                    setfrom={setFormData}
                />
                <div className=" flex flex-col gap-5 lg:basis-[41%] p-4">
                    <ImagePreview picture={formData.picture}></ImagePreview>

                    <h2 className=" capitalize text-xl font-semibold">
                        {' '}
                        product gallery
                    </h2>
                    <Dropzone
                        handleFormChange={takepic}
                        urlPath="api/product/upload"
                    />

                    <div className="flex  justify-between flex-col md:flex-row gap-2">
                        <form
                            className="w-full basis-[45%] "
                            onSubmit={AddButton}>
                            <button
                                type="submit"
                                className={
                                    ' w-full py-2 bg-darkBlue text-white  uppercase border rounded-lg  font-medium text-sm hover:scale-95  duration-300 '
                                }>
                                {' '}
                                add
                            </button>
                        </form>
                        <StyledButton
                            text={'Cancel'}
                            handleClicking={changePath}
                            style={
                                'basis-[45%]  py-2 border-black '
                            }></StyledButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
