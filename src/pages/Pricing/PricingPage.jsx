import { useAuth } from "../../auth/AuthProvider";
import { supabase } from "../../auth/supabaseClient";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PricingPage = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [isMonthly, setIsMonthly] = useState(true);
    const handleCheckout = async () => {
        const { data, error } = await supabase.functions.invoke("create-checkout", {
            body: {userId: user?.id, userEmail: user?.email, priceKey: (isMonthly ? 'priceMonth' : 'priceYear') }
        })

        if (error) return console.error(error);
        window.location.href = data.url;
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-mono mb-5 text-blue-500 pt-5">Pricing</h1>
            <h1 className="mb-15 text-6xl font-bold">One simple plan.</h1>
            <h1 className="font-mono text-gray-400 mb-10">Free 30 day trial no card needed</h1>

            <div className="flex flex-row mb-10 gap-4">
                <button className={`btn btn-lg ${isMonthly ? 'btn-primary' : ''}`} onClick={() => setIsMonthly(!isMonthly)}>Monthly</button>
                <button className={`btn btn-lg ${!isMonthly ? 'btn-primary' : ''}`} onClick={() => setIsMonthly(!isMonthly)}>Annual - save 30%</button>
            </div>
            <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-6">

                <div className="card card-border bg-white w-90 h-125">
                    <div className="card-body">
                        <h1>Free Trial</h1>
                        <h1 className="card-title text-4xl">30 Days</h1>
                        <h1 className="text text-gray-400">The full app. No card.</h1>
                        <ul>
                            <li>✓ All pro features</li>
                        </ul>
                        <button className="btn mt-auto" onClick={() => navigate("/account")}>Start Trial</button>
                    </div>    
                </div>

                <div className="card card-border bg-black w-90 h-125">
                    <div className="card-body">
                        <h1 className="text-white">Pro</h1>
                        <div className="flex flex-row">
                            <h1 className="card-title text-4xl text-white">{ isMonthly ? '15€' : '125€'}</h1>
                            <h1 className="text-gray-400 mt-auto ml-5">{ isMonthly ? '/ month' : '/ year'}</h1>
                        </div>
                        
                        <h1 className="text text-gray-400">The full app. No card.</h1>
                        <ul className="flex flex-col gap-4">
                            <li className="text-white">✓ Multi-angle synced video</li>
                            <li className="text-white">✓ Easily sync onboard audio</li>
                            <li className="text-white">✓ Racesense import</li>
                            <li className="text-white">✓ Vakaros telemery overlay</li>
                            <li className="text-white">✓ Heel / speed / heading / pitch graphs</li>
                            <li className="text-white">✓ Gps track thats time synced to your video</li>
                            <li className="text-white">✓ One registered computer at a time</li>
                            <li className="text-white">✓ All future updates included</li>
                        </ul>
                        <button className="btn btn-primary mt-auto" onClick={(!user ? () => navigate("/account") : handleCheckout)}>Get Pro</button>
                    </div>    
                </div>
            </div>
            <div className="pb-5">
            <div className="card card-border bg-gray-100 w-186 h-40">
                <div className="card card-body">
                    <h1 className="card-title text-2xl">Teams and Federations</h1>
                    <h1 className="text-gray-400">5+ devices registered, consolidated billing, onboarding with your coaching staff</h1>
                    <h1 className="mt-auto font-bold">Contact for more details: team@sailing-debrief.com</h1>
                </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default PricingPage;