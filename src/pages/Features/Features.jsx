import Background from "../../assets/feature_background.jpg";
import Graphs from "../../assets/features_graphs.jpg";
import FeatureCard from "../../components/FeatureCard";
import { Video } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Mic } from "lucide-react";
import { MapPin } from "lucide-react";
import { FolderDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {

    const navigate = useNavigate();
    return (
        <div className="flex flex-col">
            <div className="relative">
                <div className="min-h-screen">
                    <img src={Background} className="brightness-50 w-full object-cover"/>
                </div>

            
                <div className="flex flex-col absolute inset-0 m-auto h-fit text-center">
                    <div className="text-blue-100 text-6xl font-bold"><p>Sailing Debrief</p></div>
                    <div className="text-gray-300 text-xl font-bold"><p>A desktop application for teams and coaches.<br/> Pair video and audio with GPS and boat telemetry on a single timeline. <br/>  </p></div>
                </div>
            </div>

            <div className="bg-gray-200 p-12 flex flex-col items-center text-center">
                <h2 className="text-4xl font-bold text-gray-800">Import RaceSense</h2>                                                                          
                <p className="text-gray-600 mt-4 max-w-xl">
                      Seamlessly import your RaceSense data through the tracking URL to sync GPS tracks and telemetry with your video footage.                                            
                </p>  
                <p className="text-gray-600 mt-4 max-w-xl text-2xl font-bold">View any boats telemetry.</p>                                                                                                                                     
            </div>
            <div className="flex flex-row gap-4 justify-center mt-5 mb-5">
                <FeatureCard 
                title={"Multi Angle Synced Video"} 
                subText={"Have multiple cameras synced together to make onboard video review easier."} 
                image={<Video />} />

                <FeatureCard 
                title={"Vakaros Telemetry Overlay"} 
                subText={"Overlay your heel, heading, speed and pitch on your video to get better insights from your data."} 
                image={<ChartLine />} />

                <FeatureCard 
                title={"Sync Onboard Audio"}
                subText={"Easily sync your onboard audio, that's recorded with any microphone. Learn more by listening to your on water communication."} 
                image={<Mic />} />
            </div>

            <div className="p-12 flex flex-row items-center text-center">
                <div className="flex flex-col">
                    <p className="text-3xl font-bold">Telemetry Graphs</p>
                    <p className="max-w-150">Overlay your training partners data on a graph to compare or view your telemetry over a period of time.</p>
                </div>
                <img src={Graphs} className="w-200 ml-auto"/>
            </div>

            <div className="flex flex-row gap-4 justify-center mt-5 mb-5">
                <FeatureCard 
                title={"GPS Tracks"} 
                subText={"Have your gps track synced with your video to make debriefing easier."} 
                image={<MapPin />} />

                <FeatureCard 
                title={"Locally Read Video"} 
                subText={"All files are being played locally off your hard drive, so there's no buffering or upload to be done when needing to debrief."} 
                image={<FolderDown />} />

            </div>
            <div className="mt-2 mb-2">
                <p className="text-2xl text-center font-bold pb-2">Features to come</p>
                <p className="text-center">360 Video Player</p>
                <p className="text-center">Wind direction algorithm</p>
                <p className="text-center">Email team@sailing-debrief.com for feature requests</p>
            </div>
            
            <div className="bg-blue-600 p-12 flex flex-col items-center text-center gap-4">
                <h2 className="text-4xl font-bold text-white">Ready to debrief?</h2>                                                                          
                <p className="text-white mb-5 max-w-xl">
                    30-day free trial, no credit card needed.
                </p>
                <button className="btn btn-lg" onClick={() => navigate("/download")}>Download</button>  
            </div>
            
        </div>

        
    );
};

export default Features;