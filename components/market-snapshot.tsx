// 'use client'
import { limitFetchData } from '@/lib/fetchData';
import { TMarket } from '@/types/types';
import { ArrowDown, ArrowUp, ChartNoAxesCombined } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MarketSnapshot = async () => {
    const marketData = await limitFetchData('/api/market-snapshots', 5);
    return (
        <div className="container mx-auto my-4 px-6">
            <h1 className='text-center my-6 lg:text-3xl text-2xl text-[#174C81] font-bold font-Arial'>Market Snapshot</h1>
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
                    <tbody>
                        {marketData && marketData.length > 0 ? (
                            marketData.map((stock:TMarket) => {
                                // Get the Cloudinary image URL or fallback to a placeholder
                                const imageUrl = stock.logo?.formats?.thumbnail?.url
                                    ? stock.logo.formats.thumbnail.url
                                    : '/images/placeholder.jpg';

                                return (
                                    <tr key={stock.id} className="hover:bg-gray-100 border-b">
                                        <td>
                                            <Link
                                                href={`listed-companies/${stock.slug}`}
                                                className="px-4 py-2 flex items-center border-r group"
                                            >
                                                <Image
                                                    src={imageUrl}
                                                    alt={stock.security_name}
                                                    width={50}
                                                    height={50}
                                                    className="mr-2"
                                                />
                                                <span className="group-hover:text-[#174C81] group-hover:underline">
                                                    {stock.security_name}
                                                </span>
                                            </Link>
                                        </td>
                                        <td className="px-4 py-2 border-r uppercase">{stock.symbol}</td>
                                        <td className="px-4 py-2 border-r">{stock.market}</td>
                                        <td className="px-4 py-2 border-r">{stock.price}</td>
                                        <td className="px-4 py-2 border-r">{stock.open}</td>
                                        <td className="px-4 py-2 border-r">{stock.close}</td>
                                        <td className="px-4 py-2 border-r flex items-center gap-2 justify-center">
                                            {stock.change}
                                            {stock.change < 5 ? (
                                                <ArrowDown size={15} className="text-red-600" />
                                            ) : (
                                                <ArrowUp size={15} className="text-green-600" />
                                            )}
                                        </td>
                                        <td className="px-4 py-2 border-r">{stock.volume}</td>
                                        <td className="px-4 py-2 border-r flex justify-center items-center">
                                            <Link
                                                href="https://saamigado.com/"
                                                target="_blank"
                                                className="flex items-center border-r gap-2 bg-[#174C81] hover:bg-[#1b2f44e1] text-white py-1 px-4 rounded capitalize hover:animate-pulse"
                                            >
                                                <ChartNoAxesCombined size={20} />
                                                trade
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={9} className="text-center py-4">
                                    No data available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MarketSnapshot