// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (initialValues) => {
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    return [formValues, handleChange]
}