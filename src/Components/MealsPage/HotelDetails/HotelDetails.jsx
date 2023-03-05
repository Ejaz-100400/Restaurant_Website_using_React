import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Orders from './Orders';
import Gallery from './Gallery';
import 'react-tabs/style/react-tabs.css';
import { Context } from '../../../Context';
export default function HotelDetails(){
    const {hoteldetail,itemmsg,additem}=React.useContext(Context)
    const localitem= localStorage.getItem('hoteldetail')
    const parsloc=JSON.parse(localitem)
    console.log(parsloc)
    const hotelelement =
            <>
            <div className={`cartitem-msg position-fixed pt-2`} style={{display:itemmsg?'block':'none'}}>
                <p>Added to cart</p>
            </div>
            <div className="hoteldetail-section position-relative" style={{backgroundImage:`url(${parsloc.thumb})`,minHeight:'50vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                {/* <img src={parsloc.thumb} alt="" /> */}
                <Gallery detail={parsloc} />
            </div>
            <div className="hotel-desc">
            <h1 className="pt-4">{parsloc.name}</h1>
            <div className="position-relative pt-5">
            <Tabs>
                <TabList>
                    <Tab><span className="tab-title">Overview</span></Tab>
                    <Tab><span className="tab-title">Contact</span></Tab>
                    <Orders detail={parsloc}/>
                    
                </TabList>
                <TabPanel className='d-flex flex-column gap-3 pt-3'>
                    <h2>About This Place</h2>
                    <div className="d-flex flex-column gap-3 pt-2">
                        <h4>Cuisine</h4>
                        <span>{parsloc.Cuisine[0].cuisinename},{parsloc.Cuisine[1].cuisinename}</span>
                    </div>
                    <div className="d-flex flex-column gap-3 pt-2">
                        <h4>Average Cost</h4>
                        <span>₹{parsloc.cost} for two people (approx.)</span>
                    </div>
                </TabPanel>
                <TabPanel className='d-flex flex-column gap-3 pt-3'>
                    <div>
                        <h4>Phone Number</h4>
                        <span className="text-danger">+91 114004566</span>
                    </div>
                    <div>
                        <h4>{parsloc.name}</h4>
                        <span className="">{parsloc.address}</span>
                    </div>
                </TabPanel>
            </Tabs>
            </div>
            </div>
            </>  
    return(
        <>
        <div className="hotel-detail-section container">
            {hotelelement}
        </div>
        </>

    )
}