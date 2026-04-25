import DownloadCard from "../../components/DownloadCard";
import { APP_VERSION } from "../../constants/appVersion";
const Download = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-mono mb-5 text-blue-500">Download</h1>
            <h1 className="mb-30 text-6xl font-bold">Sailing Debrief {APP_VERSION}</h1>
            <div className="flex flex-row gap-4">
                <DownloadCard title={'MacOs Apple Silicon'} filePath={'https://github.com/tommytunes/Sailing-Debrief-Website/releases/download/1.1.1/Sailing.Debrief-1.1.1-arm64.dmg'} />
                <DownloadCard title={'MacOs Intel'} filePath={'https://github.com/tommytunes/Sailing-Debrief-Website/releases/download/1.1.1/Sailing.Debrief-1.1.1.dmg'} />
                <DownloadCard title={'Windows 10 & 11'} filePath={'https://github.com/tommytunes/Sailing-Debrief-Website/releases/download/1.1.1/Sailing.Debrief.Setup.1.1.1.exe'} />
            </div>
        </div>
        
    );
};

export default Download;