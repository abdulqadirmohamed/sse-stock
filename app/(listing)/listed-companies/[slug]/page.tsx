import React from 'react'
import qs from 'qs';
import Image from 'next/image';
import { Charts } from '@/components/Charts';
import Link from 'next/link';


// Function to fetch a single blog post by slug
async function fetchPost(slug: string) {
    const query = qs.stringify({
        filters: { slug: { $eq: slug } },
        populate: '*',
    });

    const res = await fetch(`http://localhost:1337/api/stocks?${query}`);
    const postData = await res.json();

    if (!postData || postData.data.length === 0) {
        throw new Error('Blog not found');
    }

    return postData.data[0];
}


const page = async ({ params }: { params: { slug: string } }) => {
    const company = await fetchPost(params.slug);
    return (
        <div className='container mx-auto mt-10 grid md:grid-cols-3 md:gap-10 bg-background'>
            <div className='md:col-span-2 p-5 border-r'>
                <h1 className='capitalize text-2xl font-bold my-3'>{company.security_name}</h1>
                <div>
                    <Charts />
                </div>
                <div className='my-6 text-sm'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur doloremque illo, voluptatem ratione nesciunt dicta tenetur aut, recusandae minima dolorem ad, commodi fuga iste? Illo distinctio nesciunt saepe tempore, nostrum quidem deserunt quam cumque dignissimos quaerat reiciendis accusamus deleniti numquam id quo magnam? Saepe unde cupiditate voluptate perferendis quos natus magnam illo consectetur, nemo illum maxime distinctio accusamus minima vitae eveniet! Quos, eaque deserunt quaerat, ratione dolor quia a iure facilis possimus, soluta sequi autem modi architecto nemo accusamus? Ex repudiandae amet molestias fugiat nisi debitis, optio veritatis minus nobis vero architecto aut, maxime doloribus. Soluta dolores eligendi aperiam? Inventore!</p>
                </div>
            </div>
            <div className='md:col-span-1'>
                <div className='w-[50%] h-48 relative'>
                    <Image
                        src={`http://localhost:1337${company.logo?.formats?.thumbnail?.url}`}
                        alt='post-image'
                        fill
                        priority
                        style={{ objectFit: "contain" }}
                        quality={100} />
                </div>
                <div className='text-sm px-5'>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>ISIN</span>
                        <span>UG0000000055</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Listing Date</span>
                        <span>11/14/2002 - 01:30</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Shares Issued</span>
                        <span>15,000,000,000</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Market Capitalization</span>
                        <span>337,500,000,000</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Address</span>
                        <span>PO Box 7197, Kampala, Uganda.</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Phone</span>
                        <span>+256 414 233680/3</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Email</span>
                        <span>bob10@calva.com</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Website</span>
                        <Link href={'https://www.bankofbaroda.ug/'} target='_blank'>www.bankofbaroda.ug</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page