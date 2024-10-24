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

    const res = await fetch(`${process.env.API_URL}/api/market-snapshots?${query}`, {
        next: {
            revalidate: 60,
          }
    });
    const postData = await res.json();

    if (!postData || postData.data.length === 0) {
        throw new Error('company not found');
    }

    return postData.data[0];
}

// Generate static paths for each blog post
export async function generateStaticParams() {
    const res = await fetch(`${process.env.API_URL}/api/market-snapshots`);
    const data = await res.json();
  
    return data.data.map((post: any) => ({
      slug: post.slug,
    }));
  }

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const company = await fetchPost(params.slug);
  
    return {
      title: company.security_name,
    };
  }

const page = async ({ params }: { params: { slug: string } }) => {
    const company = await fetchPost(params.slug);

    const formatDateTime = (dateString: string | number | Date) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return (
        <div className='container mx-auto mt-10 grid md:grid-cols-3 md:gap-10 bg-background'>
            <div className='md:col-span-2 p-5 border-r'>
                <h1 className='capitalize text-2xl font-bold my-3'>{company.security_name}</h1>
                <div>
                    <Charts />
                </div>
                <div className='my-6 text-sm'>
                    <p>{company.description}</p>
                </div>
            </div>
            <div className='md:col-span-1'>
                <div className='w-[50%] h-48 relative'>
                    <Image
                        src={`${company.logo?.formats?.thumbnail?.url}`}
                        alt='post-image'
                        fill
                        priority
                        style={{ objectFit: "contain" }}
                        quality={100} />
                </div>
                <div className='text-sm px-5'>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>ISIN</span>
                        <span>{company.isin}</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Listing Date</span>
                        <span>{formatDateTime(company.createdAt)}</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Shares Issued</span>
                        <span>
                            {company.shares_issued
                                ? company.shares_issued
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                : "null"}
                        </span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Market Capitalization</span>
                        <span>
                            {company.market_capitalization
                                ? company.market_capitalization
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                : "null"}
                        </span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Address</span>
                        <span>{company.address}</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Phone</span>
                        <span>{company.phone}</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Email</span>
                        <span>{company.email}</span>
                    </div>
                    <div className='flex flex-col border-t py-3'>
                        <span className='font-semibold my-1'>Website</span>
                        <Link href={'https://www.bankofbaroda.ug/'} target='_blank'>{company.email}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page