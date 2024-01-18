import React from "react";
import profile from "../../assets/profile.png";
import TeamInner from "./TeamInner";
import Heading from "../../UI/Heading";


const data = [
    {
        id : 1,
        image : profile,
        title : "John Doe",
        designation : "Product Designer"
    },
    {
        id : 2,
        image : profile,
        title : "John Doe",
        designation : "Product Designer"
    },
    {
        id : 3,
        image : profile,
        title : "John Doe",
        designation : "Product Designer"
    },
    {
        id : 4,
        image : profile,
        title : "John Doe",
        designation : "Product Designer"
    },
    {
        id : 5,
        image : profile,
        title : "John Doe",
        designation : "Product Designer"
    },
    {
        id : 6,
        image : profile,
        title : "John Doe",
        designation : "Product Designer"
    },
    {
        id : 7,
        image : profile,
        title : "John Doe",
        designation : "Product Designer"
    },
    {
        id : 8,
        image : profile,
        title : "John Doe",
        designation : "Product Designer"
    }
]

const Team = () =>{
    return(
        <div>
        <div className="">
            <Heading heading = "Team"/>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
                {data.map(team => <TeamInner key = {team.id} image = {team.image} title = {team.title} description = {team.designation}/>)}  
            </div>
        </div>
        </div>
    )
}
export default Team;