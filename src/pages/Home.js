import Banner from "../components/Banner";
import Hero from "../components/Hero";
import {Link} from 'react-router-dom';
import Services from "../components/Services";

const Home = () => {
    return ( 
        <>
        <Hero>
            <Banner title='luxurious rooms' subtitle='deluxe rooms startinf at $299'>
                <Link to='/rooms' className='btn-primary'>
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        </>
     );
}
 
export default Home;