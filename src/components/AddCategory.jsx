import { useState } from 'react'

export const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState('')


    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length < 1) return
        setCategories([inputValue, ...categories])
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}
