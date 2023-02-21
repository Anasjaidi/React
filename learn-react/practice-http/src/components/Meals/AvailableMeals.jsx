import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import {useEffect, useState} from "react";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'n',
        description: '1',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await fetch("https://react-http-54af6-default-rtdb.firebaseio.com/meals.json");
            const data = await res.json();

            const loaded_meals = []

            for (let key in data) {
                loaded_meals.push({
                    id: key,
                    name: data[key].name,
                    price: data[key].price,
                    description: data[key].description,
                })
            }
            console.log(loaded_meals)
            setMeals(loaded_meals)
            setIsLoading(false)
        })()
    }, [])

    if (isLoading) {
        return (
            <p className={classes.loading}>
                Loading...
            </p>
        )
    }

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
