import { NavLink } from "react-router-dom";




const Submenu = ({ hundelCancel, hundelClick, hundelLogout, subMenu, hundelLogin, isAuthenticated }) => {
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
            {!isAuthenticated && <li className='py-3 '>
                <NavLink to='/login' onClick={hundelLogin}>تسجيل دخول</NavLink>
            </li>}
            {isAuthenticated &&
                <li className='py-3 '>
                    <NavLink to='/signup' onClick={hundelLogout}>تسجيل الخروج</NavLink>
                </li>}
        </div>
    </div>);
}

export default Submenu;