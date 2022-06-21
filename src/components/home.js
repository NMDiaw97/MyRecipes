import { useState } from "react";


function Home() {
   
    const [toggle, setToggle] = useState(false);

    const hamburgerMenu = () => {
        setToggle(!toggle)
    }
   
    return (
        <nav className="navbar">
            <h3 className="logo">logo</h3>
            <h2 className="toggle"><i className={toggle ? 'fas fa-times' : 'fas fa-bars'} onClick={hamburgerMenu}></i></h2>
                <ul className={toggle? 'navToggled': 'nav'}>
                    <li className="item">
                        <a href="/accueil">Breakfast</a>
                    </li>
                    <li className="item">
                        <a href="/accueil">Lunch</a>
                    </li>
                    <li className="item">
                        <a href="/accueil">Dinner</a>
                    </li>
                    <li className="item">
                        <a href="/accueil">login</a>
                    </li> 
                </ul>
           
        </nav>


    );
}

export default Home;