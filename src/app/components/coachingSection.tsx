"use client"
import React from "react";
import Image from "next/image";
interface CoachingBlock {
    id: number;
    icon: string;
    title: string;
    description: string;
    link: string;
}

const coachingBlocks: CoachingBlock[] = [
    {
        id: 1,
        icon: "img/training-1.jpg",
        title: "TOEFL Coaching",
        description: "Equally blame belongs to those who fail their duty through weak shrinking.",
        link: "coaching-details",
    },
    {
        id: 2,
        icon: "img/training-2.jpg",
        title: "Graduate Re-Exam",
        description: "Equally blame belongs to those who fail their duty through weak shrinking.",
        link: "coaching-details",
    },
    {
        id: 3,
        icon: "img/training-3.jpg",
        title: "Scholastic Apti",
        description: "Equally blame belongs to those who fail their duty through weak shrinking.",
        link: "coaching-details",
    },
    {
        id: 4,
        icon: "img/training-4.jpg",
        title: "Management Test",
        description: "Equally blame belongs to those who fail their duty through weak shrinking.",
        link: "coaching-details",
    },
];

const CoachingSection: React.FC = () => {
    return (
        <section className="coaching-section">
            <div className="auto-container">
                <div className="sec-title centred">
                    <h2>OUR COACHING</h2>
                    <span className="sub-title">
                        Excel's Successful Instructing <br />
                        Center is Migrate.
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {coachingBlocks.map((block) => (
                        <div key={block.id} className="coaching-block">
                            <div className="coaching-block-inner">
                                <div className="icon-box">
                                    <img src={block.icon} alt={block.title} className="icon" />
                                    <span className="count-text">{`0${block.id}`}</span>
                                </div>
                                <h3>
                                    <a href={block.link}>{block.title}</a>
                                </h3>
                                <p>{block.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="more-content">
                    <h5>
                        Assisting with visa preparation for{" "}
                        <a href="index-2">eligibility exams</a> is a service offered.
                    </h5>
                    <div className="btn-box">
                        <a className="theme-btn btn-one" href="index-2">
                            <span>More Details</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoachingSection;
