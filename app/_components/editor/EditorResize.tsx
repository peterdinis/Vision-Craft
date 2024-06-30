import { FC } from 'react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import EditorComponents from './EditorComponents';

const EditorResize: FC = () => {
    return (
        <ResizablePanelGroup direction='horizontal' className='mt-10'>
            <ResizablePanel minSize={20} maxSize={80}>
                <EditorComponents />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel minSize={0} maxSize={80}>Main Page</ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default EditorResize;