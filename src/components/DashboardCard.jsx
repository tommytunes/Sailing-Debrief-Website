
const DashboardCard = ({title, buttonTitle, buttonHandler, subText}) => {
    return (
        <div className="card bg-white card-border w-64">
            <div className="card-body flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-sm font-mono text-gray-300">{subText}</p>
                <button className="btn btn-primary mt-auto" onClick={buttonHandler}>{buttonTitle}</button>
            </div>
        </div>
    );
}

export default DashboardCard;