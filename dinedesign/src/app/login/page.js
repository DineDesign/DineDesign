'use client';
import LoginButton from '../components/Login';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function LoginPage() {
    const { user, error, isLoading } = useUser();

    return (
        <>
            <LoginButton />
        </>
    )
}