import React from 'react'
import Image from "next/image";
import Spacer from '@/components/common/spacer'

const PropertiesSection = ({image,title, price}) => {
  return (
    <div className='properties-section'>
        <h2>Discover Popular Properties</h2>
        <h5 color="">Featured Properties</h5>
        <div className='' > 
            <Image 
                src={`/images/houses/villa_image.png`}
                width={400}
                height={400}
                className='rounded'
                
                
             />
             
             <div></div>
        <div className=''>
            <div>
              <div class="card col-3">
                <div class="card card-body">
                  <h5 class="card-title">Luxury Villa in Central park</h5>
                  <h6 class="card-subtitle ">Maslak,İstanbul</h6>
                  <div class="card col-3 row-3 text-center flex"> $150000
                               
                  </div>
                </div>
                
                
              </div>
              
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default PropertiesSection