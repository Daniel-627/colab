import AboutHero from '@/components/AboutHero'
import AboutUs from '@/components/AboutUs'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>
      <AboutHero />
      <AboutUs />
    </div>
  )
}