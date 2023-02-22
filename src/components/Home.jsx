
import Feeds from './feeds/feeds'
import EarthQuake from './earthquakes/earthquake';

const Home = () => {
    return (
        <>
            <Feeds />
            <EarthQuake />
        </>
    );
}

export default Home;