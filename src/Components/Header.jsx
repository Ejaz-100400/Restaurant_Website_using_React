import Login from "./HomeFile/Login"
export default function Header(){
    return(
        <header className="Header position-absolute text-light">
            <div className="log container-fluid d-flex justify-content-end align-items-center p-4">
                <Login/>
                <button className="login-btn btn p-3 w-100 text-light">Create an account</button>
            </div>
        </header>
    )
}