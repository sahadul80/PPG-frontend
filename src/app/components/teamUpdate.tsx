import React from "react";
import Team from "./team";

const teamMembers = [
    {
        id: 1,
        name: "Sahadul Haque",
        role: "Founder CEO",
        image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png",
        socialLinks: {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
        },
    },
    {
        id: 2,
        name: "Sarah Daeva",
        role: "Marketing",
        image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png",
        socialLinks: {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
        },
    },
    {
        id: 3,
        name: "Abdullah Al Noman",
        role: "Developer",
        image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png",
        socialLinks: {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
        },
    },

    {
        id: 4,
        name: "Mohtashin Nishat",
        role: "Engineeer",
        image: "https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png",
        socialLinks: {
            twitter: "https://twitter.com",
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
        },
    },
];

const TeamUpdate: React.FC = () => {
    return (
        <>
            <div>
                <Team members={teamMembers} />
            </div>
        </>
    );
};

export default TeamUpdate;
