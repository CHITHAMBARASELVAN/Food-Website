import Image1 from './assets/image1.png'
import Logo from './assets/icon.png'
import './Food.css'
function Food() {
    return(
        <body>
            
        

        <section id="home">
        <nav>
            <div className="logo" data-aos="zoom-in"data-aos-duration="1500">
                <img src={Logo} alt="" />
            </div>
            <ul>
                <li data-aos="fade-up"data-aos-duration="1500" data-aos-delay="100"><a href="#">Home</a></li>
                <li data-aos="fade-up"data-aos-duration="1500" data-aos-delay="200"><a href="#">About</a></li>
                <li data-aos="fade-up"data-aos-duration="1500" data-aos-delay="300"><a href="#">Menu</a></li>
                <li data-aos="fade-up"data-aos-duration="1500" data-aos-delay="400"><a href="#">Gallery</a></li>
                <li data-aos="fade-up"data-aos-duration="1500" data-aos-delay="500"><a href="#">Review</a></li>
                <li data-aos="fade-up"data-aos-duration="1500" data-aos-delay="600"><a href="#">Order</a></li>


            </ul>
            <div className="icon">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i className="fa-solid fa-heart"></i>
            </div>
        </nav>
        <div className="main">
            <div className="main-text">
                <h1 data-aos="fade-left"data-aos-duration="1500" data-aos-delay="800">Get Fresh <span>Food</span> in a Easy Way </h1>
            </div>
            <div className="main-image" data-aos="zoom-in"data-aos-duration="3000">
                <img src={Image1} alt="" />
            </div>
        </div>

        <div className="main-btn" data-aos="fade-in"data-aos-duration="1500" data-aos-delay="1000">
            <a href="#">Order Now</a>
        </div>

        <p data-aos="fade-right"data-aos-duration="1500" data-aos-delay="1000">A hamburger or burger is an American fast food. It's a type of sandwich with a patty of cooked ground meat between the two halves of a bun. Tomatoes, onions, cheese, salad and dips may also be added. The hamburger may be eaten without a knife and fork.</p>
    </section>
    </body>
   
    );
}

export default Food