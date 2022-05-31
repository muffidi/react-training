import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Detail = () => {
    const {idMeal} = useParams();
    const [detailMeals, setDetailMeals] = useState(null);

    const fetchData = async (idMeal) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const result = await data.json();
        setDetailMeals(result.meals);
    }

    useEffect(() => {
        fetchData(idMeal);
    }, [idMeal])


  return (
    <div>
        <h3>Details</h3>
        <p>{idMeal}</p>
        {
            detailMeals && detailMeals.length > 0 ? (
                <div style={{display: 'flex', flexWrap:'wrap'}}>
                    {
                        detailMeals.map(meal => (
                            <div style= {{ padding: '16px', border: '1px dashed #dddddd', backgroundColor: 'whitesmoke', borderRadius: '8px', boxShadow: '5px 5px 2px #aaaaaa', textDecoration: 'none', color: 'black', maxWidth: '800px', margin: '0 auto'}} key={meal.idMeal}>
                            <p className="foodtitle">{meal.strMeal}</p>
                            <p>{meal.strInstructions}</p>
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
  )
}

export default Detail