import { FC } from 'react';

interface FeatureProps {
    imageUrl: string;
    title: string;
    description: string;
}

const Feature: FC<FeatureProps> = ({ imageUrl, title, description }) => {
    return (
        <div className='group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition duration-300 hover:border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent lg:hover:shadow-gray-600/10 dark:lg:bg-transparent'>
            <div className='relative'>
                <img
                    src={imageUrl}
                    className='w-10'
                    width='512'
                    height='512'
                    alt='feature illustration'
                />
                <h3 className='mb-4 mt-8 text-2xl font-semibold text-gray-800 transition dark:text-white'>
                    {title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>{description}</p>
            </div>
        </div>
    );
};

const HeroServices: FC = () => {
    const features = [
        {
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4341/4341111.png',
            title: 'Website Design',
            description:
                'Create stunning and user-friendly websites tailored to your brand identity. Our designs ensure optimal user experience across all devices.',
        },
        {
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4341/4341160.png',
            title: 'E-commerce Integration',
            description:
                'Build robust e-commerce solutions that drive sales. Seamlessly integrate payment gateways and manage inventory with ease.',
        },
        {
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4341/4341134.png',
            title: 'SEO Optimization',
            description:
                'Enhance your website’s visibility with effective SEO strategies. Rank higher in search engine results and attract more organic traffic.',
        },
        {
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png',
            title: 'Content Management',
            description:
                'Manage your website content effortlessly. Update pages, publish blogs, and engage your audience with compelling content.',
        },
    ];

    return (
        <div id='services' className='py-16'>
            <div className='m-auto space-y-16 px-6 text-gray-500 xl:container md:px-12'>
                <div>
                    <h2 className='mt-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl'>
                        What Vision craft can {' '}
                        <br className='sm:block' hidden />
                        do?
                    </h2>
                </div>
                <div className='mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3 lg:gap-0 xl:grid-cols-4'>
                    {features.map((feature, index) => (
                        <Feature
                            key={index}
                            imageUrl={feature.imageUrl}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroServices;