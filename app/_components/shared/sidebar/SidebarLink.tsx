'use client';

import { Button } from '@/components/ui/button';
import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface ISidebarLinkProps {
    icon: ReactNode;
    linkHref: string;
    linkText: string;
}

const SidebarLink: FC<ISidebarLinkProps> = ({
    icon,
    linkHref,
    linkText,
}: ISidebarLinkProps) => {
    return (
        <div className='mt-8'>
            <Button variant={'ghost'} value='sm'>
                {icon}
                <Link href={linkHref}>{linkText}</Link>
            </Button>
        </div>
    );
};

export default SidebarLink;
