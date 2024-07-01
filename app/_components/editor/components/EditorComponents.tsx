import { ScrollArea } from '@/components/ui/scroll-area';
import { FC } from 'react';
import EditorComponentsList from './EditorComponentsList';

const EditorComponents: FC = () => {
    return (
        <ScrollArea className='max-w[400px] flex h-full w-[400px] flex-grow flex-col gap-2 overflow-y-auto border-l-2 border-muted bg-background p-4'>
            <EditorComponentsList />
        </ScrollArea>
    );
};

export default EditorComponents;
