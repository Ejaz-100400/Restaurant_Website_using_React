import { Link } from "react-router-dom"
import Login from "../HomeFile/Login"
export default function MealHeader(){
    return(
        <div className="position-fixed meal-head w-100" id='header-mealspage'>
            <header className="meal-header d-flex justify-content-between p-3">
                <Link className="text-decoration-none" to='/'>
                <span className="logo-e bg-white">e!</span>
                </Link>
                <Login/>
            </header>
        </div>
    )
}