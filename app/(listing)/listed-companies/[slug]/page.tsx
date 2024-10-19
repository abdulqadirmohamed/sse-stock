import React from 'react'
import qs from 'qs';
import Image from 'next/image';
import { Charts } from '@/components/Charts';


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
        <div className='container mx-auto mt-10 grid md:grid-cols-3 gap-10'>
            <div className='col-span-2 shadow p-10'>
                <h1 className='capitalize text-2xl font-bold'>{company.security_name}</h1>
                <div>
                    <Charts/>
                </div>
                <div className='my-6 text-sm'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur doloremque illo, voluptatem ratione nesciunt dicta tenetur aut, recusandae minima dolorem ad, commodi fuga iste? Illo distinctio nesciunt saepe tempore, nostrum quidem deserunt quam cumque dignissimos quaerat reiciendis accusamus deleniti numquam id quo magnam? Saepe unde cupiditate voluptate perferendis quos natus magnam illo consectetur, nemo illum maxime distinctio accusamus minima vitae eveniet! Quos, eaque deserunt quaerat, ratione dolor quia a iure facilis possimus, soluta sequi autem modi architecto nemo accusamus? Ex repudiandae amet molestias fugiat nisi debitis, optio veritatis minus nobis vero architecto aut, maxime doloribus. Soluta dolores eligendi aperiam? Inventore!</p>
                </div>
            </div>
            <div className='col-span-1 shadow p-10'>
                <div>
                    <Image
                        src={`http://localhost:1337${company.logo?.formats?.thumbnail?.url}`}
                        alt={company.security_name}
                        width={250}
                        height={50}
                        className="mr-2"
                    />
                </div>
            </div>
        </div>
    )
}

export default page