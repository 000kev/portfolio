import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

export function HeaderIcons({title}) {
    let path = '';
    if (title === 'home') path='/';
    else path = `/${title}`;
    
    return (
        <li className="font-heading px-8 py-4 my-6 hover:text-violet-400">
            <NavLink
            to={path}
            className={({isActive}) => isActive ? ("text-cyan-200") : undefined}
            end
            >{title}</NavLink>
        </li>
    );
}

export default function Header() {
    const [i_name, switchIcon] = useState("menu");
    const icon_ref = useRef();
    const heading_ref = useRef();

    return (
        <nav className="justify-between items-center sticky z-40 bg-gray-900 h-16">
            <span className="bg-gray-900 text-3xl cursor-pointer md:hidden flex mx-auto ">
                <ion-icon color="light" name={i_name} onClick={(e) => {
                    i_name === 'menu' ? (switchIcon('close'), icon_ref.current.style.opacity = '100') : (switchIcon('menu'), icon_ref.current.style.opacity = '0')
                }}></ion-icon>
                <h1 ref={heading_ref} className="text-slate-200 font-heading text-2xl mx-auto md:hidden"></h1>
            </span>

            <ul ref={icon_ref} className="md:flex md:flex-row md:justify-between md:fixed md:w-screen md:h-20 bg-gray-900 text-white 
            shadow-lg gap-x-5 md:opacity-100 opacity-0 md:static absolute transition-all ease-in duration-500">
                <HeaderIcons title="home"/>
                <HeaderIcons title="leadership"/>
                <HeaderIcons title="experience"/>
                <HeaderIcons title="reflection"/>
                <HeaderIcons title="vision"/>
                <HeaderIcons title="cv"/>
            </ul>
        </nav>
    );
}