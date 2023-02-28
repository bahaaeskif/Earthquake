
import Feeds from './feeds/feeds'
import EarthQuake from './earthquakes/earthquake';

const Home = ({ quakes }) => {
    return (
        <>
            <Feeds />
            <EarthQuake quakes={quakes} />
        </>
    );
}

export default Home;