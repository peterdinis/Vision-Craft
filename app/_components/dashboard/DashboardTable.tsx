'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FC } from 'react';
import { DataTable } from '../shared/GlobalTable';
import { columns } from './columns';

interface IDashboardTableProps {
    title: string;
    data: any;
}

const DashboardTable: FC<IDashboardTableProps> = ({
    title,
    data,
}: IDashboardTableProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='prose-h1: prose text-center text-xl font-bold dark:text-white'>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <DataTable columns={columns} data={data} />
            </CardContent>
        </Card>
    );
};

export default DashboardTable;
