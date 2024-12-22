"use client";
import React, { useEffect, useState } from "react";
import Team from "./team";

const TeamUpdate: React.FC = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch("/team/team.json"); // Ensure team.json is in the public folder
                if (!response.ok) {
                    throw new Error("Failed to fetch team data");
                }
                const data = await response.json();
                setTeamMembers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTeamMembers();
    }, []);

    return (
        <>
            <div>
                <Team members={teamMembers} />
            </div>
        </>
    );
};

export default TeamUpdate;
