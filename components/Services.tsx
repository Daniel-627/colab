import React from 'react'
import { services } from '@/data'

type Props = {}

export default function Services({}: Props) {
  return (
    <div className='md:grid md:grid-cols-12 mx-auto flex flex-col px-6'>
        
        <img src="/img10.jpg" alt="Service Image" className='object-cover h-[550px] w-full rounded-3xl p-4 col-span-4' />
        <div className='col-span-8 flex flex-col space-y-4'>
            <h1 className='text-9xl'>Services</h1>
            {services.map((service) => (
                <div key={service.index} className='flex flex-row border-b-2 p-4 '>
                    <h1 className='text-4xl pr-2'>0{service.index}</h1>
                    <div className='flex flex-col'>
                        <h1 className='text-xl'>{service.title}</h1>
                        <p className='text-base font-extralight'>{service.details}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}