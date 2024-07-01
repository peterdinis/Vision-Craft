"use strict";
exports.__esModule = true;
var Feature = function (_a) {
    var imageUrl = _a.imageUrl, title = _a.title, description = _a.description;
    return (React.createElement("div", { className: 'group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 transition duration-300 hover:border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent lg:hover:shadow-gray-600/10 dark:lg:bg-transparent' },
        React.createElement("div", { className: 'relative' },
            React.createElement("img", { src: imageUrl, className: 'w-10', width: '512', height: '512', alt: 'feature illustration' }),
            React.createElement("h3", { className: 'mb-4 mt-8 text-2xl font-semibold text-gray-800 transition dark:text-white' }, title),
            React.createElement("p", { className: 'text-gray-600 dark:text-gray-300' }, description))));
};
var HeroServices = function () {
    var features = [
        {
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4341/4341111.png',
            title: 'Website Design',
            description: 'Create stunning and user-friendly websites tailored to your brand identity. Our designs ensure optimal user experience across all devices.'
        },
        {
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4341/4341160.png',
            title: 'E-commerce Integration',
            description: 'Build robust e-commerce solutions that drive sales. Seamlessly integrate payment gateways and manage inventory with ease.'
        },
        {
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4341/4341134.png',
            title: 'SEO Optimization',
            description: 'Enhance your website’s visibility with effective SEO strategies. Rank higher in search engine results and attract more organic traffic.'
        },
        {
            imageUrl: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png',
            title: 'Content Management',
            description: 'Manage your website content effortlessly. Update pages, publish blogs, and engage your audience with compelling content.'
        },
    ];
    return (React.createElement("div", { id: 'services', className: 'py-16' },
        React.createElement("div", { className: 'm-auto space-y-16 px-6 text-gray-500 xl:container md:px-12' },
            React.createElement("div", null,
                React.createElement("h2", { className: 'mt-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl' },
                    "A technology-first approach to payments",
                    ' ',
                    React.createElement("br", { className: 'sm:block', hidden: true }),
                    "and finance")),
            React.createElement("div", { className: 'mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3 lg:gap-0 xl:grid-cols-4' }, features.map(function (feature, index) { return (React.createElement(Feature, { key: index, imageUrl: feature.imageUrl, title: feature.title, description: feature.description })); })))));
};
exports["default"] = HeroServices;
