import { useCallback, useEffect, useState } from 'react'
import { opensans } from '@/font'

import { FileUploader } from 'react-drag-drop-files'
import axios from '@/lib/axios'

const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG']

function Dropzone({ handleFormChange, urlPath }) {
    const [file, setFile] = useState(null)

    const uploadFile = async f => {
        let formData = new FormData()

        //Adding files to the formdata
        formData.append('image', f)

        axios({
            // Endpoint to send files
            url: urlPath,
            method: 'POST',
            // Attaching the form data
            data: formData,
        })
            .then(res => handleFormChange(res.data.image)) // Handle the response from backend here
            .catch(err => console.log(err)) // Catch errors if any
    }

    useEffect(() => {
        if (file) {
            uploadFile(file)
        }
    }, [file])

    return (
        <FileUploader
            classes="min-h-[100px] !min-w-[100%] flex flex-col !pt-4 "
            label=" drag your file here"
            handleChange={setFile}
            name="file"
            types={fileTypes}
        />
    )
}

export default Dropzone
