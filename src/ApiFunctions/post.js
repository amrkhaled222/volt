import axios from '@/lib/axios'

// function to send data to server
const sendData = async (setDataSent, formData, url) => {
    try {
        await axios.post(url, formData).then(res => {
            if (res.status) {
                setDataSent(true)
            }
        })
    } catch (err) {
        throw new Error(err)
    }
}

export { sendData }
