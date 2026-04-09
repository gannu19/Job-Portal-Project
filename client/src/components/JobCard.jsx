import React from 'react';
import { assets } from '../assets/assets';

const JobCard = ({ job }) => {
    const companyLogo = job?.companyId?.image || assets.company_icon;
    const companyName = job?.companyId?.name || 'Company';
    const descriptionText = job?.description
        ? job.description.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
        : '';
    const shortDescription =
        descriptionText.length > 110 ? `${descriptionText.slice(0, 110)}...` : descriptionText;

    return (
        <div className='bg-white border border-gray-200 rounded-lg p-5 shadow-sm'>
            <img className='h-10 w-10 object-contain mb-4' src={companyLogo} alt={`${companyName} logo`} />
            <h4 className='text-lg font-semibold text-gray-900'>{job?.title}</h4>
            <p className='text-sm text-gray-600 mt-1'>{companyName}</p>
            <p className='text-sm text-gray-600 mt-2'>{job?.location} | {job?.level}</p>
            <p className='text-sm text-gray-600 mt-2'>{shortDescription}</p>
            <p className='text-sm text-blue-700 font-medium mt-2'>${job?.salary?.toLocaleString?.()}/year</p>
        </div>
    );
};

export default JobCard;
