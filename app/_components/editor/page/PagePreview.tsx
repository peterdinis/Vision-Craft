import type { FC } from 'react';
import CodeDialogPreview from '../code/CodeDialogPreview';

const PagePreview: FC = () => {
    return (
        <div className='flex h-full w-full'>
            <div className='float-right'>
                <CodeDialogPreview />
            </div>
            <div className='mt-10 flex w-full justify-center p-4 align-top'>
                DROP HERE
            </div>
        </div>
    );
};

export default PagePreview;
