//import React, { useEffect, useState } from "react";
import ProjectCard  from "../components/ProjectCard";
import useProjects from "../hooks/use-projects";
import "./Homepage.css";

function HomePage() {
    const { projects } = useProjects();
    // const [data, setData ] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

        return (
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
                //<div key={key}>{projectData.title}</div>;
                
            })}
            </div>
            );}

export default HomePage;
