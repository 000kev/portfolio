import { useState } from 'react'
import Header from '../components/Header'
import PageImage from '../components/PageImage'
import Divider from '../components/Divider'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
    {/* <Header/> */}
    <PageImage/>
    <Divider/>
    <PageContent/>
    <Divider/>
    {/* <Footer/> */}
    </>
  )
}
