import React from "react"
import "./date_time_style.scss"

const DateTime = ()=>{

    
    return(
       
            <div>
                <div className="date">
                    <label className="date-label"> Enter thr Booking Date:  </label>
                    <input className="date-picker" type="date" for="booking date" required/>
                </div>
                <div className="time">
                <label className="time-label"> Enter thr Booking time: </label>
                    <input className="time-picker" type="time" for="booking date" required/>
                </div>
            </div>          
    )
}

export default DateTime