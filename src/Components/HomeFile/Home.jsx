import React from "react"
import Mealist from "./Mealist"
import Header from "../Header"
import { Link } from "react-router-dom";
import { Context } from "../../Context";
export default function Home(){
  const{menu,displayHotelDetails}=React.useContext(Context)
  const[reslist,setreslist]=React.useState(false)
  const[searchdata,setsearchdata]=React.useState([])
  const[searchfield,setsearchfield]=React.useState('')
  const uniqueCities = Array.from(new Set(menu.map((city) => city.city_name)));
  function handlereslist(){
    setreslist(prev=>!prev)
  }
  function handlesearchdata(e){
    const value = e.target.value
    const cityval=menu.filter((city)=>city.city_name===value)
    setsearchdata(cityval)
  }
  function handlesearchfield(e){
    setsearchfield(e.target.value)
    
  }
  console.log(searchfield)
  
// Mapping the restaurant items w.r to the locations
  const searchitems= searchdata.map((rest)=>{
    return(
      <Link to='/filterest/*/hotel' className="text-decoration-none " onClick={()=>displayHotelDetails(rest)} style={{color:"gray"}}>
      <div className="city-list d-flex justify-content-between py-2 px-5 align-items-center">
        <div>
          <h4 className="" style={{color:'#192F60',fontWeight:'bolder'}} >{rest.name}</h4>
          <span>{rest.locality}</span>
        </div>
         <img src={rest.thumb} width='80' className="search-img"/>
       </div>
      </Link>
    )
  })
    return(
        <>
        {/* <!-- MAIN SECTION --> */}
    {/* HEADER COMPONENT */}
    <Header/>
    
    {/* MAIN PAGE COMPONENT */}
    <main className="main d-grid">
        <div className='position-relative main--content text-center'>
            <h1 className="elogo">FLAVOURSOME!</h1>
            <span className="text-light main--logoname position-relative">Discover your new favorite dish.</span>
            <div className="form-outer d-flex">
                  <form className="form d-flex justify-content-center align-items-center">
                    {/* location field */}
                    <div className="form-input d-flex justify-content-center">
                      <select id="location"  onClick={handlesearchdata} style={{color:'#192F60',fontWeight:'normal'}}>
                        <option value="" selected>Please select your location</option>
                        {
                          uniqueCities.map((city)=>{
                            return(
                              <option value={city}  className='city'>{city}</option>
                            )
                          })
                        }
                      </select>
                    </div>

                    {/* restaurant data field */}
                    <div className="form-input">
                      <i className="fas fa-search search__icon" id="icon"></i>
                      <select type="text" name="restaurant" placeholder="Search for restaurants" onClick={handlereslist} onChange={handlesearchfield} value={searchfield}>
                        <option value="" style={{display:reslist?'block':'none',border:'none',zIndex:'-1'}}>Please select your location</option>
                      </select>
                    </div>
                  </form>
              </div>
              
               <div className="rest-container position-absolute" style={{display:reslist?'block':'none'}}>
                 <div>
                 {!searchdata.length?<p>Filter city and then check here</p>:searchitems}
                 </div>  
              </div>
        </div>
    </main>
    <Mealist/>

        </>
    )
}