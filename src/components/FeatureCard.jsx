
const FeatureCard = ({title, subText, image}) => {
    return (
        <div className="card card-xl bg-white card-border max-w-90">
            <div className="card card-title card-body flex flex-col ">
                {image}
                <h1 className="text text-xl font-bold">{title}</h1>
                <p className="text-sm font-mono text-gray-300">{subText}</p>
            </div>
        </div>
    );
};

export default FeatureCard;