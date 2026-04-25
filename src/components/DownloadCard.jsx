


const DownloadCard = ({title, filePath}) => {

    const fileName = filePath.split("/").pop();

    return (
        <div className="card card-xl bg-white card-border h-35 w-90">
            <div className="card card-title flex flex-col ">
                <h1 className="text text-3xl">{title}</h1>
                <p className="text-sm font-mono text-gray-300">{fileName}</p>
                <a href={filePath} download>
                    <button className="btn btn-primary">Download</button>
                </a>
            </div>
        </div>
    );
}

export default DownloadCard;