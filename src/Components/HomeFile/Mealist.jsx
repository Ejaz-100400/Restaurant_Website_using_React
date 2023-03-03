import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
export default function Mealist(){
    const [widgets,setwidgets]=React.useState([]);
    const{filter,setFilter}=React.useContext(Context)
    React.useEffect(()=>{
        widgetitems();
    },[])
    const widgetitems= async () =>{
        const {data} = await axios.get('http://localhost:8050')
        setwidgets(data.result);
    }
    function displayFilterMeals(mealname){
        const restaurants = menu.filter(restaurant=>{
            return restaurant.type.some(type=>type.name === mealname);
            })
            setFilter({...filter,mealtype:restaurants})
            console.log(restaurants)
    }

    return(
    <section className="search--restaurant--section p-4 position-relative">
        <span className="text-left search--title">Quick Searches</span>
        <h5  className="text-left search--context">Discover restaurants by type of meal</h5>
        <div class="food--categ--search pt-5 d-flex">
        
        {widgets.map(widget=>{
            return(
                <>
                <Link to={`filterest/${widget.name}`} key={widget._id} className='text-decoration-none food--item' onClick={()=>displayFilterMeals(widget.name)}>
                    <div class="food--categ--item d-flex">
                        <div class="food--categ--img">
                            <img src={widget.image} width="160" height="160px"/>
                        </div>
                        <div class="food--categ--context p-3">
                            <span class="food--categ--title">{widget.name}</span>
                            <p>{widget.content}</p>
                        </div>
                    </div>
                </Link>
               
                </>
            )
        })}
        </div>
    </section>
    )
}