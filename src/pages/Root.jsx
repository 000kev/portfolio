import {Outlet} from 'react-router-dom'
import {useRef} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactModal from '../components/Contact'

export default function Root() {
    const dialog = useRef();

    return (
    <div className='bg-blue-50'>
        <Header/>
        {<ContactModal ref={dialog}/>}
        <Outlet/>
        <Footer onClick={() => dialog.current.open()}/>
    </div>
    )
}