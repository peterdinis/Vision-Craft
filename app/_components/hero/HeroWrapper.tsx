import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { Input } from '@/components/ui/input';

const HeroWrapper: FC = () => {
    return (
        <>
            <div className='m-auto px-6 pt-32 xl:container md:px-12 md:py-12'>
                <div
                    aria-hidden='true'
                    className='from-primaryLight to-secondaryLight absolute inset-0 my-auto h-32 w-96 rotate-45 bg-gradient-to-r opacity-50 blur-3xl dark:opacity-20'
                ></div>
                <div className='relative lg:flex lg:items-center lg:gap-12'>
                    <div className='text-center sm:mx-auto sm:w-10/12 md:mt-12 md:w-2/3 lg:mr-auto lg:mt-0 lg:w-6/12 lg:text-left'>
                        <h1 className='text-4xl font-bold text-gray-900 dark:text-white md:text-6xl lg:text-5xl xl:text-6xl'>
                            Vision Craft{' '}
                            <span className='dark:text-primaryLight text-primary'>
                                Cms system for building websites.
                            </span>
                        </h1>
                        <p className='mt-8 text-gray-600 dark:text-gray-300'>
                            Odio incidunt nam itaque sed eius modi error totam
                            sit illum. Voluptas doloribus asperiores quaerat
                            aperiam. Quidem harum omnis beatae ipsum soluta!
                        </p>
                        <div>
                            <form className='mt-12 w-full'>
                                <div className='relative flex items-center rounded-full border border-primary/10 bg-white p-1 px-2 shadow-md dark:border-gray-700 dark:bg-gray-900 md:p-2 lg:pr-3'>
                                    <div className='py-3 pl-6'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='m-auto h-6 w-6 fill-blue-900/60 dark:fill-gray-400'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                        >
                                            <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                                            <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                                        </svg>
                                    </div>
                                    <Input
                                        autoComplete='email'
                                        placeholder='Your mail address'
                                        className='w-full rounded-full bg-transparent p-4 placeholder-gray-600 dark:placeholder-white'
                                        type='email'
                                    />
                                    <div className='p-2 md:pr-1.5 lg:pr-0'>
                                        <Button
                                            type='button'
                                            title='Start buying'
                                            className='dark:before:bg-primaryLight relative ml-auto h-12 w-20 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-auto sm:px-6'
                                        >
                                            <span className='relative hidden w-max font-semibold text-white dark:text-gray-900 md:block'>
                                                Get Started
                                            </span>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                                strokeWidth='2'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                                />
                                            </svg>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='mt-12 flex justify-between gap-6 grayscale dark:grayscale-0 lg:gap-12' />
                    </div>
                    <div className='w-full overflow-hidden lg:-mr-16 lg:w-10/12'>
                        <img
                            src='https://cdn3d.iconscout.com/3d/premium/thumb/product-development-2885458-2409426@0.png?f=webp'
                            alt='project illustration'
                            width={1200}
                            loading='lazy'
                            height={1200}
                            className='h-full w-full'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroWrapper;
