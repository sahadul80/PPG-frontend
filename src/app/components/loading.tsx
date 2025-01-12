"use client"
import React from 'react';
import Image from 'next/image';

const Loading: React.FC = () => {
    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
        >
            <div className="animate-spin">
                <Image
                    src="/img/ppg_logo.png"
                    alt="Loading"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default Loading;
