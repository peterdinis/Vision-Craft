'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    sales: number;
    status?: string;
    date: string | Date;
};

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'id',
        header: 'Id',
    },

    {
        accessorKey: 'name',
        header: 'Name',
    },

    {
        accessorKey: 'price',
        header: 'Price(Euros)',
    },

    {
        accessorKey: 'stock',
        header: 'Stock',
    },

    {
        accessorKey: 'sales',
        header: 'Sales',
    },

    {
        accessorKey: 'date',
        header: 'Added day',
    },
];
