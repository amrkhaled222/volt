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
import { useRouter } from 'next/navigation'
import axios from 'axios'

function ProductDetails(props) {
    const [rejected, setRejected] = useState([])

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

    // send data to api
    const sendData = async () => {
        try {
            console.log(formData)
            await axios.post(
                `http://localhost:8000/api/product/${props.params.id}`,
                formData,
            )
        } catch (err) {
            console.log(err)
        }
    }

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
    const AddButton = e => {
        e.preventDefault()
        for (let key in formData) {
            //if there is lake in data make popup for user till him complete data
            if (formData[key]?.length == 0 || formData[key] == null) {
                if (
                    key == 'created_at' ||
                    key == 'best_seller' ||
                    key == 'updated_at'
                ) {
                    continue
                }
                setFormValidate({ state: false, problem: `${key}` })
                return
            }
        }

        sendData()
    }

    return (
        <div className=" p-4 container m-auto">
            <div className="bg-white  flex  rounded-xl flex-col lg:flex-row min-h-[80vh]">
                {/* pop up when upload more than one image */}
                {uploadExceed && (
                    <div
                        className={`   w-full h-full bg-overlay absolute top-50 z-10 left-0 top-0 flex justify-center items-center`}>
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
                        className={`   w-full h-full bg-overlay absolute top-50 z-10 left-0 top-0 flex justify-center items-center`}>
                        <div className="flex w-[300px] lg:w-1/3 md:1/2  capitalize     h-30  justify-center items-center p-16 relative  rounded-lg bg-white font-bold ">
                            please add {formValidate.problem}
                            <button
                                onClick={() => {
                                    setFormValidate({
                                        state: true,
                                        problem: '',
                                    })
                                }}
                                className="w-8 h-8 absolute -right-3 -top-3 z-20">
                                <Image
                                    src={removeIcon}
                                    alt="removeIcon"></Image>
                            </button>
                        </div>
                    </div>
                )}

                <Form
                    formData={formData}
                    formFunc={handleFormdata}
                    handleClickingCancle={handleClickingCancle}
                    AddButton={AddButton}
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
                                removeFile={removeImage}></AcceptedImage>
                            <RejectedImage
                                rejected={rejected}
                                removeRejected={removeRejected}></RejectedImage>
                        </ul>
                    )}

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
                            handleClicking={handleClickingCancle}
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
