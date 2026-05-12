import GettingStartedFiles from "../../assets/gettingstarted-files.jpg";
import GettingStartedSettings from "../../assets/gettingstarted-settings.jpg";
import GettingStartedAudio from "../../assets/gettingstarted-audio.jpg";
import GettingStartedSelection from "../../assets/gettingstarted-selection.jpg";
import GettingStartedSaveLoad from "../../assets/gettingstarted-saveload.jpg";

const GettingStarted = () => {
    return (
        <div className="flex flex-col p-6 max-w-6xl">
            <div className="text-3xl mb-6 font-bold">Getting Started</div>

            <div className="flex flex-row gap-8 items-start">
                <div className="flex flex-col gap-6 flex-1 min-w-0">

                    <div className="flex flex-col gap-2">
                        <div className="text-xl font-semibold">1. Adding Video Data</div>
                        <p className="text-gray-400 leading-relaxed">
                            You can add video groups and each group will show up as a different source on the video player. The timestamp will be chosen automatically but can be adjusted if necessary.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-xl font-semibold">2. Adding Telemetry Data</div>
                        <p className="text-gray-400 leading-relaxed">
                            There are 2 ways to add telemetry data — using a <span className="font-mono text-sm bg-gray-700 px-1 rounded">.vkx</span> file or with a RaceSense URL.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="text-xl font-semibold">3. Adding Audio Data</div>
                        <p className="text-gray-400 leading-relaxed">
                            The timestamping on audio files is quite inconsistent, so it's recommended to follow the sync calibration steps if you wish to have accurate comms synced with your videos.
                        </p>
                    </div>

                </div>

                <div className="w-180 flex-shrink-0 rounded-lg flex items-end justify-end">
                    <span className="text-gray-400 text-sm"><img src={GettingStartedFiles}/></span>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-8 items-start">
                    <div className="flex flex-col gap-2">
                    <div className="text-xl font-semibold mt-6">4. Modify Playback Source</div>
                    <p className="text-gray-400 leading-relaxed w-100">You can modify the source of the playback by selecting the settings button in the top right. You can choose video group, map or graphs.</p>
                </div>

                <div className="justify-end">
                    <img src={GettingStartedSettings} className="w-50 ml-50 mt-2"/>
                </div>
                
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-8 items-start">
                    <div className="flex flex-col gap-2">
                    <div className="text-xl font-semibold mt-6">5. Selecting Boats and Offsetting video</div>
                    <p className="text-gray-400 leading-relaxed w-100">Once you add your data you need to select your boat that you want presented by selecting the dropdown and checking them off. The offsetting flag will let you move your video if its slightly off.</p>
                </div>

                <div className="justify-end">
                    <img src={GettingStartedSelection} className="w-50 ml-50 mt-2"/>
                </div>
                
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-8 items-start">
                    <div className="flex flex-col gap-2">
                    <div className="text-xl font-semibold mt-6">6. Mute/Unmute</div>
                    <p className="text-gray-400 leading-relaxed w-100">You can click on the groups to mute or unmute them.</p>
                </div>

                <div className="justify-end">
                    <img src={GettingStartedAudio} className="w-50 ml-50 mt-2"/>
                </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row gap-8 items-start">
                    <div className="flex flex-col gap-2">
                    <div className="text-xl font-semibold mt-6">7. Save / Load Project</div>
                    <p className="text-gray-400 leading-relaxed w-100">Your progress will be lost if you close the application, so it's imporant to save the project once you are done and it's possible to load it when reopening the app.</p>
                </div>

                <div className="justify-end">
                    <img src={GettingStartedSaveLoad} className="w-50 ml-50 mt-4"/>
                </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                
                <div className="text-xl font-semibold mt-6">8. Controls</div>
                <p className="text-gray-400 leading-relaxed w-100"><span className="font-bold text-black">Space Bar</span> is used to pause and play the videos. <span className="font-bold text-black">← →</span> control -1 or +1 second, <span className="font-bold text-black">Z & C</span> control -10 or +10 sec and <span className="font-bold text-black">A & D</span> control -60 or +60 seconds.</p>

            </div>
        </div>
    );
};

export default GettingStarted;
