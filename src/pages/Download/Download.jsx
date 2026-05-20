import DownloadCard from "../../components/DownloadCard";
import { APP_VERSION } from "../../constants/appVersion";
import { useState } from 'react';
import WindowsWarning from "../../assets/windows.jpg"
const Download = () => {
    const [showWin, setShowWin] = useState(false);
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-mono mb-5 text-blue-500">Download</h1>
            <h1 className="mb-30 text-4xl lg:text-6xl font-bold">Sailing Debrief {APP_VERSION}</h1>
            <div className="flex flex-col lg:flex-row gap-4">
                <DownloadCard title={'MacOs Apple Silicon'} filePath={'https://github.com/tommytunes/Sailing-Debrief-Website/releases/download/1.2.2/Sailing.Debrief-1.2.2-arm64.dmg'} />
                <DownloadCard title={'MacOs Intel'} filePath={'https://github.com/tommytunes/Sailing-Debrief-Website/releases/download/1.2.2/Sailing.Debrief-1.2.2.dmg'} />
                <DownloadCard title={'Windows 10 & 11'} filePath={'https://github.com/tommytunes/Sailing-Debrief-Website/releases/download/1.2.2/Sailing.Debrief.Setup.1.2.2.exe'} buttonHandler={() => setShowWin(true)}/>

                {showWin && (
                <dialog open className="modal modal-open">
                    <div className="modal-box">
                        <h1 className="font-bold text-xl">Windows Installation Instructions</h1>
                        <h1 className="text-red-500 font-bold">If updating please ensure that you uninstall the old version before installing the new one</h1>
                        <h1 className="font-bold">To install the application you'll need to hit more info and then hit RUN ANYWAY. I ensure you the application is safe, it is just very costly to get this message removed.</h1>
                        <img src={WindowsWarning} />
                        <div className="modal-action">
                            <button className="btn" onClick={() => setShowWin(false)}>Cancel</button>
                        </div>
                    </div>
                    <div className="modal-backdrop" onClick={() => setShowWin(false)} />
                </dialog>
                )}
            </div>
        </div>
        
    );
};

export default Download;