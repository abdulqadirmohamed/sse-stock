// 'use client'
import { ArrowDown, ArrowUp, ChartNoAxesCombined } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const gellMarketSnapshot = async () => {

    try {
        const res = await fetch('http://localhost:1337/api/stocks?populate=*', {
            cache: 'no-store'
        })
        if (res.ok) {
            const market = await res.json()
            return market.data;
        }
    } catch (error) {

    }
}
const MarketSnapshot = async () => {
    const marketData = await gellMarketSnapshot()
    return (
        <div className="container mx-auto my-4 px-6">
            <h1 className='text-center my-6 text-xl font-bold'>Market Snapshot</h1>
            <div className='overflow-x-auto overflow-y-scroll scrollbar'>
                <table className="min-w-full table-auto border-collapse border text-left ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">SECURITY NAME</th>
                            <th className="px-4 py-2">SYMBOL</th>
                            <th className="px-4 py-2">MARKET</th>
                            <th className="px-4 py-2">PRICE</th>
                            <th className="px-4 py-2">OPEN</th>
                            <th className="px-4 py-2">CLOSE</th>
                            <th className="px-4 py-2">CHANGE (%)</th>
                            <th className="px-4 py-2">VOLUME</th>
                            <th className="px-4 py-2">TRADE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marketData && marketData.length > 0 ? (
                            marketData.map((stock: any) => (
                                <tr key={stock.id} className="hover:bg-gray-100 border-b">
                                    <td className="px-4 py-2 flex items-center">
                                        <Image
                                            src={`http://localhost:1337${stock.logo.formats.thumbnail.url}`}
                                            alt={stock.name}
                                            width={50}
                                            height={50}
                                            className="mr-2"
                                        />
                                        {stock.security_name}
                                    </td>
                                    <td className="px-4 py-2">{stock.symbol}</td>
                                    <td className="px-4 py-2">{stock.market}</td>
                                    <td className="px-4 py-2">{stock.price}</td>
                                    <td className="px-4 py-2">{stock.open}</td>
                                    <td className="px-4 py-2">{stock.close}</td>
                                    <td className="px-4 py-2 flex items-center gap-2 justify-center">
                                        {stock.change}
                                        {stock.change < 5 ? <ArrowDown size={15} className='text-red-600' /> : <ArrowUp size={15} className='text-green-600' />}
                                    </td>
                                    <td className="px-4 py-2">{stock.volume}</td>
                                    <td className="px-4 py-2 text-center">
                                        <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded">
                                            <ChartNoAxesCombined size={20} />
                                            {stock.trade}
                                        </button>
                                    </td>
                                </tr>
                            ))) : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MarketSnapshot