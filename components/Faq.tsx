import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
    const faqs = [
        {
            id: 1,
            question: "What is the Somali Stock Exchange (SSE)?",
            answer: 'The Somali Stock Exchange (SSE) is Somalia’s first stock exchange, launched on September 1st, 2015, in Garowe. It provides a platform for businesses and investors to trade shares, securities, and bonds, promoting economic growth and investment opportunities in the country.'
        },
        {
            id: 2,
            question: "How does the SSE benefit Somali businesses and investors?",
            answer: 'The SSE creates a transparent and efficient marketplace where businesses can raise capital by selling shares. It also provides opportunities for investors to access high-growth companies, fostering liquidity and enabling long-term economic development.'
        },
        {
            id: 3,
            question: "What role does the SSE play in Somalia’s economy?",
            answer: 'The SSE plays a crucial role in facilitating capital flow and supporting business growth. With over $3 billion USD entering Somalia annually, the SSE aims to channel these investments efficiently to promote sustainable development across various sectors, including SMEs and large firms.'
        },
    ]
    return (
        <div className="container mx-auto p-10">
             <div className='flex gap-4 justify-between items-center'>
                <div>
                    <h1 className='md:w-[600px] w-full lg:text-3xl text-2xl text-[#174C81] font-bold font-Arial'>Frequently Asked Questions</h1>
                </div>
        
            <span className='w-full h-[2px] bg-[#174C81] md:block hidden my-2'></span>
            </div>
            <Accordion type="single" collapsible className='text-left'>
                {faqs.map((faq)=>(
                <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>

        </div>
    )
}

export default Faq