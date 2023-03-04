import Login from "./HomeFile/Login"
export default function Header(){
    return(
        <header className="Header position-absolute text-light">
            <div className="log container-fluid d-flex justify-content-end align-items-center p-4">
                <Login/>
            </div>
        </header>
    )
}