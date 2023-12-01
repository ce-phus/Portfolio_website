import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border dark:border-light border-dark font-medium text-lg sm:text-base'>
        <Layout className='dark:text-light py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear} &copy; All Rights are Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build with<span className='text-primary text-2*1 px-1'>&#9825;</span>by &nbsp;<Link href="/" target={'_blank'} className='underline underline-offset-2'>Cephus</Link>
            </div>
            <Link href="/" target={'_blank'} className='underline underline-offset-2'>Say Hello</Link>        
                  
        </Layout>
    </footer>
  )
}

export default Footer