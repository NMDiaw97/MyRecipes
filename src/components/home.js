import { useState } from "react";

const Item = (props) =>{
    const itemList = props.items.map((skill)=> <li className="item" key={skill}>{skill}</li>)
    return itemList
}

function Home() {
    return (

        <nav className="navbar">
                <ul className="nav">
                    <li className="toggle"><i className="fas fa-bars"></i></li>
                    <li className="logo">
                        <a href="/accueil">logo</a>
                    </li>
                    <Item items={['Breakfast','Lunch','Dinner','login']}/>
                </ul>
           
        </nav>


    );
}

export default Home;