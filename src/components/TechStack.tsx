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
                    level: 3,
                    frameworks: [
                        { name: 'Flutter', iconSrc: '/flutter.svg', level: 3 }
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
            className={`mt-3 flex h-2 rounded-full overflow-hidden transition-all duration-500 ease-out shadow-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* First segment */}
            <div className={`flex-1 transition-colors duration-700 ${level >= 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-200'}`} />
            {/* Divider */}
            <div className="w-[1px] bg-white/50" />
            {/* Second segment */}
            <div className={`flex-1 transition-colors duration-700 ${level >= 2 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-200'}`} />
            {/* Divider */}
            <div className="w-[1px] bg-white/50" />
            {/* Third segment */}
            <div className={`flex-1 transition-colors duration-700 ${level >= 3 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-200'}`} />
        </div>
    );

    return (
        <section id="tech-stack" className="py-16 md:py-24 px-4 w-full bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto max-w-7xl">
                {/* Material Design header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                            My Tech Stack
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Technologies and frameworks I work with to build modern applications
                        </p>
                    </div>
                    <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6"></div>
                </div>
                
                {/* Material Design legend */}
                <div className="mb-16 flex flex-wrap justify-center items-center gap-6 md:gap-8">
                    {[
                        { level: 1, label: 'Entry', segments: [1, 0, 0] },
                        { level: 2, label: 'Intermediate', segments: [1, 1, 0] },
                        { level: 3, label: 'Advanced', segments: [1, 1, 1] }
                    ].map(({ level, label, segments }) => (
                        <div key={level} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                            <div className="w-16 h-2 rounded-full overflow-hidden flex shadow-sm">
                                {segments.map((filled, index) => (
                                    <React.Fragment key={index}>
                                        <div className={`flex-1 ${filled ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gray-200'}`} />
                                        {index < 2 && <div className="w-[1px] bg-white/50" />}
                                    </React.Fragment>
                                ))}
                            </div>
                            <span className="text-sm font-medium text-gray-700">{label}</span>
                        </div>
                    ))}
                </div>

                {/* Categories with Material Design cards */}
                <div className="space-y-16 md:space-y-20">
                    {techCategories.map((category, categoryIndex) => (
                        <div key={category.title} className="space-y-8 md:space-y-12">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">{category.title}</h3>
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                                {category.items.map((tech, langIndex) => (
                                    <div key={tech.name} className="group w-full max-w-[200px]">
                                        {/* Main technology card */}
                                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 ease-out transform hover:-translate-y-1">
                                            {/* Technology icon */}
                                            <div className={`relative mx-auto mb-4 transition-all duration-500 ease-out 
                                                ${category.title === "Programming Languages" ? "w-16 h-16 md:w-20 md:h-20" : "w-12 h-12 md:w-16 md:h-16"}
                                                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                                 style={{ transitionDelay: `${(categoryIndex * 4 + langIndex) * 150}ms` }}>
                                                <Image
                                                    src={tech.iconSrc}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            
                                            <div className="text-center space-y-3">
                                                <p className={`text-sm md:text-base font-semibold text-gray-800 transition-opacity duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                                                   style={{ transitionDelay: `${(categoryIndex * 4 + langIndex) * 150 + 50}ms` }}>
                                                    {tech.name}
                                                </p>
                                                <SkillLevelIndicator level={tech.level} delay={(categoryIndex * 4 + langIndex) * 150 + 100} />
                                            </div>
                                        </div>

                                        {/* Framework/Libraries showcase */}
                                        {tech.frameworks.length > 0 && (
                                            <div className="mt-6 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl p-4 border border-gray-100/50">
                                                <p className="text-xs text-gray-500 mb-4 text-center font-medium">Related Technologies</p>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {tech.frameworks.map((fw, fwIndex) => (
                                                        <div
                                                            key={fw.name}
                                                            className={`group/fw bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ease-out transform hover:-translate-y-0.5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                                            style={{ transitionDelay: `${(categoryIndex * 4 + langIndex) * 150 + 200 + fwIndex * 80}ms` }}
                                                        >
                                                            <div className="flex flex-col items-center space-y-2">
                                                                <div className="relative w-8 h-8 md:w-10 md:h-10">
                                                                    <Image
                                                                        src={fw.iconSrc}
                                                                        alt={fw.name}
                                                                        fill
                                                                        className="object-contain group-hover/fw:scale-110 transition-transform duration-200"
                                                                    />
                                                                </div>
                                                                <p className="text-xs font-medium text-gray-700 text-center leading-tight">{fw.name}</p>
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
