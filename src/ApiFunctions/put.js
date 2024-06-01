import axios from '@/lib/axios'

// update order data
const updateData = async (id, setloader, setUpdated, formData) => {
    try {
        setloader(true)
        await axios.put(`/api/product/${id}`, formData).then(() => {
            setloader(false)
            setUpdated(true)
        })
    } catch (err) {
        throw new Error(err)
    }
}

//update order state
const updateOrderData = async (id, state, setLoader) => {
    setLoader(true)
    axios
        .put(`api/order/${id}`, {
            status: state,
        })
        .then(() => setLoader(false))
        .catch(err => {
            throw new err()
        })
}
const updateContactData = async (id, data, setLoader, setUpdated) => {
    setLoader(true)
    axios
        .put(`api/user/contact/${id}`, data)
        .then(() => {
            setLoader(false)
            setUpdated(true)
        })
        .catch(err => {
            throw new err()
        })
}

export { updateData, updateOrderData, updateContactData }
