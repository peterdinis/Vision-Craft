"use client"

import { FC } from 'react';
import { CardHeader, Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useDraggable } from '@dnd-kit/core';

interface IComponentCardProps {
    header: string;
}

const ComponentCard: FC<IComponentCardProps> = ({ header }: IComponentCardProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: header, // Unique identifier for the draggable item
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <Card ref={setNodeRef} style={style} {...listeners} {...attributes}>
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