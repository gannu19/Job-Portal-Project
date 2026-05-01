import React from 'react';
import { assets } from '../assets/assets';

const AppDownload =()=>{
    return (
        <section className='container px-4 2xl:px-20 mx-auto my-20'>
            <div className='relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 border border-blue-100 shadow-sm'>
                <div className='grid md:grid-cols-2 items-center gap-10 px-6 py-10 sm:px-10 lg:px-16 lg:py-14'>
                    <div className='text-center md:text-left'>
                        <p className='text-sm font-semibold text-blue-600 mb-3'>
                            Jobs on the go
                        </p>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight max-w-xl mx-auto md:mx-0'>
                            Download the mobile app for a better job search experience
                        </h2>
                        <p className='mt-4 text-gray-600 max-w-lg mx-auto md:mx-0'>
                            Save jobs, apply faster, and keep track of new opportunities wherever you are.
                        </p>

                        <div className='flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mt-8'>
                            <a href="#" className='inline-flex' aria-label='Get it on Google Play'>
                                <img
                                    className='h-11 sm:h-12 md:h-14 hover:-translate-y-0.5 transition-transform'
                                    src={assets.play_store}
                                    alt='Get it on Google Play'
                                />
                            </a>
                            <a href="#" className='inline-flex' aria-label='Download on the App Store'>
                                <img
                                    className='h-11 sm:h-12 md:h-14 hover:-translate-y-0.5 transition-transform'
                                    src={assets.app_store}
                                    alt='Download on the App Store'
                                />
                            </a>
                        </div>
                    </div>

                    <div className='relative flex justify-center md:justify-end'>
                        <div className='absolute inset-x-10 bottom-2 h-16 bg-blue-200/40 blur-3xl rounded-full'></div>
                        <div className='relative rounded-[2rem] bg-white/70 border border-white shadow-xl px-5 pt-5 max-w-72 sm:max-w-80'>
                            <img
                                className='w-full max-h-96 object-contain'
                                src={assets.app_main_img}
                                alt='Mobile app preview'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppDownload;
