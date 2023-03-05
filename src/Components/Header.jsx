import Login from "./HomeFile/Login"
export default function Header(){
    return(
        <header className="Header position-absolute text-light">
            <div className="log  d-flex  align-items-center p-4 position-relative">
                <Login/>
            </div>
        </header>
    )
}