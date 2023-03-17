import { NavLink } from "react-router-dom";




const Navmenu = ({ hundelCancel, hundelLogin, isAuthenticated, hundelLogout }) => {
    return (
        <div className={`nav-menu hidden md:block lg:block  list-none`}>
            <div className='container flex flex-row-reverse '>
                <li className='p-3 '>
                    <NavLink to='/' onClick={hundelCancel}>معلومات الزلازل</NavLink>
                </li>
                <li className='p-3'>
                    <NavLink to='/follow' onClick={hundelCancel}>تتبع الاخرين</NavLink>
                </li>
                {!isAuthenticated && <li className='p-3 '>
                    <NavLink to='/login' onClick={hundelLogin}>تسجيل دخول</NavLink>
                </li>}
                {isAuthenticated &&
                    <li className='p-3'>
                        <NavLink to='/signup' onClick={hundelLogout}>تسجيل الخروج</NavLink>
                    </li>}
                <li className='p-3 hidden  md:block lg:hidden'>
                    <NavLink to='/map' onClick={hundelCancel} >الزلازل على الخريطة</NavLink>
                </li>
            </div>
        </div>
    );
}

export default Navmenu;