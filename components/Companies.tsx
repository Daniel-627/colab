import React from 'react'
import { companies } from '@/data/index'

type Props = {}

export default function Companies({}: Props) {
  return (
    <div>
        <div className='grid grid-cols-4 mx-auto p-10 bg-gray-900 my-24'>
            {companies.map((company) => (
                <div key={company.index}>
                    <img src={company.logo} alt={company.name} className='h-16 w-auto p-4'/>
                </div>
            ))}
        </div>
    </div>
  )
}