import axios from 'axios'
const updateData = async (id, setloader, setUpdated, formData) => {
    try {
        setloader(true)
        await axios
            .put(`http://localhost:8000/api/product/${id}`, formData)
            .then(() => {
                setloader(false)
                setUpdated(true)
            })
    } catch (err) {
        throw new Error(err)
    }
}

const DeleteProduct = async (id, setloader, setDeletd) => {
    try {
        setloader(true)
        await axios
            .delete(`http://localhost:8000/api/product/${id}`)
            .then(() => {
                setloader(false)
                setDeletd(true)
            })
    } catch (err) {
        throw new Error(err)
    }
}

const validateForm = formData => {
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

            return { state: false, problem: key }
        }
    }
    return { state: true, problem: '' }
}

export { updateData, DeleteProduct, validateForm }
