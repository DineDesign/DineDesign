'use client';
import { useState } from 'react';
import LoginButton from '../components/Login';
import { useUser } from '@auth0/nextjs-auth0/client';
import { TextField, Button, CircularProgress, Snackbar } from '@mui/material';
import { LockOutlined, MailOutline } from '@mui/icons-material';

export default function LoginPage() {
    const { user, error, isLoading } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Implement your login logic here
        // For now, we'll just show an error message
        setShowError(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                    <p className="text-gray-600 mt-2">Please sign in to your account</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                <div className="relative">
                    <MailOutline className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 z-10" />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: <div style={{ width: '24px' }} />,
                            style: { paddingLeft: '36px' },
                        }}
                    />
                </div>

                <div className="relative">
                    <LockOutlined className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 z-10" />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: <div style={{ width: '24px' }} />,
                            style: { paddingLeft: '36px' },
                        }}
                    />
                </div>


                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                    </Button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">Or sign in with</p>
                    <div className="mt-4">
                        <LoginButton />
                    </div>
                </div>

                <Snackbar
                    open={showError}
                    autoHideDuration={6000}
                    onClose={() => setShowError(false)}
                    message="Invalid email or password"
                />
            </div>
        </div>
    );
}