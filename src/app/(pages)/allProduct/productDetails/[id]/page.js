'use client'
import Form from '@/app/_components/Form'
import Dropzone from '@/app/_components/Dropzone'
import { useEffect, useState } from 'react'
import RejectedImage from '@/app/_components/RejectedImage'
import AcceptedImage from '@/app/_components/AcceptedImage'
import ImagePreview from '@/app/_components/ImagePreview'
import Image from 'next/image'
import removeIcon from '@/app/_assets/remove.png'
import StyledButton from '@/app/_components/StyledButton'
import PopUpWithFunc from '@/app/_components/PopUpWithFunc'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useAuth } from '@/hooks/auth'
import Loader from '@/app/_components/Loader'
import {
    DeleteProduct,
    updateData,
    validateForm,
} from '@/app/_components/function'
import PopUp from '@/app/_components/PopUp'
function ProductDetails(props) {
    const user = useAuth()
    console.log(user)

    //state
    const [rejected, setRejected] = useState([])
    const [loader, setloader] = useState(false)
    const [buttonLoader, setButtonloader] = useState(true)

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

    //function send data to api

    //fetch product data

    useEffect(() => {
        setloader(true)
        const ProductData = fetch(
            `http://localhost:8000/api/product/${props.params.id}`,
        )
            .then(res => res.json())
            .then(formData => {
                setFormData(() => {
                    setloader(false)
                    return formData.product
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        if (deletd == true) {
            setTimeout(() => {
                router.push('/allProduct')
            }, 3000)
        }
    }, [deletd])

    //remove uploaded Image

    useEffect(() => {})

    const removeImage = () => {
        setFormData(e => {
            return { ...e, picture: '' }
        })
    }
    // remove rejected Image

    const removeRejected = name => {
        setRejected(files => files.filter(({ file }) => file.name !== name))
    }
    ///handle input

    const handleFormdata = e => {
        const { name, value } = e.target

        setFormData(e => ({
            ...e,
            [name]: value,
        }))
    }

    //use router for cancel button

    let router = useRouter()
    const handleClickingCancle = () => {
        router.push('/allProduct')
    }

    //form validation and send data
    const UpdateButton = e => {
        e.preventDefault()

        setFormValidate(validateForm(formData))

        if (formValidate.state) {
            updateData(props.params.id, setloader, setUpdated, formData)
        }
    }

    // handle delete button

    const handleDelteButton = e => {
        e.preventDefault()
        DeleteProduct(props.params.id, setloader, setDeletd)
    }

    return (
        <div className=" p-4 container m-auto">
            <div className="bg-white  flex  rounded-xl flex-col lg:flex-row min-h-[80vh]">
                {/* pop up when upload more than one image */}

                {deletd && <PopUp text={'product Deleted successfully'} />}
                {updated && <PopUp text={'product Updated successfully'} />}
                {loader && <Loader></Loader>}
                {/* pop up when form invalid */}
                {/* {!formValidate.state && (
                    <PopUpWithFunc
                        text={` please add ${formValidate.problem}`}
                        clickFunc={console.log('')}
                    />
                )} */}
                {/* {setFormValidate({
                            state: true,
                            problem: '',
                        }) */}
                {/* setUploadExceed(false) */}

                {/* {!uploadExceed.state && (
                    <PopUpWithFunc
                        text={`oops!! max one image`}
                        clickFunc={console.log('')}
                    />
                )} */}

                <Form
                    formData={formData}
                    formFunc={handleFormdata}
                    handleClickingCancle={handleClickingCancle}
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
                    <Dropzone
                        setUploadExceed={setUploadExceed}
                        setFiles={setFormData}
                        rejected={rejected}
                        setRejected={setRejected}
                    />
                    {(formData.picture != '' || rejected.length > 0) && (
                        <ul className="flex flex-col gap-3 bg-white mt-10   ">
                            <AcceptedImage
                                image={formData.picture}
                                title={formData.title}
                                removeFile={removeImage}></AcceptedImage>
                            <RejectedImage
                                rejected={rejected}
                                removeRejected={removeRejected}></RejectedImage>
                        </ul>
                    )}

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
                            handleClicking={handleClickingCancle}
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
