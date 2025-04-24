'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Framework {
    name: string;
    iconSrc: string;
    level?: 1 | 2 | 3; // 1: Entry, 2: Intermediate, 3: Advanced
}

interface Technology {
    name: string;
    iconSrc: string;
    level: 1 | 2 | 3;
    frameworks: Framework[];
}

interface TechnologyCategory {
    title: string;
    items: Technology[];
}

const TechStack = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null); 

    const techCategories: TechnologyCategory[] = [
        {
            title: "Programming Languages",
            items: [
                {
                    name: 'Python',
                    iconSrc: '/python.svg',
                    level: 3,
                    frameworks: [
                        { name: 'NumPy', iconSrc: '/numpy.svg', level: 3 }, 
                        { name: 'Flask', iconSrc: '/flask.svg', level: 2 }, 
                        { name: 'OpenCV', iconSrc: '/opencv.svg', level: 3 }, 
                    ],
                },
                {
                    name: 'JavaScript / TypeScript',
                    iconSrc: '/typescript.svg',
                    level: 3,
                    frameworks: [
                        { name: 'Node.js', iconSrc: '/node.svg', level: 2 }, 
                        { name: 'Next.js', iconSrc: '/nextjs.svg', level: 3 }, 
                        { name: 'React', iconSrc: '/react-js.svg', level: 3 }, 
                    ],
                },
                {
                    name: 'Java', 
                    iconSrc: '/java.svg',
                    level: 2,
                    frameworks: [
                        { name: 'Spring', iconSrc: '/spring.svg', level: 2 },
                        { name: 'Spring Boot', iconSrc: '/spring-boot.svg', level: 2 },
                    ],
                },
                {
                    name: 'Dart',
                    iconSrc: '/dart.svg',
                    level: 1,
                    frameworks: [
                        { name: 'Flutter', iconSrc: '/flutter.svg', level: 1 }
                    ],
                },
            ]
        },
        {
            title: "Tools & DevOps",
            items: [
                {
                    name: 'Git',
                    iconSrc: '/git.svg',
                    level: 3,
                    frameworks: []
                },
                {
                    name: 'Docker',
                    iconSrc: '/docker.svg',
                    level: 3,
                    frameworks: []
                },
                {
                    name: 'Ubuntu',
                    iconSrc: '/ubuntu.svg',
                    level: 2,
                    frameworks: []
                }
            ]
        },
        {
            title: "Databases",
            items: [
                {
                    name: 'MongoDB',
                    iconSrc: '/mongodb.svg',
                    level: 2,
                    frameworks: []
                },
                {
                    name: 'MySQL',
                    iconSrc: '/mysql.svg',
                    level: 2,
                    frameworks: []
                }
            ]
        }
    ];

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(section); 
                }
            },
            {
                root: null, 
                threshold: 0.2, 
            }
        );

        observer.observe(section);
        
        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []); 

    const SkillLevelIndicator = ({ level, delay }: { level: 1 | 2 | 3, delay: number }) => (
        <div 
            className={`mt-2 flex h-2 rounded-full overflow-hidden transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* First segment */}
            <div className={`flex-1 ${level >= 1 ? 'bg-blue-500' : 'bg-gray-200'}`} />
            {/* Divider */}
            <div className="w-[2px] bg-white" />
            {/* Second segment */}
            <div className={`flex-1 ${level >= 2 ? 'bg-blue-500' : 'bg-gray-200'}`} />
            {/* Divider */}
            <div className="w-[2px] bg-white" />
            {/* Third segment */}
            <div className={`flex-1 ${level >= 3 ? 'bg-blue-500' : 'bg-gray-200'}`} />
        </div>
    );

    return (
        <section id="tech-stack" className="py-16 px-4 w-full bg-white overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">My Tech Stack</h2>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-16"></div>
                
                {/* Legend */}
                <div className="mb-12 flex justify-center items-center gap-8 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full overflow-hidden flex">
                            <div className="flex-1 bg-blue-500" />
                            <div className="w-[2px] bg-white" />
                            <div className="flex-1 bg-gray-200" />
                            <div className="w-[2px] bg-white" />
                            <div className="flex-1 bg-gray-200" />
                        </div>
                        <span>Entry</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full overflow-hidden flex">
                            <div className="flex-1 bg-blue-500" />
                            <div className="w-[2px] bg-white" />
                            <div className="flex-1 bg-blue-500" />
                            <div className="w-[2px] bg-white" />
                            <div className="flex-1 bg-gray-200" />
                        </div>
                        <span>Intermediate</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full overflow-hidden flex">
                            <div className="flex-1 bg-blue-500" />
                            <div className="w-[2px] bg-white" />
                            <div className="flex-1 bg-blue-500" />
                            <div className="w-[2px] bg-white" />
                            <div className="flex-1 bg-blue-500" />
                        </div>
                        <span>Advanced</span>
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-16">
                    {techCategories.map((category, categoryIndex) => (
                        <div key={category.title} className="space-y-8">
                            <h3 className="text-xl font-semibold text-center text-gray-800">{category.title}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
                                {category.items.map((tech, langIndex) => (
                                    <div key={tech.name} className="flex flex-col items-center text-center w-full max-w-[200px]">
                                        {/* Language/Tool Icon - Conditional sizing based on category */}
                                        <div className={`relative mb-3 transition-all duration-500 ease-out 
                                            ${category.title === "Programming Languages" ? "w-20 h-20 md:w-24 md:h-24" : "w-[60px] h-[60px]"}
                                            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                             style={{ transitionDelay: `${(categoryIndex * 4 + langIndex) * 150}ms` }}>
                                            <Image
                                                src={tech.iconSrc}
                                                alt={tech.name}
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <p className={`text-sm font-medium text-gray-700 mb-1 transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                                               style={{ transitionDelay: `${(categoryIndex * 4 + langIndex) * 150 + 50}ms` }}>
                                                {tech.name}
                                            </p>
                                            <SkillLevelIndicator level={tech.level} delay={(categoryIndex * 4 + langIndex) * 150 + 100} />
                                        </div>

                                        {/* Framework Icons & Names - only show if there are frameworks */}
                                        {tech.frameworks.length > 0 && (
                                            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                                <p className="text-xs text-gray-500 mb-4 text-center">Related Libraries & Frameworks</p>
                                                <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
                                                    {tech.frameworks.map((fw, fwIndex) => (
                                                        <div
                                                            key={fw.name}
                                                            className={`flex flex-col items-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                                            style={{ transitionDelay: `${(categoryIndex * 4 + langIndex) * 150 + 200 + fwIndex * 80}ms` }}
                                                        >
                                                            <div title={fw.name} className="relative w-10 h-10 md:w-12 md:h-12">
                                                                <Image
                                                                    src={fw.iconSrc}
                                                                    alt={fw.name}
                                                                    layout="fill"
                                                                    objectFit="contain"
                                                                />
                                                            </div>
                                                            <div className="w-full">
                                                                <p className="mt-1.5 text-xs text-gray-600">{fw.name}</p>
                                                                {fw.level && (
                                                                    <SkillLevelIndicator 
                                                                        level={fw.level} 
                                                                        delay={(categoryIndex * 4 + langIndex) * 150 + 300 + fwIndex * 80} 
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
