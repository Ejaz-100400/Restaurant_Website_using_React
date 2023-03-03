import { Link } from "react-router-dom"
export default function MealHeader(){
    return(
        <div className="position-fixed meal-head w-100" id='header-mealspage'>
            <header className="meal-header d-flex justify-content-between p-3">
                <Link className="text-decoration-none" to='/'>
                <span className="logo-e bg-white">e!</span>
                </Link>
                <div className="login-section-mealheader d-flex gap-3 align-items-center">
                    <span className="text-light meal-login">Login</span>
                    <button className="p-2 create-btn-meal login-btn">Create Account</button>
                </div>
            </header>
        </div>
    )
}