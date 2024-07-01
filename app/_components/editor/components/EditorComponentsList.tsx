import { FC } from 'react';
import ComponentCard from './ComponentCard';

const EditorComponentsList: FC = () => {
    return (
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-4'>
            <ComponentCard header='Paragaph' />
            <ComponentCard header='Link' />
            <ComponentCard header='Nav' />
            <ComponentCard header='Paragaph' />
            <ComponentCard header='Link' />
            <ComponentCard header='Nav' />
            <ComponentCard header='Paragaph' />
            <ComponentCard header='Link' />
            <ComponentCard header='Nav' />
            <ComponentCard header='Paragaph' />
            <ComponentCard header='Link' />
            <ComponentCard header='Nav' />
            <ComponentCard header='Paragaph' />
            <ComponentCard header='Link' />
            <ComponentCard header='Nav' />
            <ComponentCard header='Paragaph' />
            <ComponentCard header='Link' />
            <ComponentCard header='Nav' />
        </div>
    );
};

export default EditorComponentsList;
