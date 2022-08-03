import { useState } from "react";
import img1 from '../images/image1.png';
import img2 from '../images/image2.png';
import img3 from '../images/image3.png';
import img4 from '../images/image4.png';


function Home() {

    const [toggle, setToggle] = useState(false);

    const hamburgerMenu = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <nav className="navbar">
                <h3 className="logo">logo</h3>
                <h2 className="toggle"><i className={toggle ? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={hamburgerMenu}></i></h2>
                <ul className={toggle ? 'navToggled' : 'nav'} onClick={() => setToggle(false)}>
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
            <div className="ellipse">
                <img className="image1" src={img1} alt="" />
                <img className="image2" src={img2} alt="" />
                <img className="image3" src={img3} alt="" />
                <img className="image4" src={img4} alt="" />

            </div>




        </>



    );
}

export default Home;