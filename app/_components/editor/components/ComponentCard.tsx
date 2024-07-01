'use client';

import { FC } from 'react';
import { CardHeader, Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface IComponentCardProps {
    header: string;
}

const ComponentCard: FC<IComponentCardProps> = ({
    header,
}: IComponentCardProps) => {
    return (
        <Card>
            <CardHeader className='text-balance break-words'>
                {header}
            </CardHeader>
            <CardContent className='mt-4 flex justify-center break-words align-top'>
                <Button variant={'link'} size={'sm'}>
                    Use
                </Button>
            </CardContent>
        </Card>
    );
};

export default ComponentCard;
