import { TNominated } from '@/types/types'
import { Languages, Mail, Map, Phone, PinIcon, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const getAll = async (): Promise<TNominated[] | null>  => {
  try {
      const res = await fetch(`${process.env.API_URL}/api/nominateds?populate=*`, {
          cache: 'no-store'
      })
      if (res.ok) {
          const market = await res.json()
          return market.data;
      }
  } catch (error) {
          console.log(error)
  }
  return null
}

const page = async () => {
  const nominatedAdvisors = await getAll()

  return (
    <div className='container mx-auto md:px-0 p-10'>
      <h1 className='text-2xl text-blue-900'>Nominated Advisors</h1>
      <div className='grid xl:grid-cols-2 lg:grid-cols-2 gap-9 my-10'>
        {/* */}
        
        {nominatedAdvisors && nominatedAdvisors.length > 0 ? (
                  nominatedAdvisors.map((nominatedAdvisor: TNominated) => (
        <div className='mx-w-auto border p-5' key={nominatedAdvisor.id}>
          <div className="flex items-center justify-between mb-1 -m-2 border-b">
            <div className="w-auto p-2">
              <h2 className="text-lg font-semibold text-blue-900">{nominatedAdvisor.name}</h2>
              <p className="text-xs text-coolGray-500 font-medium">{nominatedAdvisor.service_supported}</p>
            </div>
            <div className=" p-2">
              <Image
                src={`${process.env.API_URL}${nominatedAdvisor.logo?.formats?.medium?.url}`}
                alt="logo"
                width={100}
                height={50}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
          {/* Col-1 */}
          <div className='md:flex justify-between my-3'>

            <div>
              <div className="flex items-center -m-2">
                <div className=" p-2">
                  <div
                    className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-800 rounded-md"
                  >
                    <Phone />
                  </div>
                </div>
                <div className=" p-2">
                  <h2 className="text-sm font-medium text-coolGray-900">{nominatedAdvisor.tel}</h2>
                </div>
              </div>
              <div className="flex items-center -m-2">
                <div className=" p-2">
                  <div
                    className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-800 rounded-md"
                  >
                    <Mail />
                  </div>
                </div>
                <div className=" p-2">
                  <h2 className="text-sm font-medium text-coolGray-900">{nominatedAdvisor.email}</h2>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center -m-2">
                <div className=" p-2">
                  <div
                    className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-800 rounded-md"
                  >
                    <Languages />
                  </div>
                </div>
                <div className="w-auto p-2">
                  <h2 className="text-sm font-medium text-coolGray-900">{nominatedAdvisor.language}</h2>
                </div>
              </div>
              <div className="flex items-center -m-2">
                <div className=" p-2">
                  <div
                    className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-800 rounded-md"
                  >
                    <Map />
                  </div>
                </div>
                <div className="w-auto p-2">
                  <h2 className="text-sm font-medium text-coolGray-900">{nominatedAdvisor.country_office}</h2>
                </div>
              </div>

            </div>
          </div>
          <div>
            <div className="flex items-center -m-2">
              <div className=" p-2">
                <div
                  className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-800 rounded-md"
                >
                  <User />
                </div>
              </div>
              <div className="w-auto p-2">
                <h2 className="text-sm font-medium text-coolGray-900">{nominatedAdvisor.contact_persons}</h2>
              </div>
            </div>
          </div>

        </div>
      ))) : null}
      </div>
    </div>


  )
}

export default page