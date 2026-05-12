import { useNavigate } from 'react-router-dom';

const SignUpConfirm = () => {

    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-4'>
            <h1 className="text-green-400 text-4xl">Sign up Confirmed, Sign in on the desktop app to continue.</h1>
            <button onClick={() => navigate("/getting-started")} className='btn'>Visit Getting Started</button>
        </div>
    );
};

export default SignUpConfirm;
