import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import { supabase } from "../../auth/supabaseClient";
import DashboardCard from "../../components/DashboardCard.jsx";
import { APP_VERSION } from "../../constants/appVersion.js";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { isPro, isPaid } from "../../utils/isPro.js";
import { isExpired } from "../../utils/isExpired.js";

const DeleteAccount = () => {
    return (
        <>
        <div className="card card-border">
                <div className="card-body">
                    <h1 className="card-title text-red-400">Danger Zone</h1>
                    <button className="btn btn-warning" onClick={() => setShowModal(true)}>Delete Account</button>
                </div>
        </div>

            {showModal && (
            <dialog open className="modal modal-open">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Delete Account</h3>
                    <p className="py-4">Are you sure? This will permanently delete your account and all associated data. This cannot be undone.</p>
                    <div className="modal-action">
                        <button className="btn" onClick={() => setShowModal(false)} disabled={deleting}>Cancel</button>
                        <button className="btn btn-error" onClick={handleDeleteUser} disabled={deleting}>
                            {deleting ? 'Deleting...' : 'Yes, Delete My Account'}
                        </button>
                    </div>
                </div>
                <div className="modal-backdrop" onClick={() => !deleting && setShowModal(false)} />
            </dialog>
        )}
        </>
    );
}

const Dashboard = () => {
    const { user, loading, profile } = useAuth();
    const name = user.user_metadata?.name || user.email?.split("@")[0] || "there";
    const email = user?.email;
    const userIsPro = isPro(profile);
    const userIsExpired = isExpired(profile);
    const hasPaid = isPaid(profile);
    const navigate = useNavigate();
    const remainingTrialDays = Math.ceil((new Date(profile?.trial_ends_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24)) ?? 0;
    const [showModal, setShowModal] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const handleDeleteDevice = async () => {
        await supabase.from('user_devices').delete().eq('user_id', user.id);
    };

    const handleDeleteUser = async () => {
        setDeleting(true);
        const {data, error } = await supabase.functions.invoke("delete-account", {
            body: {userId: user?.id}
        })

        if (error) {
            console.error(error);
            setDeleting(false);
            return;
        };
        await supabase.auth.signOut();
    }

    const handleManageAccount = async () => {
        const {data, error} = await supabase.functions.invoke("create-portal-session", {
            body: {customerId: profile?.stripe_customer_id}
        })

        if (error) return console.error(error);

        window.location.href = data.url;

    }
    
    const handleRenew = () => navigate('/pricing');

    const [deviceName, setDeviceName] = useState(undefined);                                                                      
                                                                                                                                
    useEffect(() => {                                                                                                             
        supabase                                                                                                                  
            .from('user_devices')                                                                                                 
            .select('device_name')
            .eq('user_id', user.id)                                                                                               
            .single()                                     
            .then(({ data }) => setDeviceName(data?.device_name ?? null));
        const channel = supabase                                                                                                  
                .channel('device-watch')                      
                .on(
                    'postgres_changes',
                    { event: '*', schema: 'public', table: 'user_devices', filter: `user_id=eq.${user.id}` },
                    (payload) => {                                                                                                    
                        if (payload.eventType === 'DELETE') {
                            setDeviceName(null);                                                                                      
                        } else {                                                                                                      
                            setDeviceName(payload.new.device_name ?? null);
                        }                                                                                                             
                    }                                         
                )
                .subscribe();

            return () => supabase.removeChannel(channel);                                                                             
        }, []); 
            

     return (
         <div className="p-10 flex flex-col items-center">
            <div className="card bg-white card-border w-[80vw]">
                <div className="flex items-center justify-between px-6 py-6">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold">Welcome, {name}</h1>
                        <p className="font-mono pt-2">{email}</p>
                    </div>
                    
                    <button className='btn btn-error' onClick={() => supabase.auth.signOut()}>Sign Out</button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center p-20 gap-20">
            <DashboardCard
            title={loading ? '...' : (hasPaid ? 'Pro' : (userIsExpired ? 'Expired' : 'Trial'))}
            buttonTitle={(profile?.stripe_customer_id ? 'Manage' : 'Subscribe')}
            subText={loading ? 'Loading...' :
                profile?.is_staff ? 'Subscription set by staff' :
                hasPaid ? `Renews on ${new Date(profile?.subscription_expires_at).toLocaleDateString(undefined, {timeZone: 'UTC'})}` :
                userIsExpired ? 'Subscription expired' :
                `${remainingTrialDays} days remaining on your Free Trial`}
            buttonHandler={profile?.stripe_customer_id ? handleManageAccount :  ( profile?.is_staff ? null : handleRenew )} />

            <DashboardCard 
            title={`${APP_VERSION}`} 
            buttonTitle={'Download'} 
            subText={'Latest Version'} 
            buttonHandler={() => navigate('/download')}/>

            <DashboardCard 
            title={'Registered Device'} 
            buttonTitle={'Remove Device'} 
            subText={deviceName === undefined ? 'Loading...' : deviceName || 'Device Not Registered'} 
            buttonHandler={handleDeleteDevice}/>
            </div>
            
         </div>
     );
}



export default Dashboard;