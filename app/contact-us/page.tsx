import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactForm from './_components/contact-form'


const page = () => {
  const contacts = [
    {
      id: 1,
      phone: ['+252 618870155', '+252 907127973'],
      email: 'info@sse.so',
      location: 'SSE Building, Main Road, P.O.Box 20016, Garowe, PL, Somalia'
    },
    {
      id: 2,
      phone: ['+252 618870155', '+252 907127973'],
      email: 'mogadishu@sse.so',
      location: 'SSE House, 21st Oct Road, P.O.Box 40001, Waberi, Mogadishu, Somalia'
    },
    {
      id: 3,
      phone: ['+252 634462 216', '+252 907127973'],
      email: 'hargeisa@sse.so',
      location: 'G Floor, Africa House, Jigjiga Yar Road Hargeisa, Somaliland'
    },
  ]

  return (
    <div className="">
      <div className='md:h-[500px] h-[200px] relative -z-50 border-b-8 border-[#174C81]'>
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
          <h1 className='text-2xl md:text-left sm:text-center font-bold mb-6 uppercase'>Contact Us</h1>
          <div className='md:text-[18px] text-gray-600'>
            <ContactForm />
            <div className='my-10'>
              <h2 className='text-[#174C81] font-semibold'>Somali Stock Exchange</h2>
              {contacts.map((contact) => (
                <div className='mt-4' key={contact.id}>
                  <div className='flex items-center gap-2 my-2'>
                    <div>
                      <Phone size={20} className='text-[#174C81]' />
                    </div>
                    <div>
                      {contact.phone.map((tel) => (
                        <Link href={`tel:${tel}`} key={tel}>
                          <p className='hover:underline hover:text-[#1b2f44e1]'>{tel}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className='flex items-center gap-2 my-2'>
                    <div>
                      <Mail size={20} className='text-[#174C81]' />
                    </div>
                    <div>
                      <Link href={`mailto:${contact.email}`} className='hover:underline hover:text-[#1b2f44e1]'>{contact.email}</Link>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 my-2 mb-4'>
                    <div>
                      <MapPin size={20} className='text-[#174C81]' />
                    </div>
                    <div>
                      <p>{contact.location}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
