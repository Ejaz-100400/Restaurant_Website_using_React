import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Orders from './Orders';
import Gallery from './Gallery';
import 'react-tabs/style/react-tabs.css';
import { Context } from '../../../Context';
export default function HotelDetails(){
    const {hoteldetail,itemmsg,additem}=React.useContext(Context)
    const hotelelement =hoteldetail.map((detail)=>{
        return(
            <>
            <div className={`cartitem-msg position-fixed pt-2`} style={{display:itemmsg?'block':'none'}}>
                <p>Added to cart</p>
            </div>
            <div className="hoteldetail-section position-relative" style={{backgroundImage:`url(${detail.thumb})`,minHeight:'50vh',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                {/* <img src={detail.thumb} alt="" /> */}
                <Gallery detail={detail} />
            </div>
            <div className="hotel-desc">
            <h1 className="pt-4">{detail.name}</h1>
            <div className="position-relative pt-5">
            <Tabs>
                <TabList>
                    <Tab><span className="tab-title">Overview</span></Tab>
                    <Tab><span className="tab-title">Contact</span></Tab>
                    <Orders detail={detail}/>
                    
                </TabList>
                <TabPanel className='d-flex flex-column gap-3 pt-3'>
                    <h2>About This Place</h2>
                    <div className="d-flex flex-column gap-3 pt-2">
                        <h4>Cuisine</h4>
                        <span>{detail.Cuisine[0].cuisinename},{detail.Cuisine[1].cuisinename}</span>
                    </div>
                    <div className="d-flex flex-column gap-3 pt-2">
                        <h4>Average Cost</h4>
                        <span>₹{detail.cost} for two people (approx.)</span>
                    </div>
                </TabPanel>
                <TabPanel className='d-flex flex-column gap-3 pt-3'>
                    <div>
                        <h4>Phone Number</h4>
                        <span className="text-danger">+91 114004566</span>
                    </div>
                    <div>
                        <h4>{detail.name}</h4>
                        <span className="">{detail.address}</span>
                    </div>
                </TabPanel>
            </Tabs>
            </div>
            </div>
            </>  
        )
    })
    return(
        <>
        <div className="hotel-detail-section container">
            {hotelelement}
        </div>
        </>

    )
}