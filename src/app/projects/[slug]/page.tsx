// src/app/projects/[slug]/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectGallery from '@/components/ProjectGallery';

// Add generateStaticParams
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Update the props interface to match Next.js 13+ page props
interface ProjectPageProps {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectPage = ({ params, searchParams }: ProjectPageProps) => {
    // Use React.use to unwrap the Promise
    const resolvedParams = React.use(params);
    const project = projects.find(p => p.slug === resolvedParams.slug);

    if (!project) {
        return (
            <main className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
                <p className="mb-8">Sorry, we couldn&apos;t find the project you&apos;re looking for.</p>
                <Link href="/#projects" className="text-blue-600 hover:underline">
                    &larr; Back to Projects
                </Link>
            </main>
        );
    }

    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Header Section */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Project Image */}
            {project.imgSrc && (
                <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                    />
                </div>
            )}

            {/* Project Details */}
            {project.details && (
                <div className="space-y-12">
                    {/* Repository Links */}
                    {project.details.links && project.details.links.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6">Project Repositories</h2>
                            <div className="flex flex-wrap gap-4">
                                {project.details.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 
                                            border border-gray-200 rounded-lg text-blue-600 hover:text-blue-700 
                                            transition-colors duration-200"
                                    >
                                        <span className="mr-2">{link.title}</span>
                                        <svg 
                                            className="w-4 h-4" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Overview */}
                    {project.details.overview && (
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-gray-700 leading-relaxed">{project.details.overview}</p>
                        </section>
                    )}

                    {/* Challenges */}
                    {project.details.challenges && project.details.challenges.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {project.details.challenges.map((challenge, index) => (
                                    <li key={index} className="leading-relaxed">{challenge}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Solutions */}
                    {project.details.solutions && project.details.solutions.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {project.details.solutions.map((solution, index) => (
                                    <li key={index} className="leading-relaxed">{solution}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Gallery */}
                    {project.details.gallery && project.details.gallery.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                            <ProjectGallery gallery={project.details.gallery} />
                        </section>
                    )}

                    {/* Outcome */}
                    {project.details.outcome && (
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Outcome</h2>
                            {typeof project.details.outcome === 'string' ? (
                                <p className="text-gray-700 leading-relaxed">{project.details.outcome}</p>
                            ) : (
                                <div className="space-y-8">
                                    {/* Status Badge */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full font-semibold">
                                            {project.details.outcome.status}
                                        </span>
                                        {project.details.outcome.targetCompletion && (
                                            <span className="text-gray-600">
                                                Target Completion: {project.details.outcome.targetCompletion}
                                            </span>
                                        )}
                                    </div>

                                    {/* Current Milestones */}
                                    <div className="space-y-6">
                                        <h4 className="text-xl font-semibold text-gray-800">Current Milestones</h4>
                                        <div className="grid gap-4">
                                            {project.details.outcome.currentMilestones.map((milestone, index) => (
                                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h5 className="font-semibold text-gray-900">{milestone.title}</h5>
                                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${milestone.status === 'Completed'
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                            }`}>
                                                            {milestone.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600">{milestone.details}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Upcoming Milestones */}
                                    <div className="space-y-6">
                                        <h4 className="text-xl font-semibold text-gray-800">Upcoming Milestones</h4>
                                        <div className="grid gap-4">
                                            {project.details.outcome.upcomingMilestones.map((milestone, index) => (
                                                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                                    <h5 className="font-semibold text-gray-900 mb-2">{milestone.title}</h5>
                                                    <p className="text-gray-600">{milestone.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>
                    )}
                </div>
            )}

            {/* Navigation */}
            <div className="mt-16 pt-8 border-t">
                <Link
                    href="/#projects"
                    className="text-blue-600 hover:underline inline-flex items-center"
                >
                    <span className="mr-2">&larr;</span>
                    Back to Projects
                </Link>
            </div>
        </main>
    );
};

export default ProjectPage;