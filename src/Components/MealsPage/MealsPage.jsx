import MealHeader from "./MealHeader"
import MealFilter from "./Mealsec/MealFilter"
import HotelDetails from "./HotelDetails/HotelDetails";
import { Route,Routes } from 'react-router-dom';
export default function MealsPage() {
return(
    <>
    <MealHeader/>
    <Routes>
        <Route  exact path='/*' element={<MealFilter/>}/>
        <Route  exact path='*/hotel' element={<HotelDetails/>}/>
    </Routes>
    </>
)
}