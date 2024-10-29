import { fetchData } from '@/lib/fetchData'
import { TNominated } from '@/types/types'
import { Languages, Mail, Map, Phone, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = async () => {
  const nominatedAdvisors = await fetchData('/api/nominateds');

  return (
    <>
         <div className="w-full h-[300px] relative">
        {/* Background Image */}
        <Image
          src={'/images/hero-img-1.jpg'}
          alt="nominated"
          className="object-cover object-center"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
          <h1 className="md:w-1/2 mx-auto text-3xl md:text-5xl font-bold mb-4 text-center">
          Nominated Advisors
          </h1>
        </div>
      </div>
      <div className='container mx-auto md:px-0 p-10'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 gap-9 my-10'>
          {/* */}

          {nominatedAdvisors && nominatedAdvisors.length > 0 ? (
            nominatedAdvisors.map((nominatedAdvisor: TNominated) => (
              <div className='mx-w-auto border p-5' key={nominatedAdvisor.id}>
                <div className="flex items-center justify-between mb-1 -m-2 border-b">
                  <div className="w-auto p-2">
                    <h2 className="text-lg font-semibold text-[#174C81]">{nominatedAdvisor.name}</h2>
                    <p className="text-xs text-coolGray-500 font-medium">{nominatedAdvisor.service_supported}</p>
                  </div>
                  <div className=" p-2">
                    <Image
                      src={`${nominatedAdvisor.logo?.formats?.medium?.url}`}
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
                          className="flex items-center justify-center w-12 h-12 bg-blue-50 text-[#174C81] rounded-md"
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
                          className="flex items-center justify-center w-12 h-12 bg-blue-50 text-[#174C81] rounded-md"
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
                          className="flex items-center justify-center w-12 h-12 bg-blue-50 text-[#174C81] rounded-md"
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
                          className="flex items-center justify-center w-12 h-12 bg-blue-50 text-[#174C81] rounded-md"
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
    </>


  )
}

export default page