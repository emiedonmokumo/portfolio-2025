import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div>
      <ProjectCard
        title="GoodPlace CRM"
        description="A team project that helps business owners to manage relationship with potential investors and do the exit at the best terms. The software is a CRM-type cloud system which stores the investors’ data and communications with a client, as well as provides the analysis of prospective investors."
        imageSrc={["/projects/gplace.png", "/projects/gplace-1.png", "/projects/gplace-2.png", "/projects/gplace-3.png"]}
        link="https://gplace-iota.vercel.app"
        github="https://github.com/emiedonmokumo/gplace"
      />

    </div>
  )
}

export default Projects
