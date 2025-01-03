import React from 'react'

const Skills = () => {
    return (
        <div className='lg:w-1/2 lg:p-5 flex flex-wrap lg:space-x-2 sm:text-sm'>
            <div className="shadow-md p-2 flex space-x-2 items-center lg:m-2">
                <h3>JavaScript</h3>
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <img src="javascript.png" className="w-full h-full object-contain" alt="Next.js Logo" />
                </div>
            </div>
            <div className="shadow-md p-2 flex space-x-2 items-center lg:m-2">
                <h3>Next.JS</h3>
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" className="w-full h-full object-contain" alt="Next.js Logo" />
                </div>
            </div>
            <div className="shadow-md p-2 flex space-x-2 items-center lg:m-2">
                <h3>React</h3>
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" className="w-full h-full object-contain" alt="Next.js Logo" />
                </div>
            </div>
            <div className="shadow-md p-2 flex space-x-2 items-center lg:m-2">
                <h3>Express JS</h3>
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <img src="https://img.icons8.com/color/512/express-js.png" className="w-full h-full object-contain" alt="Next.js Logo" />
                </div>
            </div>
            <div className="shadow-md p-2 flex space-x-2 items-center lg:m-2">
                <h3>NodeJS</h3>
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <img src="/nodejs.png" className="w-full h-full object-contain" alt="Next.js Logo" />
                </div>
            </div>
            <div className="shadow-md p-2 flex space-x-2 items-center lg:m-2">
                <h3>Git</h3>
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/146px-Git_icon.svg.png" className="w-full h-full object-contain" alt="Next.js Logo" />
                </div>
            </div>
            <div className="shadow-md p-2 flex space-x-2 items-center lg:m-2">
                <h3>MongoDB</h3>
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                    <img src="/mongodb.png" className="w-full h-full object-contain" alt="Next.js Logo" />
                </div>
            </div>
        </div>
    )
}

export default Skills
