import { useAuth } from "../../auth/AuthProvider";

const Dashboard = () => {
    const { user, loading } = useAuth();
    const name = user.user_metadata?.name || user.email?.split("@")[0] || "there";

     return (
         <div className="p-6">
             <h1 className="text-2xl font-bold">Welcome, {name}</h1>
         </div>
     );
}

export default Dashboard;