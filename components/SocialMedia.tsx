import Link from 'next/link'
import React from 'react'
import { FaGithub, FaEnvelope } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='flex lg:flex-col lg:space-y-5 lg:justify-center sm:space-x-2'>
            <Link href={'https://x.com/emiedonmokumo'} target='_blank' className=''>
                <div className='overflow-hidden border rounded-full w-12 h-12 p-2'>
                    <img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo-500x281.png" className='w-full h-full object-contain' alt="" />
                </div>
            </Link>
            <Link href={'https://www.linkedin.com/in/emiedonmokumo-dick-boro-a191a0269/'} target='_blank' className=''>
                <div className='overflow-hidden border rounded-full w-12 h-12 p-2'>
                    <img src="/icons8-linkedin-500.png" className='w-full h-full object-contain' alt="" />
                </div>
            </Link>
            <Link href={'https://github.com/emiedonmokumo'} className='' target='_blank'>
                <div className='overflow-hidden border rounded-full w-12 h-12 p-2'>
                    <img src="/github-logo.png" className='w-full h-full object-contain' alt="" />
                </div>
            </Link>
            <Link href={'mailto:boro2dev@gmail.com'} target='_blank' className=''>
                <div className='overflow-hidden border rounded-full w-12 h-12 p-2'>
                    <img src="/mailbox.png" className='w-full h-full object-contain' alt="" />
                </div>
            </Link>
        </div>
    )
}

export default SocialMedia
