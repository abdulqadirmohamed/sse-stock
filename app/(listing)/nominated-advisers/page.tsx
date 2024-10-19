import { Languages, Mail, Map, Phone, PinIcon, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  const nominatedAdvisors = [
    { id: 1, cName: 'HA CAPITAL MANAGEMENT', Service: 'Broker, Trading, Asset Management' },
    { id: 2, cName: 'SAAMIGADO', Service: 'Broker, Financial Securities Trading Platform' },
    { id: 3, cName: 'ANDERSON PIERCE & CO', Service: 'Audit, Business Advisory' },
  ]
  return (
    <div className='container mx-auto md:px-0 p-10'>
      <h1 className='text-2xl text-blue-900'>Nominated Advisors</h1>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-9 my-10'>
        {/* */}
        {nominatedAdvisors.map((nominatedAdvisor)=>(
        <div className='mx-w-auto border p-5' key={nominatedAdvisor.id}>
          <div className="flex items-center justify-between mb-1 -m-2 border-b">
            <div className="w-auto p-2">
              <h2 className="text-lg font-semibold text-blue-900">{nominatedAdvisor.cName}</h2>
              <p className="text-xs text-coolGray-500 font-medium">{nominatedAdvisor.Service}</p>
            </div>
            <div className=" p-2">
              <Image
                src={'https://sse.so/wp-content/uploads/2021/07/sselogonew.png'}
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
                  <h2 className="text-sm font-medium text-coolGray-900">+252 5 844 280</h2>
                  <h3 className="text-sm font-medium text-coolGray-400">+252 906 133143</h3>
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
                  <h2 className="text-sm font-medium text-coolGray-900">info@hacapitalmanagement.com</h2>
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
                  <h2 className="text-sm font-medium text-coolGray-900">English, Somali</h2>
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
                  <h2 className="text-sm font-medium text-coolGray-900">Somalia</h2>
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
                <h2 className="text-sm font-medium text-coolGray-900">Ahmed Isse</h2>
                <h2 className="text-sm font-medium text-coolGray-900">Hassan Muse</h2>
              </div>
            </div>
          </div>

        </div>
      ))}
      </div>
    </div>


  )
}

export default page