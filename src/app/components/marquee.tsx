"use client"
import React from "react";
import Image from "next/image";
type MarqueeProps = {
    items: Array<{ src: string; alt: string; height?: number; margin?: string }>;
    duration?: number; // Duration of animation in seconds
    gradientColor?: string; // Gradient color for the overlay
    gradientWidth?: string; // Gradient width
};

const Marquee: React.FC<MarqueeProps> = ({
    items,
    duration = 60,
    gradientColor = "rgba(248, 251, 253, 1), rgba(248, 251, 253, 0)",
    gradientWidth = "200px",
}) => {
    return (
        <>
            <div className="demo-marquee">
                <div
                    className="marquee-container"
                    style={{
                        ["--pause-on-hover" as any]: "paused",
                        ["--pause-on-click" as any]: "paused",
                        ["--width" as any]: "100%",
                        ["--transform" as any]: "none",
                    }}
                >
                    <div
                        className="overlay"
                        style={{
                            ["--gradient-color" as any]: gradientColor,
                            ["--gradient-width" as any]: gradientWidth,
                        }}
                    />
                    <div
                        className="marquee"
                        style={{
                            ["--play" as any]: "running",
                            ["--direction" as any]: "normal",
                            ["--duration" as any]: `${duration}s`,
                            ["--delay" as any]: "0s",
                            ["--iteration-count" as any]: "infinite",
                            ["--min-width" as any]: "auto",
                        }}
                    >
                        <div className="initial-child-container">
                            {items.map((item, index) => (
                                <div className="child" key={index} style={{ ["--transform" as any]: "none" }}>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        style={{
                                            width: "100px", // Set a fixed width
                                            height: "100px", // Set a fixed height
                                            objectFit: "contain", // Ensure the image is scaled down proportionally without cropping
                                            margin: item.margin || "80px 40px 0px",
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Marquee;

