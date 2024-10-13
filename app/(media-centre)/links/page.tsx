/* eslint-disable react/jsx-key */
import { ExternalLink } from 'lucide-react'
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
        {
            id: 3,
            href: "https://centralbank.gov.so/",
            title: 'Ministry of Planning, Investment & Economic Development – FGS'
        },
        {
            id: 4,
            href: "https://centralbank.gov.so/",
            title: 'Somali Depository & Settlement Corporation'
        },
        {
            id: 5,
            href: "https://centralbank.gov.so/",
            title: 'Ministry of Commerce and Industry – FGS'
        },
        {
            id: 6,
            href: "https://centralbank.gov.so/",
            title: 'Ministry of Fisheries and Marine Resources – FGS'
        },
        {
            id: 7,
            href: "https://centralbank.gov.so/",
            title: 'Ministry of Petroleum and Mineral Resources – FGS'
        },
        {
            id: 8,
            href: "https://centralbank.gov.so/",
            title: 'FSG = Federal Government of Somalia'
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
                        <h2 className='my-3'>Government Institutions & Other Entities</h2>
                        <table className='min-w-full table-auto border-collapse border text-left text-sm '>
                            <tbody>
                                {links.map((list) => (
                                    <tr key={list.id}>
                                        <td className="px-3 py-2 border-b flex items-center gap-4 group">
                                            <ExternalLink size={15} className='group-hover:text-blue-800'/>
                                            <Link href={list.href} target="_blank" className='text-blue-800 group-hover:underline'>{list.title}</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h2 className='my-2'>The Organization of Islamic Cooperation Exchanges</h2>
                        <Link className='text-blue-800' href={'https://www.oicexchanges.org/en/indices/spcomcec50'} target="_blank">S&P OIC/COMCEC Shariah 50 Index</Link>
                        <p className='my-3'>The Index, including 50 shares from 19 OIC countries, has been launched as of 15 June 2012 to facilitate increased awareness about Organization of Islamic Cooperation capital markets and foster cooperation between OIC exchanges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
