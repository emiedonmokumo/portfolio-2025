import Skills from '@/components/Skill'
import React from 'react'

const page = () => {
  return (
    <div className='flex sm:flex-col sm:space-y-5 sm:mt-5'>
      <div className='lg:w-1/2'>
        <h1 className='text-4xl sm:text-3xl font-semibold mb-5 leading-snug text-animation'>The Technologies That Define My Development Journey</h1>
        <h3>Here are some of the tools i've worked with over the years, for my personal, professional and open source projects.</h3>
      </div>
      <Skills />
    </div>
  )
}

export default page
