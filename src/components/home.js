function Home() {
    return (

        <nav className="navbar">
            <div className="container">
                <div className="logo">logo</div>
                <ul className="nav">
                    <li className="toggle"><i class="fas fa-bars"></i></li>
                    <li className="item">
                        <a href="#">Breakfast</a>
                    </li>
                    <li className="item">
                        <a href="#">Lunch</a>
                    </li>
                    <li className="item">
                        <a href="#">Dinner</a>
                    </li>
                    <li className="item">
                        <a href="#">login</a>
                    </li>

                </ul>

            </div>
        </nav>


    );
}

export default Home;