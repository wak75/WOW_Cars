import React from "react"
import "./about_style.css"
import Intro from "./intro/intro"
import Top from "./top/top"
import Section from "./section/section"
import Footer from "../footer_component/footer_component"

const About = ()=>{
    return(
        <div>
            <Intro/>
            <Top/>
            <Section/>
            <Footer/>
        </div>
    )
}

export default About
