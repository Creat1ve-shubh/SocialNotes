import React from 'react'
import ExpandableCardDemo from '../components/expandablecard'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Link from 'next/link'


const Notes = () => {
    return (
        <div className='bg-[#FFC53D] overflow-hidden'>
            <Link href='/'>
                <button className='bg-black ml-6 mt-8 text-white py-4 px-6 flex items-start justify-start rounded-lg'>
                    Back to Home

                </button>
            </Link>
            <Form />
            <ExpandableCardDemo />

        </div>
    )
}

export default Notes
