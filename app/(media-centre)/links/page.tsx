import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const links = [
        {
            id: 1,
            href: "https://centralbank.gov.so/",
            title: 'Central Bank of Somalia – FGS*'
        },
        {
            id: 2,
            href: "https://centralbank.gov.so/",
            title: 'Ministry of Finance – FGS*'
        },

    ]
    return (
        <div className="">
            <div className='md:h-[500px] h-[200px] relative -z-50 border-b-8 border-blue-900'>
                <Image
                    src={'/images/hero-img-1.jpg'}
                    alt='about-image'
                    className="object-cover object-center"
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                    quality={100}
                />
            </div>
            <div className='lg:grid grid-cols-5 md:mt-[-400px] z-50'>
                <div className='lg:block md:col-span-2 hidden'></div>
                <div className="bg-white lg:shadow-xl lg:p-20 p-10 lg:col-span-3">
                    <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Links</h1>
                    <div className='md:text-[18px] text-gray-600'>
                        <h2>Government Institutions & Other Entities</h2>
                        <table className='min-w-full table-auto border-collapse border text-left text-sm '>
                            <tbody>

                                {links.map((list) => (
                                    <tr>
                                        <td className="px-4 py-2 border-b" key={list.id}>
                                            <Link href={list.href} target="_blank">{list.title}</Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
