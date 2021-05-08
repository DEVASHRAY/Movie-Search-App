import React from "react"
import NoData from "../NoData.png"
import BackBtn from "./BackBtn"

const HomePageImg = () => {
    return(
        <>
        <div className = "HomePageImg">
        <img src = {NoData} alt = "No Movies Found.png" />
        <BackBtn/>
        </div>
       
        </>
    )
}

export default HomePageImg