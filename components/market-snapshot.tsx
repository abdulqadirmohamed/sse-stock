import { ArrowDown, ArrowUp, ChartNoAxesCombined } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const MarketSnapshot = () => {
    const stockData = [
        {
            name: 'Somali Postal Express',
            symbol: 'SPE',
            market: 'Main',
            price: '$3.00',
            open: '$3.00',
            close: '$3.00',
            change: 0,
            volume: '0',
            trade: 'Trade',
            logo: 'https://sse.so/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-12.09.19-PM-2-300x89.jpeg', // Replace with your image path
        },
        {
            name: 'Iguhallee Real Estate',
            symbol: 'IGRE',
            market: 'Main',
            price: '$5.00',
            open: '$5.00',
            close: '$5.00',
            change: 5,
            volume: '0',
            trade: 'Trade',
            logo: 'https://sse.so/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-12-at-11.32.55-AM-3-300x81.jpeg',
        },
        // Add more rows as needed
    ];
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
                        {stockData.map((stock, index) => (
                            <tr key={index} className="hover:bg-gray-100 border-b">
                                <td className="px-4 py-2 flex items-center">
                                    <Image
                                        src={stock.logo}
                                        alt={stock.name}
                                        width={50}
                                        height={50}
                                        className="mr-2"
                                    />
                                    {stock.name}
                                </td>
                                <td className="px-4 py-2">{stock.symbol}</td>
                                <td className="px-4 py-2">{stock.market}</td>
                                <td className="px-4 py-2">{stock.price}</td>
                                <td className="px-4 py-2">{stock.open}</td>
                                <td className="px-4 py-2">{stock.close}</td>
                                <td className="px-4 py-2 flex items-center gap-2 justify-center">
                                    {stock.change}
                                    {stock.change < 5 ? <ArrowDown size={20} className='text-red-600' />: <ArrowUp size={20} className='text-green-600' />}
                                </td>
                                <td className="px-4 py-2">{stock.volume}</td>
                                <td className="px-4 py-2 text-center">
                                    <button className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded">
                                    <ChartNoAxesCombined size={20} />
                                        {stock.trade}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MarketSnapshot