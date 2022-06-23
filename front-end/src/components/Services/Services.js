import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Service } from '../Service/Service'

const Services = ({services}) => {
  return (
    <div className='service-body'>
      <Header/>
      <div className='service-boxes'>
      {services.map(service=>
                <Service service={service} />
                )}
      </div>
        
      <Footer/>
    </div>
  )
}

export default Services