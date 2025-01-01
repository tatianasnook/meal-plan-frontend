import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

const MyMeals = ({ text, updatingInput, deleteMeal }) => {
  return (
    <div>
        <p>{ text }</p>
        <AiFillEdit onClick={updatingInput}></AiFillEdit>
        <AiFillDelete onClick={deleteMeal}></AiFillDelete>
    </div>
  )
}

export default MyMeals;
