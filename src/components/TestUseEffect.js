import React, { useEffect, useState } from 'react'

const TestUseEffect = () => {

    const [meals, setMeals] = useState(null);
    const [selectedCat, setSelectedCat] = useState('Seafood')

    console.log('meals', meals);

    const selectHandle = (category) => {
        setSelectedCat(category);
    }

    const fetchData = async (category) => {
        const data = await fetch('www.themealdb.com/api/json/v1/1/filter.php?c=${category}');
        const result = await data.json();
        setMeals(result.meals);
    }

    useEffect(() => {
        fetchData(selectedCat);
    }, [selectedCat])

  return (
    <div>
        <h3>TestUseEffect</h3>
        <button onClick={() => selectHandle('Beef')}>
            Beef
        </button>

        <button onClick={() => selectHandle('Seafood')}>
            Seafood
        </button>
        {
            meals && meals.length > 0 ? (
                <div style={{display: 'flex', flexWrap:'wrap'}}>
                    {
                        meals.map(meal => (
                            <div style= {{ margin: '16px'}} key={meal.idMeal}>
                            <p>{meal.strMeal}</p>
                            <img style ={{width: '100px', height: '100px'}}
                            src={meal.strMealThumb} alt={meal.strMeal} />
                            </div>
                            ))
                    }
                </div>
            ) : (
                <p>Loading</p>
            )
        }
                    
    </div>
  )}

  export default TestUseEffect