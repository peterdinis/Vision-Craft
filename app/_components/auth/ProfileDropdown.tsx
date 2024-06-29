'use client';

import { FC } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSession, signOut } from 'next-auth/react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

const ProfileDropdown: FC = () => {
    const { toast } = useToast();
    const { data: session } = useSession();

    const loggedUser = session?.user?.email;

    const router = useRouter();

    const loggedOut = async () => {
        try {
            await signOut({
                redirect: false,
            });
            toast({
                title: 'Successfully logged out',
                duration: 3000,
                className: 'bg-green-500 text-white font-bold',
            });
            router.push('/login');
        } catch (error) {
            console.error('Error logging out:', error);
            toast({
                title: 'Failed to log out',
                duration: 3000,
                className: 'bg-red-500 text-white font-bold',
            });
        }
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{loggedUser}</DropdownMenuItem>
                <DropdownMenuItem onClick={loggedOut}>Logout </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;
