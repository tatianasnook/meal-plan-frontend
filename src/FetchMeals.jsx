import axios from "axios";

//GET
const getAllMeals = (setMeal) => {
    axios.get("https://meal-planner-fnnq.onrender.com")
    .then(({data}) => {console.log(data)
    setMeal(data)
    })
    .catch((error) => {console.log('Error fetching meals', error)})
}

//POST
const addMeal = (title, setTitle, setMeal) => {
    axios.post("https://meal-planner-fnnq.onrender.com/saveMeals", {title})
    .then(({data}) => {
        console.log(data)
        setTitle("")
        getAllMeals(setMeal)
    })
    .catch((error) => {console.log('Error adding meal', error)})
}

//PUT
const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
     axios.put("https://meal-planner-fnnq.onrender.com/editMeal", {_id: mealId, title})
    .then(({data}) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
    })
    .catch((error) => {console.log('Error editing meal', error)})
}

//DELETE
const deleteMeal = (_id, setMeal) => {
     axios.delete(`https://meal-planner-fnnq.onrender.com/deleteMeal/${_id}`)
    .then(({data}) => {
        console.log(data)
        getAllMeals(setMeal)
    })
    .catch((error) => {console.log('Error deleting meal', error)})
}

export {getAllMeals, addMeal, editMeal, deleteMeal};
