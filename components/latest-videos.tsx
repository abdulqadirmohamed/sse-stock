import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Latestideos = () => {
  return (
    <div className='container mx-auto my-4 p-10'>
    <div className='flex gap-4 justify-between items-center'>
        <div>
            <h1 className='w-full text-2xl font-bold'>Latest Videos </h1>
        </div>
        <div>
            <Link href={'#'} className='bg-blue-900 px-4 py-2 rounded text-white flex items-center gap-2'>See more <ChevronRight /></Link>
        </div>
    </div>
    <span className='w-full h-[2px] bg-blue-900 block my-2'></span></div>
  )
}

export default Latestideos