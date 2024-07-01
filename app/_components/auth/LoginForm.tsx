'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { FC, FormEvent, useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useToast } from '@/components/ui/use-toast';
import { EyeOff, Eye } from 'lucide-react';

const LoginForm: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const loginUser = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (result?.error) {
                toast({
                    title: 'Something went wrong',
                    className: 'bg-red-500 text-white font-bold',
                    duration: 2000,
                });
            } else {
                toast({
                    title: 'Login done',
                    duration: 2000,
                    className: 'bg-green-500 text-white font-bold',
                });
                router.push('/dashboard');
            }
        } catch (error) {
            toast({
                title: 'Login failed',
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
                    <CardTitle className='text-2xl'>Login</CardTitle>
                </CardHeader>
                <form onSubmit={loginUser}>
                    <CardContent className='grid gap-4'>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                disabled={loading}
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
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

export default LoginForm;
