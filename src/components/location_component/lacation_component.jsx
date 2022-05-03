import React,{Component} from "react"
import "./location_style.scss"


class Location extends Component{
    constructor(){
        super()


        this.state={

        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition((pos)=>{
            console.log(`Longitude:  ${pos.coords.latitude}`)
            console.log(`Lattitude: ${pos.coords.latitude}`)
        })
    }

}
