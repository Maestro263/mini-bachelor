import './homepageStyle.css';
import coffeegrounds from './images/coffeegrounds.jpg';
import coffeecar from './images/coffeecar.jpg';

const Homepage = () => {
    return (
        <div className="homepage">
            <h1>HOMECOFFEE</h1>
            <div className="part1">
                <img src={coffeecar} className="box1" alt="Coffeecar" />
                <div>
                    <h2>Who are we?</h2>
                    <p className="homepage-text">HomeCoffee is a coffee service, which brings the café lifestyle in to YOU backyard or home.
                        We put our clients in contact with coffeeshops or cafées which serves either some kind of coffee
                        or another drink which can be made on one of our “coffee-carts”. We have been doing this since
                        the pandemic startet two years ago, and it all started with us wanting to help people, who were
                        in the risk category, with still being able to experience the café-life. Contact us if you
                        would like to have a social gathering or want to spoil your workers with a nice cup of coffee.</p>
                </div>
            </div>
            <div className="part2">
                <img src={coffeegrounds} className="box2" alt="coffeegrounds" />
                <div>
                    <h2>What we stand for?</h2>
                    <p className="homepage-text">Our mission is to unite all kinds of social gatherings, on our customers terms.
                        We will do what we can to please our customers, both when it comes to services and when it comes to making
                        the freshest coffee. Our menu is simple, but still one of the best. If your order can be made with fresh
                        coffee beans, water and milk, then we can make in on our “coffee-cart”. We only use fresh coffee beans, and
                        if you have a special kind of bean that you like, contact us and we will do what we can to bring it to
                        you :)</p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;