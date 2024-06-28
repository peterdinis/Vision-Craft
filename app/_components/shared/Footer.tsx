import { Label } from '@/components/ui/label';
import { FC } from 'react';

const Footer: FC = () => {
    return (
        <div className='container mx-auto px-4 py-12 sm:px-6 lg:px-12 xl:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <Label className='text-3xl font-bold'>Vision-Craft</Label>
                <div className='mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-10'>
                    <p className='cursor-pointer text-base leading-4 text-gray-800 hover:text-gray-500 dark:text-white'>
                        Services
                    </p>
                    <p className='cursor-pointer text-base leading-4 text-gray-800 hover:text-gray-500 dark:text-white'>
                        Pricing
                    </p>
                </div>
                <div className='mt-6 flex items-center'>
                    <p className='text-base leading-4 text-gray-800 dark:text-white'>
                        2024 <span className='font-semibold'>Vision Craft</span>
                    </p>
                    <div className='ml-2 border-l border-gray-800 pl-2'>
                        <p className='text-base leading-4 text-gray-800 dark:text-white'>
                            Inc. All righys reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
