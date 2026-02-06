// src/pages/Home.jsx
import HeroImg from '../components/sections/hero-img'
import AboutUs from '../components/sections/about-us'
import FeaturedProducts from '../components/sections/featured-product'
import Customers from '../components/sections/customers'
import Incentive from '../components/sections/incentive'
import Subscription from '../components/sections/subscription'

function Home() {
    return (
        <main>

            <section id="home">
                <HeroImg />
            </section>

            <section id="about">
                <AboutUs />
            </section>

            <section id="featured">
                <FeaturedProducts />
            </section>

            <section id="customers">
                <Customers />
            </section>

            <section>
                <Incentive />
            </section>

            <section id="subscription">
                <Subscription />
            </section>

        </main>
    )
}

export default Home;