import './earthquake.css'
import { useEffect, useState } from 'react';

// FUNCTIONALLY
import { styleBox } from '../../utilties/style';
import { calcTime } from '../../utilties/time';
import http from '../../utilties/http';
// common components
import Spinner from '../common/spinner/spinner';
import Alert from '../common/alert/alert';
import Btnview from './btnview/btn';

import Earthquakefeed from './earthQuakeFeed';

import Select from 'react-select';

const EarthQuake = () => {

    const options = [
        { value: 0, label: 'كل الزلازل' },
        { value: 1.5, label: 'الشدة أكثر من 1.5' },
        { value: 2.5, label: 'الشدة أكثر من 2.5' },
        { value: 4.5, label: 'الشدة أكثر من 4.5' },
    ];

    const [quakes, setQuakes] = useState([]);

    const [isAlertVisible, setIsAlertVisible] = useState(true);

    const [isToggleview, setIsToggleview] = useState(false);

    const [selectedOption, setSelectedOption] = useState({ value: 0, label: 'كل الزلازل' });

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

    const quakesSagf = quakesVar.filter((quakeVar) => {
        return quakeVar.mag > selectedOption.value;
    })

    quakesVar = isToggleview === true ? quakesSagf.slice(0, 30) : quakesSagf.slice(0, 20);
    return (
        <>
            <div className="select mt-3 px-5 py-2 ">
                <span className="mb-2 block">فلترة البحث</span>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isSearchable={false}
                />
            </div>
            <div className='earthquake__Feeds-badge px-5 mb-3 py-2'>آخر التحديثات</div>
            <div className=' earthquake__EarthQuake-container p-5 pt-0'  >
                {quakesVar.length !== 0 && isAlertVisible ? <Alert /> : null}
                {quakes.length !== 0 ? quakesVar?.map((quake) => {
                    let away = calcTime(quake);
                    let color = styleBox(quake);
                    return <Earthquakefeed away={away} color={color} quake={quake} key={quake.earthquake_id} />
                }) : <Spinner />}
                {quakesVar.length >= 7 ? <Btnview hundelClick={hundelClick} isToggleview={isToggleview} /> : null}
                {quakesVar.length === 0 && quakes.length > 0 ? <p className='text-center text-3xl text-gray-400 mt-8'>لايوجد أي بيانات عن فلترة البحث</p> : null}
            </div>
        </>
    );
}

export default EarthQuake;