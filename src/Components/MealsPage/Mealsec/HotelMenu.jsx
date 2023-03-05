import React from "react"
import { Link } from "react-router-dom"
import { Context } from "../../../Context"
export default function HotelMenu(props){
    const{displayHotelDetails,hoteldetail}=React.useContext(Context)
    return(
        <div>
             <section className="Breakfast--places--results  d-flex flex-column gap-5">
                <Link to='*/hotel' className="link text-decoration-none" onClick={()=>displayHotelDetails(props)}>
                <article className="result-1 p-4">
                    <div className="d-flex gap-4 align-items-center hotel-list">
                        <img src={props.thumb} width='150' height='140'/>
                        <div className="hotel-desc d-flex flex-column gap-2">
                            <span className="hotel-name fw-bold">{props.name}</span>
                            <span className="fw-normal hotel-name2">{props.city_name},{props.locality}</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="food-desc d-flex-column">
                        <div className="desc-1 d-flex gap-5 p-1">
                            <span className="food-desc-1">Cusines:</span> 
                            <span  className="food-desc-2 mx-4">{props.Cuisine[0].cuisinename}, {props.Cuisine[1].cuisinename}</span>
                        </div>
                        <div className="desc-2 d-flex  gap-5 p-1">
                            <span className="food-desc-1">Cost for Two:</span>
                            <span  className="food-desc-2">₹{props.cost}</span>
                        </div>
                    </div>
                </article>
                </Link>
            </section>
        </div>
    )
}