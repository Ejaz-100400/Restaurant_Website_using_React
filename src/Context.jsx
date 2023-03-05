import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Context = React.createContext()

function ContextProvider({children}){
    // hotl menu 
    const [menu,setmenu]=React.useState([]);
    // Meal type
    const[meals,setmeals]=React.useState([]);
    // const[displaymeal,setdisplaymeal]=React.useState([]);

    const [hoteldetail,sethoteldetail]=React.useState([]);
    const location=useLocation();

    const[additem,setadditem]=React.useState([]);
    const[itemmsg,setitemmsg]=React.useState(false);
    // filterestaurant
    const [filter, setFilter] = React.useState({
      mealtype: '',
      city_name: '',
      cuisine: [],
      cost:[],
      location: '',
      page: 1,
      sort:1,
    });
    // form data
    const[user,setuser]=React.useState({
      name:'',
      email:'',
      password:'',
      phonenumber:'',
      address:''
    })
    //handle usedata
    const handleUser = (event) => {
      const updatedUser = { ...user, [event.target.name]: event.target.value };
      setuser(updatedUser);
    };


    // fetching meal type data
    React.useEffect(()=>{
        fetch('http://localhost:8050/')
        .then(response=>response.json())
        .then(data=>setmeals(data.result))
    },[])
    //filtering the hotel data using post req. axios
    const [restaurants, setRestaurants] = React.useState([]);

const fetchRestaurants = async () => {
  const response = await fetch('http://localhost:8050/filteres', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filter)
  });
  const data = await response.json();
  setRestaurants(data.restaurants);
}


React.useEffect(() => {
  fetchRestaurants();
}, [filter]);

    //fetch hotel details data
    React.useEffect(()=>{
        fetch('http://localhost:8050/Menu')
        .then(response=>response.json())
        .then(data=>setmenu(data.res))
    },[])
    // display menumeals on Filter section
    function displayMenuMeals(mealname){
        const restaurants = menu.filter(restaurant=>{
            return restaurant.type.some(type=>type.name === mealname);
        })
        setdisplaymeal(restaurants)
    }

    // display details of the restaurant
    function displayHotelDetails(hoteldetail){
        sethoteldetail(prevmenu=>[...prevmenu,hoteldetail]);
        localStorage.setItem('hoteldetail',JSON.stringify(hoteldetail));
    }

    // clearing the deatils of the restaurant in Hoteldetail component
    React.useEffect(()=>{
        if(location.pathname!='/filterest/*/hotel'){
            sethoteldetail(()=>[])
        }
    },[location.pathname])
     


    function addtoItem(item) { 
      setadditem(prevItems => {
        const existingItemIndex = prevItems.findIndex(i => i.itemname === item.itemname);
        if (existingItemIndex !== -1) {
          // Item already exists in cart, update its quantity
          const newItems = prevItems.map((i, index) => {
            if (index === existingItemIndex) {
              return { ...i, quantity: i.quantity + 1 };
            } else {
              return i;
            }
          });
          return newItems;
        } else {
          // Item not yet in cart, add it with quantity 1 
          return [...prevItems, { ...item, quantity: 1 }];
        }
      });
      setitemmsg(true)
      setTimeout((e)=>{
        setitemmsg(false)
        e.target.classList.add('fade')
      },2000)
    }


    function removeItem(item) {
      setadditem(prevItems => {
        const existingItemIndex = prevItems.findIndex(i => i.itemname === item.itemname);
        if (existingItemIndex !== -1) {
          const newItems = prevItems.map((i, index) => {
            if (index === existingItemIndex) {
              return { ...i, quantity: i.quantity - 1 };
            } else {
              return i;
            }
          }).filter(i => i.quantity > 0); // remove items with quantity 0
          return newItems;
        } else {
          return prevItems;
        }
      });
      // setitemmsg(false)
    }


    return(
        <Context.Provider value={{
          user,
          setuser,
          handleUser,
          hoteldetail,
          menu,
          fetchRestaurants,
          filter,
          setFilter,
          restaurants,
          displayHotelDetails,
          addtoItem,
          additem,
          removeItem,
          itemmsg
          }}>
            {children}
        </Context.Provider>
        )       
}
export {ContextProvider, Context}