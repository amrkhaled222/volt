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

export { validateForm }
