import company from "../assets/company.svg";

export default function Companies() {
    return (
        <div className="flex flex-col items-center w-full bg-gradient-to-r from-[#9ccde7] to-[#84b6d3] text-white text-center p-4">
            <div className="flex flex-wrap justify-center gap-4 m-auto md:gap-16 lg:gap-20">
                <div className="p-2">
                    <img
                        src={company}
                        className="w-24 h-auto md:w-32 lg:w-40"
                        alt="Gerivia"
                    />
                </div>
                <div className="p-2">
                    <img
                        src={company}
                        className="w-24 h-auto md:w-32 lg:w-40"
                        alt="Event Africa"
                    />
                </div>
                <div className="p-2">
                    <img
                        src={company}
                        className="w-24 h-auto md:w-32 lg:w-40"
                        alt="Itadada"
                    />
                </div>
                <div className="p-2">
                    <img
                        src={company}
                        className="w-24 h-auto md:w-32 lg:w-40"
                        alt="RedDot"
                    />
                </div>
            </div>
        </div>
    );
}
