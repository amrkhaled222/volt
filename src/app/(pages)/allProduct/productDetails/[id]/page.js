'use client'
import Form from '@/app/_components/Form'
import Dropzone from '@/app/_components/Dropzone'
import { useEffect, useState } from 'react'
import RejectedImage from '@/app/_components/RejectedImage'
import AcceptedImage from '@/app/_components/AcceptedImage'
import ImagePreview from '@/app/_components/ImagePreview'
import StyledButton from '@/app/_components/StyledButton'
import { useRouter } from 'next/navigation'
import removeIcon from '@/app/_assets/remove.png'
import Loader from '@/app/_components/Loader'
import {
    DeleteProduct,
    updateData,
    validateForm,
} from '@/app/_components/function'
import PopUp from '@/app/_components/PopUp'
import axios from '@/lib/axios'
import Image from 'next/image'
function ProductDetails(props) {
    let router = useRouter()

    //state
    const [rejected, setRejected] = useState([])
    const [loader, setloader] = useState(false)
    const [query, setquery] = useState('')
    //validate form and show propiate massege
    const [formValidate, setFormValidate] = useState({
        state: true,
        problem: '',
    })

    //prvent more than one Image

    const [uploadExceed, setUploadExceed] = useState(false)

    const [deletd, setDeletd] = useState(false)

    const [updated, setUpdated] = useState(false)

    //intialize form data

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category_id: '',
        price: '',
        picture: '',
    })

    const redirectUser = () => {
        router.push('/allProduct')
    }

    const getProductData = async () => {
        setloader(true)
        try {
            await axios.get(`api/product/${props.params.id}`).then(res => {
                setFormData(res.data.product)

                setloader(false)
            })
        } catch (err) {
            throw new Error(err)
        }
    }

    //remove uploaded Image

    // remove rejected Image

    const handleFormdata = e => {
        const { name, value } = e.target

        setFormData(e => ({
            ...e,
            [name]: value,
        }))
    }

    //use router for cancel button

    //form validation and send data
    const UpdateButton = e => {
        e.preventDefault()
        setFormValidate(validateForm(formData))
        if (formValidate.state) {
            setquery('update')
        }
    }

    // handle delete button

    const handleDelteButton = e => {
        e.preventDefault()
        setquery('delete')
    }

    const takepic = inputPic => {
        setFormData(e => {
            return { ...e, picture: inputPic }
        })
    }

    useEffect(() => {
        getProductData()
    }, [])

    useEffect(() => {
        if (query == 'delete') {
            DeleteProduct(props.params.id, setloader, setDeletd)
        }

        if (query == 'update') {
            updateData(props.params.id, setloader, setUpdated, formData)
        }
    }, [query])

    //redirect user after update or delete
    useEffect(() => {
        if (deletd == true || updated == true) {
            setTimeout(() => {
                redirectUser()
            }, 3000)
        }
    }, [deletd, updated])

    return (
        <div className=" p-4 container m-auto">
            <div className="bg-white  flex  rounded-xl flex-col lg:flex-row min-h-[80vh]">
                {deletd && <PopUp text={'product Deleted successfully'} />}
                {updated && <PopUp text={'product Updated successfully'} />}
                {loader && <Loader></Loader>}
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

                <Form
                    formData={formData}
                    formFunc={handleFormdata}
                    setfrom={setFormData}
                />
                <div className=" flex flex-col gap-5 lg:basis-[41%] p-4">
                    <ImagePreview
                        picture={formData.picture}
                        title={formData.title}></ImagePreview>

                    <h2 className=" capitalize text-xl font-semibold">
                        {' '}
                        product gallery
                    </h2>
                    <Dropzone handleFormChange={takepic} />

                    <div className="flex  md:justify-between justify-center  flex-col md:flex-row gap-2 ">
                        <div className=" md:basis-[66%] flex gap-2  justify-between flex-col md:flex-row  ">
                            <button
                                onClick={UpdateButton}
                                className={
                                    ' w-full py-2  text-white  uppercase border bg-black rounded-lg  font-medium text-sm hover:scale-95  duration-300 '
                                }>
                                {' '}
                                update
                            </button>
                            <button
                                onClick={handleDelteButton}
                                className={
                                    ' w-full py-2 bg-darkBlue text-white  uppercase border rounded-lg  font-medium text-sm hover:scale-95  duration-300 '
                                }>
                                {' '}
                                delete
                            </button>
                        </div>
                        <StyledButton
                            text={'Cancel'}
                            handleClicking={redirectUser}
                            style={
                                'basis-[33%]  py-2 border-black '
                            }></StyledButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
