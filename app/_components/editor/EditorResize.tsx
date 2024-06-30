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
            <ResizablePanel>
                <EditorComponents />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>Main Page</ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>Right Sidebar</ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default EditorResize;
