import { NavLink } from "react-router-dom";

const Submenu = ({ hundelCancel, hundelClick, subMenu }) => {
    return (<div className={`sub-menu shadow-lg z-40 scale-up-ver-top bg-gray-50 p-4 ${subMenu ? 'block' : 'hidden'}`}>
        <div className='x'><i className='bx bx-x bx-rotate-90' onClick={hundelClick}></i></div>
        <li className='py-3'>
            <NavLink to='/' onClick={hundelCancel}>معلومات الزلازل</NavLink>
        </li>
        <li className='py-3'>
            <NavLink to='/follow' onClick={hundelCancel}>تتبع الاخرين</NavLink>
        </li>
        <li className='py-3'>
            <NavLink to='/map' onClick={hundelCancel}> الخريطة</NavLink>
        </li>
        <div className="flex justify-center items-center gap-2">
            <li className='py-3 '>
                <NavLink to='/login' onClick={hundelCancel}>تسجيل دخول</NavLink>
            </li>
            <li className='py-3 '>
                <NavLink to='/signup' onClick={hundelCancel}>انشاء حساب</NavLink>
            </li>
        </div>
    </div>);
}

export default Submenu;