import './earthquake.css'
import { useEffect, useState } from 'react';

import { calcTime } from '../../utilties/time';
import { styleBox } from '../../utilties/style';
import Earthquakefeed from './earthQuakeFeed';
import Spinner from '../common/spinner/spinner';
import http from '../../utilties/http';
import Alert from '../common/alert/alert';
import Btnview from './btnview/btn';

const EarthQuake = () => {
    const [colorAlert, setColorAlert] = useState('text-green-700 bg-green-100');
    const [quakes, setQuakes] = useState([]);

    const [isAlertVisible, setIsAlertVisible] = useState(true);

    const [isToggleview, setIsToggleview] = useState(false);

    setTimeout(() => {
        setIsAlertVisible(false);
    }, 3000);

    useEffect(() => {
        const getData = async () => {

            const { data } = await http.get("https://api.orhanaydogdu.com.tr/deprem/kandilli/live");

            if (data.httpStatus === 200) {
                setQuakes(data.result);
            }
        }
        getData();
    }, []);

    const hundelClick = () => {
        isToggleview === false ? setIsToggleview(true) : setIsToggleview(false);
    }
    let quakesVar = quakes;
    quakesVar = isToggleview === true ? quakes.slice(0, 30) : quakes.slice(0, 20);
    return (
        <div className=' earthquake__EarthQuake-container p-5 pt-0'  >
            {quakesVar.length !== 0 && isAlertVisible ? <Alert /> : null}
            {quakesVar.length !== 0 ? quakesVar.map((quake) => {
                let away = calcTime(quake);
                let color = styleBox(quake);
                return <Earthquakefeed away={away} color={color} quake={quake} key={quake.earthquake_id} />
            }) : <Spinner />}
            {quakesVar.length !== 0 ? <Btnview hundelClick={hundelClick} isToggleview={isToggleview} /> : null}
        </div>
    );
}

export default EarthQuake;