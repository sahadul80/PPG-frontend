"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
    children,
    href,
    className,
    ...props
}) => {
    const router = useRouter();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        const body = document.querySelector("body");
        const overlay = document.createElement("div");
        overlay.classList.add("page-transition-overlay");
        overlay.innerHTML = `<image src="/img/brand-logo.png" alt="Loading" class="loading-logo" />`;

        document.body.appendChild(overlay); // Add overlay to body

        body?.classList.add("page-transition", "page-transition-active");

        await sleep(250); // Delay before navigation
        router.push(href);
        await sleep(250); // Keep the overlay visible briefly

        body?.classList.remove("page-transition", "page-transition-active");
        overlay.remove(); // Remove the overlay
    };

    return (
        <Link {...props} href={href} onClick={handleTransition} className={className}>
            {children}
        </Link>
    );
};
