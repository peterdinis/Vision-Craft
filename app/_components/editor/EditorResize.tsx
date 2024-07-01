'use client';

import { ChangeEvent, FC, useState } from 'react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import EditorComponents from './components/EditorComponents';
import { Button } from '@/components/ui/button';
import PagePreview from './page/PagePreview';

const EditorResize: FC = () => {
    const [title, setTitle] = useState('Your website');
    const [isEditing, setIsEditing] = useState(false);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    return (
        <main className='flex w-full flex-col'>
            <div className='flex items-center justify-between gap-3 border-b-2 p-4'>
                {isEditing ? (
                    <input
                        className='mt-5 text-balance text-xl font-bold'
                        value={title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoFocus
                    />
                ) : (
                    <h2
                        className='mt-5 truncate text-balance text-xl font-bold'
                        onDoubleClick={handleDoubleClick}
                    >
                        {title}
                    </h2>
                )}
                <Button variant='default'>Save</Button>
            </div>

            <div className='mt-5 flex w-full justify-between gap-2'>
                <ResizablePanelGroup direction='horizontal'>
                    <ResizablePanel minSize={20} maxSize={80}>
                        <EditorComponents />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel minSize={0} maxSize={80}>
                        <PagePreview />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </main>
    );
};

export default EditorResize;
