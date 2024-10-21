import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const gellMarketSnapshot = async () => {

  try {
    const res = await fetch(`${process.env.API_URL}/api/market-snapshots?populate=*`, {
      cache: 'no-store'
    })
    if (res.ok) {
      const market = await res.json()
      return market.data;
    }
  } catch (error) {

  }
}

const page = async () => {
  const marketData = await gellMarketSnapshot()
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
          <div className='overflow-x-auto overflow-y-scroll scrollbar'>
          <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Listed Companies</h1>
            <table className="min-w-full table-auto border-collapse border text-left text-sm ">
              <thead className='border-b capitalize'>
                <tr>
                  <th className="px-4 py-2 text-nowrap border-r bg-gray-100">Logo</th>
                  <th className="px-4 py-2 text-nowrap border-r bg-gray-100">Name</th>
                  <th className="px-4 py-2 text-nowrap border-r bg-gray-100">Ticker</th>
                  <th className="px-4 py-2 text-nowrap border-r bg-gray-100">Market</th>
                </tr>
              </thead>
              <tbody >
                {marketData && marketData.length > 0 ? (
                  marketData.map((stock: any) => (
                    <tr key={stock.id} className="hover:bg-gray-100 border-b">
                      <td className="px-4 py-2 flex items-center border-r">
                        <Image
                          src={`${process.env.API_URL}${stock.logo.formats.thumbnail.url}`}
                          alt={stock.name}
                          width={100}
                          height={50}

                        />
                      </td>
                      <td className="px-4 py-2 border-r capitalize hover:underline hover:text-blue-900"><Link href={`listed-companies/${stock.slug}`}>{stock.security_name}</Link></td>
                      <td className="px-4 py-2 border-r uppercase">{stock.symbol}</td>
                      <td className="px-4 py-2 border-r">{stock.market}</td>
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
