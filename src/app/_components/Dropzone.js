import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { opensans } from '@/font'
function Dropzone({ setFiles, setRejected, setUploadExceed }) {
    // const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    //     if (acceptedFiles?.length) {
    //         setFiles(previousFiles => {
    //             if (previousFiles.length == 1) {
    //                 setUploadExceed(true)
    //                 return previousFiles
    //             } else {
    //                 return [
    //                     ...previousFiles,
    //                     ...acceptedFiles.map(file => {
    //                         return Object.assign(file, {
    //                             preview: URL.createObjectURL(file),
    //                         })
    //                     }),
    //                 ]
    //             }
    //         })
    //     }

    //     if (rejectedFiles?.length) {
    //         setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
    //     }
    // }, [])

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (acceptedFiles?.length) {
            setFiles(formdata => {
                if (formdata.picture != '') {
                    setUploadExceed(true)
                    return { ...formdata }
                } else {
                    return {
                        ...formdata,
                        picture: Object.assign(acceptedFiles[0], {
                            preview: URL.createObjectURL(acceptedFiles[0]),
                        }),
                    }
                }
            })
        }

        if (rejectedFiles?.length) {
            setRejected(previousFiles => [...previousFiles, ...rejectedFiles])
        }
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': [],
        },
        maxSize: 1024 * 1000,
        onDrop,
    })

    // useEffect(() => {
    // 	// Revoke the data uris to avoid memory leaks
    // 	return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    // }, [files]);

    return (
        <form className=" cursor-pointer">
            <div
                {...getRootProps({
                    className: `w-full border-2 border-black min-h-[164px] flex p-3 items-end justify-center border-dashed rounded-lg relative bedfore:content-[''] before:w-16  before:h-16 before:bg-uploasImg before:bg-contain before:bg-no-repeat  before:absolute before:top-5 ${opensans.className}`,
                })}>
                <input {...getInputProps()} />

                <p className="max-w-[65%]  text-center text-seconderyItemColor  text-sm ">
                    Drop your imager here, or browse Jpeg, png are allowed
                </p>
            </div>
        </form>
    )
}

export default Dropzone
