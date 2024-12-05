import React from 'react'
import { Project } from '@/utils/Interface'
import { projects } from '@/data/index'
import { BiLink } from 'react-icons/bi'
import Link from 'next/link'

type Props = {}

export default function Works({}: Props) {
  return (
    <div className='py-16 mx-auto'>
      <div className='text-9xl py-2'>Works</div>
      <div className='grid grid-cols-3 space-x-4'>
          {projects.map((project) => (
              <div key={project.id} className='border-l-2 p-2 space-y-2'>
                <p className='font-extralight text-xs'>P0{project.id}</p>
                <p className='font-light text-sm px-2'>{project.des}</p>
                <h1 className='font-medium text-lg px-3'>{project.title}</h1>
                <img
                  src={project.img}
                  alt={project.img}
                  className='h-96 object-cover rounded-xl'
                />
                <div>
                  <Link href={project.link} className=''><BiLink /></Link>                  
                </div>
              </div>
          ))}
      </div>
    </div>
  )
}