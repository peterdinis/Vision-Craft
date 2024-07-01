import { FC } from 'react';

interface IHeaderProps {
    text: string;
}

const Header: FC<IHeaderProps> = ({ text }: IHeaderProps) => {
    return (
        <h2 className='mt-10 flex scroll-m-20 justify-center align-top text-4xl font-extrabold tracking-tight lg:text-5xl'>
            {text}
        </h2>
    );
};

export default Header;
