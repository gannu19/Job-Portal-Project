import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { jobsData } from '../assets/assets';
import Navbar from '../components/Navbar';

const ApplyJob = ()=>{
    const { id } = useParams();
    const navigate = useNavigate();
    const job = jobsData.find((item) => item._id === id);

    if (!job) {
        return (
            <>
                <Navbar />
                <div className='container 2xl:px-20 mx-auto px-4 py-12'>
                    <h2 className='text-2xl font-semibold text-gray-900'>Job not found</h2>
                    <p className='text-gray-600 mt-2'>The job you are looking for does not exist.</p>
                    <button
                        type='button'
                        onClick={() => navigate('/')}
                        className='mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors'
                    >
                        Back to jobs
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className='container 2xl:px-20 mx-auto px-4 py-10'>
                <div className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
                    <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                        <div>
                            <h1 className='text-2xl md:text-3xl font-semibold text-gray-900'>{job.title}</h1>
                            <p className='text-gray-600 mt-2'>
                                {job.companyId?.name || 'Company'} | {job.location} | {job.level}
                            </p>
                            <p className='text-blue-700 font-medium mt-2'>
                                ${job.salary?.toLocaleString?.()}/year
                            </p>
                        </div>
                        <button
                            type='button'
                            className='bg-blue-600 text-white px-6 py-2.5 rounded hover:bg-blue-700 transition-colors'
                        >
                            Apply now
                        </button>
                    </div>

                    <div
                        className='mt-8 text-gray-700 space-y-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mt-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2'
                        dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                </div>
            </div>
        </>
    )
}

export default ApplyJob;
