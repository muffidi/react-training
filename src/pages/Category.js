import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Category = () => {

    const [meals, setMeals] = useState(null);
    const [selectedCat, setSelectedCat] = useState('Seafood')

    console.log('meals', meals);

    const selectHandle = (category) => {
        setSelectedCat(category);
    }

    const fetchData = async (category) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const result = await data.json();
        setMeals(result.meals);
    }

    useEffect(() => {
        fetchData(selectedCat);
    }, [selectedCat])

  return (
    <div className='container-cat'>
        <h3>Category</h3>
        <button onClick={() => selectHandle('Beef')}>
            Beef
        </button>

        <button onClick={() => selectHandle('Seafood')}>
            Seafood
        </button>
        {
            meals && meals.length > 0 ? (
                <div style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(6, 1fr)'}}>
                    {
                        meals.map(meal => (
                            <Link style= {{ padding: '16px', border: '1px dashed #dddddd', backgroundColor: 'whitesmoke', borderRadius: '8px', boxShadow: '5px 5px 2px #aaaaaa', textDecoration: 'none', color: 'black', fontWeight: '700'}} to={`/detail/${meal.idMeal}`} key={meal.idMeal}>
                            <img style ={{width: '100%', height: 'auto'}}
                            src={meal.strMealThumb} alt={meal.strMeal} />
                             <p>{meal.strMeal}</p>
                            </Link>
                            ))
                    }
                </div>
            ) : (
                <p>Loading</p>
            )
        }
                    
    </div>
  )}

  export default Category