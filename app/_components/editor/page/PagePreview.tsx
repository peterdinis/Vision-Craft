import { FC, useState } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';

const PagePreview: FC = () => {
    const [components, setComponents] = useState<string[]>([]);

    const { isOver, setNodeRef } = useDroppable({
        id: 'drop-area',
    });

    const displayCodePreview = () => {
        const generatedHtml = components.map((component, index) => {
            switch (component) {
                case 'Paragraph':
                    return `<p key=${index}>This is a paragraph</p>`;
                case 'Link':
                    return `<a href="#" key=${index}>This is a link</a>`;
                case 'Nav':
                    return `<nav key=${index}>This is a nav</nav>`;
                default:
                    return null;
            }
        }).join('');
        console.log(generatedHtml);
    };

    return (
        <DndContext
            onDragEnd={(event) => {
                const { over, active } = event;
                if (over && over.id === 'drop-area') {
                    setComponents((prev) => [...prev, active.id as string]);
                }
            }}
        >
            <div className="flex w-full h-full">
                <div className="float-right">
                    <Button onClick={displayCodePreview} variant={"ghost"}>
                        Code preview
                    </Button>
                </div>
                <div className={`p-4 mt-10 w-full flex justify-center align-top ${isOver ? 'bg-gray-200' : ''}`} ref={setNodeRef}>
                    {components.map((component, index) => {
                        switch (component) {
                            case 'Paragraph':
                                return <p key={index}>This is a paragraph</p>;
                            case 'Link':
                                return <a key={index} href="#">This is a link</a>;
                            case 'Nav':
                                return <nav key={index}>This is a nav</nav>;
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
        </DndContext>
    );
};

export default PagePreview;