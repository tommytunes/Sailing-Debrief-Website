import { useState } from 'react';
import { supabase } from './supabaseClient';
import { useAuth } from './AuthProvider';

export function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);
    const [isForgot, setIsForgot] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const {loading} = useAuth();

    const resetTransientState = () => {
        setError(null);
        setMessage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        if (isForgot) {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`,
            });
            if (error) return setError(error.message);
            setMessage(`If an account exists for ${email}, we sent a reset link. Check your inbox.`);
            return;
        }

        if (isSignUp) {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { data: { name } },
            });
            if (error) return setError(error.message);
            if (!data.session) {
                setMessage(`We sent a confirmation link to ${email}. Click it to finish signing up.`);
            }
        } else {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) setError(error.message);
        }
    }

    const title = isForgot ? 'Reset your password' : (isSignUp ? 'Create your account' : 'Welcome Back');
    const subtitle = isForgot
        ? 'Enter your email and we\'ll send you a reset link'
        : (isSignUp ? 'Start your 30-day free trial' : 'Log in to manage your account');
    const submitLabel = isForgot ? 'Send reset link' : (isSignUp ? 'Sign Up' : 'Log In');

    return (
        <div className='card card-xl w-75 card-border bg-white'>
            <h1 className='card card-title font-bold p-2'>{title}</h1>
            <p className='text-center text-sm text-gray-500'>{subtitle}</p>
            <form onSubmit={handleSubmit}>
                <div className='card card-body flex flex-col'>
                    <h2 className='text text-md font-bold'>{isForgot ? 'Forgot Password' : (isSignUp ? 'Sign Up' : 'Log In')}</h2>
                    {isSignUp && !isForgot &&
                    <input className='input' type='text' value={name} onChange={e => setName(e.target.value)} placeholder='John Doe' required/>
                    }
                    <input className='input' type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    {!isForgot &&
                    <input className='input' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    }
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {message && <p className="text-green-600 text-sm">{message}</p>}
                    <button className='btn' type="submit" disabled={loading || !!message}>{loading ? 'Loading...' : submitLabel}</button>
                    {isForgot ? (
                        <button className='btn' type="button" onClick={() => { setIsForgot(false); resetTransientState(); }}>
                            Back to log in
                        </button>
                    ) : (
                        <>
                            <button className='btn' type="button" onClick={() => { setIsSignUp(!isSignUp); resetTransientState(); }}>
                                {isSignUp ? 'Have an account? Log in' : 'Need an account? Sign up'}
                            </button>
                            {!isSignUp &&
                                <button type="button" className="link link-hover text-sm"
                                        onClick={() => { setIsForgot(true); resetTransientState(); }}>
                                    Forgot password?
                                </button>
                            }
                        </>
                    )}
                </div>
            </form>
        </div>
    )
  }

  export default LoginScreen;