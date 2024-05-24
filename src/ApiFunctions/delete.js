import axios from '@/lib/axios'

// delete product from database
const DeleteProduct = async (id, setloader, setDeletd) => {
    try {
        setloader(true)
        await axios.delete(`/api/product/${id}`).then(() => {
            setloader(false)
            setDeletd(true)
        })
    } catch (err) {
        throw new Error(err)
    }
}

export { DeleteProduct }
