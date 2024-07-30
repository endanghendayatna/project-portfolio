import React from "react";

const Projects = () => {
    return (
        <section id="projects" className="p-4">
            <h2 className="text-2xl mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded">
                    <h3 className="text-xl">Project 1</h3>
                    <p>Description of project 1...</p>
                </div>
                <div className="p-4 border rounded">
                    <h3 className="text-xl">Project 2</h3>
                    <p>Description of project 2...</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
