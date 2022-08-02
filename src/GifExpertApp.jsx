import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    return (
        <>
            {/*Title */}
            <h1>GifExpertApp</h1>

            {/*Input */}
            {/*Gifs list */}
            <AddCategory setCategories={setCategories} categories={categories} />
            <ol>
                {categories.map((category, index) => <li key={index}>{category}</li>)}
            </ol>
            {/*Gif item */}
        </>
    )
}
