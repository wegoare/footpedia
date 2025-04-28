import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to view More Such Interesting stories and articles
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout the official FourFourTwo website
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.fourfourtwo.com/" target='_blank' rel='noopener noreferrer'>
                    Four Four Four Two
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://wallpaperaccess.com/full/4123423.jpg" />
        </div>
    </div>
  )
}