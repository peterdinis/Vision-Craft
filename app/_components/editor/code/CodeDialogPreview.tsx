import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { FC } from 'react';
import Header from '../../shared/Header';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

const CodeDialogPreview: FC = () => {
    const code = "console.log('Code Mirror!');";

    return (
        <>
            <Dialog>
                <DialogTrigger>Code Preview</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <Header text='Code Preview' />
                        </DialogTitle>
                        <DialogDescription>
                            <CodeMirror
                                className='mt-5'
                                value={code}
                                height='100px'
                                theme={vscodeDark}
                            />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CodeDialogPreview;
