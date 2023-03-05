
import React from 'react';
import HotelMenu from './HotelMenu'
import { Context } from "../../../Context"
export default function MealFilter(){
    const {menu,fetchRestaurants,filter,setFilter,restaurants,displayHotelDetails}=React.useContext(Context)
    const[costvalue,setcostvalue]=React.useState('')
    const uniqueCities = Array.from(new Set(menu.map((city) => city.city_name)));
    const uniqueCuisine = Array.from(new Set(menu.map((item) => item.Cuisine[0].cuisinename)));
    const uniqueCostype= Array.from(new Set(menu.map((item)=>item.costype)))
    const filterdatas=restaurants.map((men)=>{
        return(
            <HotelMenu key={men._id}
            {...men}/>
        )
    })

    function handleSort(e) {
        const value = e.target.value;
        if (value === "lowtohigh") {
            restaurants.sort((a, b) => a.cost - b.cost);
            setFilter({...filter,cost:sort});
        } else if (value === "hightolow") {
            restaurants.sort((a, b) => b.cost - a.cost);
        }
      }


    

    return(
        <div>
            <div className="mealspage--section">
        <main className="filter-section">
            <h1 className="pt-5 px-4">{} places in {filter.city_name}</h1>
        <div className="d-flex  gap-4 pt-3 mb-5">
            <section className="Breakfast--places--filter  p-4"> 
            <h4 className="fw-semi-bold">Filters</h4>
            <form action="" className='filter-form d-grid gap-2'>
                
                {/* filter for locations */}

                <label for ='filter-loc' name="location" className="pt-2">Select Location</label>
                <select name="location"id="filter-location"className="p-2 w-100" value={filter.city_name}
                onChange={(e) =>setFilter({ ...filter, city_name: e.target.value })}>
                    {/* <option  onChange={()=>setFilter({...filter,city_name:e.target.value})}>Select Location</option> */}
                    {uniqueCities.map((city) => (
                    <option key={city} name={city} value={city}>
                        {city}
                    </option>
                    ))}
                    </select>

                {/* filters for Cuisine */}
                <div className="cuisine-sec pt-2">
                    <label for="food-type-cuisine" name="cuisine">Cuisine</label>
                    {uniqueCuisine.map((cuisinetype,i)=>{
                        return(
                            <div className="d-flex gap-2 pt-1">
                            <input type="radio" className="p-2" name={`${cuisinetype}`} value={`${cuisinetype}`} id={`${i+1}`}
                            onChange={(e) => {
                                const isChecked = e.target.checked;
                                const value = e.target.value;
                                const newCuisine = isChecked
                                  ? [...filter.cuisine, value]
                                  : '';
                                setFilter({ ...filter, cuisinename: newCuisine,page:filter.page =1 });
                              }}
                           />
                            <label for={`${cuisinetype}`}>{cuisinetype}</label>
                        </div>
                        )
                    })}
                </div>

                {/* filters for  Cost*/}
                <div className="cost pt-2">
                    <label for="food-type-cuisine" name="cost">Cost for two</label>
                    {
                        uniqueCostype.map((costy)=>{
                            return(
                            <div className="d-flex gap-2 pt-1">
                            <input type="radio" name={`${costy}`} value={`${costy}`}
                            onChange={(e) => {
                            const isChecked = e.target.checked;   
                            const value = e.target.value;
                            console.log(value)
                            const newCost = isChecked? 
                            [...filter.cost, value]
                            : '';
                            setFilter({ ...filter, costype: newCost ,page:filter.page=1});
                            }}/>
                            <label  for="cost-option">{costy}</label>
                            </div>
                            )
                        })
                    }
                </div>

                
                {/* filters for Sort*/}
                <div className="sort">
                    <label for="food-type-cuisine" name="sort">Sort</label>
                    <div className="d-flex gap-2 pt-1">
                        <input type="radio"  name="" value="lowtohigh" onChange={()=>setFilter({...filter,sort:filter.sort=1,page:filter.page=1})} />
                    <label for="cost-option">Prices Low to High</label>
                    </div>
                    <div className="d-flex gap-2 pt-1">
                    <input type="radio"  name="" value="hightolow" onChange={()=>setFilter({...filter,sort:filter.sort=-1})}/>
                    <label  for="cost-option">Prices High to Low</label>
                    </div>
                </div>
                <input type="submit" className="mt-5 p-3 submit-filter" value='Apply'/>
            </form>
            </section>


            {/* Menu section */}
            <div className='menu-details'>
            {restaurants.length===0?<h4 className='text-center d-flex align-items-center justify-content-center  filter-msg'>Filter restaurants for your preference</h4>:filterdatas}
            </div>
        </div>

        {/* Pagination */}
        <div className="position d-flex justify-content-center align-items-center">
        <nav aria-label="Page navigation example">
            <ul className="pagination  align-items-center">
              <li className={`page-item p-2 ${filter.page<=1?'disabled':''}`} onClick={() => setFilter({ ...filter, page: filter.page - 1 })}>
                <a className="page-link nav page-nav"><i class="fa-solid fa-chevron-left"></i></a>
              </li>
              {/* {filter.map(filter,index=>{
                return(
                    <li className="page-item p-2" onClick={()=>setFilter({...filter,page:index})}><a className="page-link nav page-nav" href="#">{index}</a></li>
                )
              })} */}
              <li className="page-item p-2" onClick={()=>setFilter({...filter,page:1})}><a className="page-link nav page-nav" href="#">1</a></li>
              <li className="page-item p-2" onClick={()=>setFilter({...filter,page:2})}><a className="page-link nav page-nav" href="#">2</a></li>
              <li className="page-item p-2" onClick={()=>setFilter({...filter,page:3})}><a className="page-link nav page-nav" href="#">3</a></li>
              <li className="page-item p-2" onClick={()=>setFilter({...filter,page:4})}><a className="page-link nav page-nav" href="#">4</a></li>
              <li className="page-item p-2" onClick={()=>setFilter({...filter,page:5})}><a className="page-link nav page-nav" href="#">5</a></li>
              <li className={`page-item p-2 ${restaurants.length<2?'disabled':''} `} onClick={() => setFilter({ ...filter, page: filter.page + 1 })}>
                <a className="page-link nav page-nav"><i class="fa-solid fa-chevron-right"></i></a>
              </li>
            </ul>
        </nav>
        </div>
        </main>
    </div>
        </div>
    )
}