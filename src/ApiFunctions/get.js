import axios from '@/lib/axios'
const getReviews = async (id = null) => {
    const reviews = await axios
        .get(`api/review${id ? '/' + id : ''}`)
        .then(res => {
            return res
        })

    return reviews
}
export { getReviews }
