import { fetchData } from '@/lib/fetchData'
import { TMarket } from '@/types/types'
import { ArrowDown, ArrowUp, ChartNoAxesCombined } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
    const marketData = await fetchData('/api/market-snapshots');
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
                    <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Market Snapshot</h1>
                    <div className='overflow-x-auto overflow-y-scroll scrollbar'>
                        <table className="min-w-full table-auto border-collapse border text-left text-sm ">
                            <thead className='border-b'>
                                <tr>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100">SECURITY NAME</th>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100">SYMBOL</th>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100">MARKET</th>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100">PRICE</th>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100">OPEN</th>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100">CLOSE</th>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100">CHANGE (%)</th>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100">VOLUME</th>
                                    <th className="px-4 py-2 text-nowrap border-r bg-gray-100 text-center">TRADE</th>
                                </tr>
                            </thead>
                            <tbody >
                                {marketData && marketData.length > 0 ? (
                                    marketData.map((stock: TMarket) => (
                                        <tr key={stock.id} className="hover:bg-gray-100 border-b">
                                            <td className="px-4 py-2 flex items-center border-r">
                                                <Image
                                                    src={`${stock.logo?.formats?.thumbnail?.url}`}
                                                    alt={stock.security_name}
                                                    width={50}
                                                    height={50}
                                                    className="mr-2"
                                                />
                                                <Link href={`listed-companies/${stock.slug}`}>
                                                    {stock.security_name}
                                                </Link>
                                            </td>
                                            <td className="px-4 py-2 border-r">{stock.symbol}</td>
                                            <td className="px-4 py-2 border-r">{stock.market}</td>
                                            <td className="px-4 py-2 border-r">{stock.price}</td>
                                            <td className="px-4 py-2 border-r">{stock.open}</td>
                                            <td className="px-4 py-2 border-r">{stock.close}</td>
                                            <td className="px-4 py-2 border-r flex items-center gap-2 justify-center">
                                                {stock.change}
                                                {stock.change < 5 ? <ArrowDown size={15} className='text-red-600' /> : <ArrowUp size={15} className='text-green-600' />}
                                            </td>
                                            <td className="px-4 py-2 border-r">{stock.volume}</td>
                                            <td className="px-4 py-2 border-r flex justify-center">
                                                <button className="flex items-center border-r gap-2 bg-blue-900 hover:bg-blue-800 text-white  py-1 px-4 rounded capitalize">
                                                    <ChartNoAxesCombined size={20} />
                                                    trade
                                                </button>
                                            </td>
                                        </tr>
                                    ))) : null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
