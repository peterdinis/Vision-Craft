'use client';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { useState, useMemo } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[] | any;
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);

    const currentData = useMemo(() => {
        if (!data || !Array.isArray(data)) return [];
        const start = pageIndex * pageSize;
        const end = start + pageSize;
        return data.slice(start, end);
    }, [data, pageIndex, pageSize]);

    const table = useReactTable({
        data: currentData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const totalPages = data ? Math.ceil(data.length / pageSize) : 0;

    return (
        <div className='rounded-md border'>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext(),
                                          )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && 'selected'}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className='h-24 text-center'
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center space-x-2'>
                    <button
                        onClick={() => setPageIndex(0)}
                        disabled={pageIndex === 0}
                        className='rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 disabled:opacity-50'
                    >
                        {'<<'}
                    </button>
                    <button
                        onClick={() => setPageIndex(pageIndex - 1)}
                        disabled={pageIndex === 0}
                        className='rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 disabled:opacity-50'
                    >
                        {'<'}
                    </button>
                    <span className='text-sm text-gray-700 dark:text-white'>
                        Page {pageIndex + 1} of {totalPages}
                    </span>
                    <button
                        onClick={() => setPageIndex(pageIndex + 1)}
                        disabled={pageIndex + 1 === totalPages}
                        className='rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 disabled:opacity-50'
                    >
                        {'>'}
                    </button>
                    <button
                        onClick={() => setPageIndex(totalPages - 1)}
                        disabled={pageIndex + 1 === totalPages}
                        className='rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 disabled:opacity-50'
                    >
                        {'>>'}
                    </button>
                </div>
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className='rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700'
                >
                    {[5, 10, 20].map((size) => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
