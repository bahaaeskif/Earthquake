import { useParams } from 'react-router-dom';
import './save.css'
const Save = () => {
    const { loc } = useParams();
    return (
        // <div className='save__container px-5 py-3  '>
        //     <div className='save__container-persons py-4'>
        //         <div className='save__container-persons bg-white w-fit p-1 my-2' >{loc}</div>
        //     </div>
        // </div>
        <div className='save__container px-5 py-3 flex justify-center sm:text-xl md:text-2xl lg:text-4xl text-lg '>
            <h2 className='mt-9 '>الصفحة قيد التطوير</h2>
        </div>
    );
}

export default Save;