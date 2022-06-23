import React from 'react'

export const Service = ({service}) => {
  return (
  
    <div className='service-boxe'>
              <span>{service.icon}</span>
              <h2>{service.title}</h2>
              <p>{service.content}</p>                    
    </div>
  )
}
