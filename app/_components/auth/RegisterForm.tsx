'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FC, useState, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { EyeOff, Eye } from 'lucide-react';

const RegisterForm: FC = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { toast } = useToast();

    const registerUser = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('/api/register', {
                name,
                email,
                password,
            });
            toast({
                title: 'Register done',
                duration: 2000,
                className: 'bg-green-500 text-white font-bold',
            });
            router.push('/login');
        } catch (error) {
            toast({
                title: 'Register failed',
                className: 'bg-red-500 text-white font-bold',
                duration: 2000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mt-20 flex justify-center align-top'>
            <Card className='w-full max-w-sm'>
                <CardHeader>
                    <CardTitle className='text-2xl'>Register</CardTitle>
                </CardHeader>
                <form onSubmit={registerUser}>
                    <CardContent className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='name'>Name</Label>
                            <Input
                                id='name'
                                type='text'
                                required
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                disabled={loading}
                            />
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                id='email'
                                type='email'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                disabled={loading}
                            />
                        </div>
                        <div className='relative grid gap-2'>
                            <Label htmlFor='password'>Password</Label>
                            <Input
                                disabled={loading}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                required
                            />
                            <button
                                type='button'
                                className='absolute right-2 top-1/2 mt-3 -translate-y-1/2 transform'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Eye /> : <EyeOff />}
                            </button>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full' disabled={loading}>
                            {loading ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default RegisterForm;
