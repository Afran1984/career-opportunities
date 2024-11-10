"use client";
import CountUp from "react-countup";

const stats = [
    {
        num: 1,
        text: "Years of Experience"
    },
    {
        num: 3,
        text: "Project Completed"
    },
    {
        num: 4,
        text: "Technologies mastered"
    },
    {
        num: 170,
        text: "Code Commits"
    },
];

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[40vw] mx-auto lg:max-w-none">
                    {stats.map((stat,index) =>{
                      return <div className="flex-1 flex items-center gap-6 justify-center lg:justify-start" key={index}>
                        <CountUp end={stat.num} duration={5} delay={2} className="text-3xl lg:text-3xl font-extrabold"></CountUp>
                        <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
                      </div>  
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;