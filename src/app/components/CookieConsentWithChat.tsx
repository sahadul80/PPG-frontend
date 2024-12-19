import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Chat from './chat';
import ChatBot from './chatBot';

const GA_MEASUREMENT_ID = 'G-MPF0P0E6DK'; // Replace this with your GA4 Measurement ID

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

export default function CookieConsentWithChat() {
    const [isAccepted, setIsAccepted] = useState(false);

    useEffect(() => {
        const consent = Cookies.get('consent');
        if (consent === 'accepted') {
            setIsAccepted(true);
            loadGoogleAnalytics();
        }
    }, []);

    const loadGoogleAnalytics = () => {
        if (typeof window === 'undefined') return;

        // Avoid loading GA multiple times
        if (!document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
            // Inject GA script dynamically
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
            script.async = true;
            document.head.appendChild(script);

            // Initialize GA
            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
                window.dataLayer.push(args);
            }
            window.gtag = gtag;

            window.gtag('js', new Date());
            window.gtag('config', GA_MEASUREMENT_ID);
        }
    };

    const acceptCookies = () => {
        Cookies.set('consent', 'accepted', { expires: 365 });
        setIsAccepted(true);
        loadGoogleAnalytics(); // Load Google Analytics after accepting cookies
    };

    const declineCookies = () => {
        Cookies.set('consent', 'declined', { expires: 365 });
        alert('You have declined cookies. Some functionalities may not work properly.');
    };

    return (
        <div>
            {!isAccepted ? (
                <div className="office-card">
                    <h2>Cookie Consent</h2>
                    <p>We use cookies to improve your experience and collect analytics data. Do you accept?</p>
                    <div className="flex justify-between">
                        <button
                            className="p-2"
                            onClick={acceptCookies}
                        >
                            Accept
                        </button>
                        <button
                            className="p-2"
                            onClick={declineCookies}
                        >
                            Decline
                        </button>
                    </div>
                </div>
            ) : (
                <Chat />
            )}
        </div>
    );
}
