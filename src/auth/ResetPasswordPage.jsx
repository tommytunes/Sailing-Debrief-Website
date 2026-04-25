import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

export function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);
    const [done, setDone] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
            if (event === 'PASSWORD_RECOVERY') setReady(true);
        });
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) setReady(true);
        });
        return () => subscription.unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const { error } = await supabase.auth.updateUser({ password });
        if (error) return setError(error.message);
        setDone(true);
        setTimeout(() => navigate('/account'), 1500);
    };

    if (!ready) return <p className="p-6">Validating reset link…</p>;
    if (done) return <p className="p-6 text-green-600">Password updated. Redirecting…</p>;

    return (
        <div className="flex flex-1 justify-center items-center bg-gray-100">
            <form onSubmit={handleSubmit} className="card card-xl w-75 card-border bg-white">
                <div className="card card-body flex flex-col">
                    <h1 className="card card-title font-bold p-2">Set a new password</h1>
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="New password"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className="btn" type="submit">Update password</button>
                </div>
            </form>
        </div>
    );
}

export default ResetPasswordPage;
