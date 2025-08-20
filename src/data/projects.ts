// src/data/projects.ts
export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imgSrc?: string;
    slug: string;
    details?: {
        overview?: string;
        challenges?: string[];
        solutions?: string[];
        outcome?: string | {
            status: string;
            currentMilestones: Array<{ title: string; status: string; details: string }>;
            upcomingMilestones: Array<{ title: string; description: string }>;
            targetCompletion: string;
        };
        gallery?: {
            src: string;
            caption: string;
            alt?: string;
        }[];
        technicalDetails?: {
            title: string;
            points: string[];
        }[];
        methodology?: {
            phase: string;
            description: string;
        }[];
        implementation?: {
            component: string;
            details: string;
        }[];
        links?: {
            title: string;
            url: string;
        }[];
    };
}

// Work Projects (First 4 projects)
export const workProjects: Project[] = [
    {
        title: 'SSDMS - Smart Sensor Data Management System',
        description: 'A comprehensive dashboard platform for visualizing real-time sensor data from multiple outdoor sensors, providing location mapping, data analytics, and alert management for environmental monitoring.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        imgSrc: '/ssdms-position.png',
        slug: 'ssdms',
        details: {
            overview: 'SSDMS (Smart Sensor Data Management System) is a sophisticated dashboard platform designed to monitor and visualize data from multiple sensors deployed in outdoor environments. The system provides real-time data visualization, precise location mapping, and intelligent alert management to help organizations monitor environmental conditions and respond to anomalies effectively.',
            challenges: [
                'Creating a scalable architecture to handle data from multiple sensors simultaneously',
                'Designing an intuitive interface for visualizing complex sensor data and location mapping',
                'Implementing real-time alert system for abnormal sensor readings',
                'Building responsive cross-platform interface for various devices and screen sizes',
                'Ensuring reliable data synchronization between sensors and dashboard',
                'Managing state efficiently across multiple data streams and user interactions',
                'Supporting multiple languages for international deployment'
            ],
            solutions: [
                'Implemented Provider Pattern for scalable state management and dependency injection across the application',
                'Designed component-based architecture with modular, reusable UI components for consistent user experience',
                'Applied Clean Architecture principles with clear separation of models, views, and services',
                'Built adaptive UI design with custom builders optimized for mobile and web experiences',
                'Created comprehensive internationalization system supporting multiple languages with runtime switching',
                'Developed real-time alert management system with customizable thresholds and notification preferences',
                'Integrated interactive mapping functionality for precise sensor location visualization'
            ],
            outcome: 'Successfully delivered a comprehensive sensor monitoring platform that enables real-time visualization of sensor data across multiple locations. The system provides operators with immediate alerts for abnormal readings, intuitive location mapping, and responsive cross-platform access, significantly improving environmental monitoring capabilities and response times.',
            technicalDetails: [
                {
                    title: 'Architecture & State Management',
                    points: [
                        'Provider Pattern Implementation: Built scalable state management system with dependency injection for handling multiple data streams efficiently',
                        'Component-Based Architecture: Designed modular, reusable UI components that can be easily maintained and extended',
                        'Clean Architecture Principles: Applied clear separation of models, views, and services for better code organization and testability',
                        'Type-Safe Development: Used enums and structured data models to ensure code reliability and prevent runtime errors'
                    ]
                },
                {
                    title: 'Cross-Platform & Responsive Development',
                    points: [
                        'Adaptive UI Design: Built custom builders that provide optimal user experience across mobile and web platforms',
                        'Custom Build System: Developed automated development workflows for efficient deployment and testing',
                        'Responsive Layouts: Created layouts that adapt seamlessly to multiple screen sizes and device orientations',
                        'Multi-Platform Support: Ensured consistent functionality across different operating systems and devices'
                    ]
                },
                {
                    title: 'Internationalization & User Experience',
                    points: [
                        'Complete i18n/l10n Solution: Implemented localization using ARB files and generated localization classes for easy maintenance',
                        'Dynamic Language Switching: Built runtime locale changes allowing users to switch languages without app restart',
                        'Multi-Language Support: Supported English and Chinese languages with custom language selection widgets',
                        'Interactive Image Mapping: Created functionality for precise sensor location visualization on maps'
                    ]
                },
                {
                    title: 'Advanced Features & Integration',
                    points: [
                        'Custom Component Library: Developed reusable buttons, cards, and interactive elements following design system principles',
                        'Dynamic Theme System: Implemented runtime theme switching capabilities for better user customization',
                        'File Download Management: Built system for exporting sensor data and reports in various formats',
                        'Firebase Integration: Properly configured Firebase services for real-time data synchronization and user authentication',
                        'Alert Management System: Created intelligent notification system for abnormal sensor readings with customizable thresholds'
                    ]
                }
            ],
            gallery: [
                {
                    src: '/ssdms-position.png',
                    caption: 'Interactive sensor position mapping showing real-time sensor locations and status indicators',
                    alt: 'SSDMS sensor position dashboard with location mapping'
                },
                {
                    src: '/ssdms-sensor.png',
                    caption: 'Real-time sensor data visualization dashboard displaying environmental readings and trends',
                    alt: 'SSDMS sensor data dashboard with charts and metrics'
                },
                {
                    src: '/ssdms-alert.png',
                    caption: 'Alert management system showing abnormal sensor readings and notification settings',
                    alt: 'SSDMS alert dashboard with notification management'
                }
            ],
            implementation: [
                {
                    component: 'Real-Time Data Visualization',
                    details: 'Interactive dashboard displaying live sensor readings with charts, graphs, and real-time updates from multiple sensor sources'
                },
                {
                    component: 'Location Mapping System',
                    details: 'Interactive map interface showing precise sensor positions with status indicators and detailed location information'
                },
                {
                    component: 'Alert Management Platform',
                    details: 'Intelligent notification system that monitors sensor data for anomalies and sends customizable alerts to operators'
                },
                {
                    component: 'Cross-Platform Interface',
                    details: 'Responsive Flutter application optimized for both mobile and web platforms with adaptive UI components'
                },
                {
                    component: 'Data Export & Reporting',
                    details: 'Comprehensive reporting system allowing users to export sensor data and generate custom reports for analysis'
                }
            ]
        }
    },
    {
        title: 'Autonomous Defect Inspection System',
        description: 'AI-powered quality assurance system for construction materials using Mask-RCNN and computer vision techniques to automate concrete cube inspection.',
        technologies: ['Python', 'OpenCV', 'Mask-RCNN', 'Pytorch'],
        imgSrc: '/defect.jpg',
        slug: 'autonomous-defect-inspection',
        details: {
            overview: 'An advanced automated quality assurance system designed for the construction industry to evaluate concrete cube samples. The system employs Mask-RCNN AI model to analyze pressure-induced cracks on concrete cubes, determining their suitability for construction use by assessing crack distribution patterns and edge defects.',
            challenges: [
                'Accurately detecting and segmenting concrete cubes from live stream images in varying lighting conditions',
                'Analyzing complex crack patterns and determining their uniformity across cube surfaces',
                'Measuring edge defect depths with precision to identify failures',
                'Eliminating noise and irrelevant artifacts from image data',
                'Achieving real-time processing capabilities for efficient inspection'
            ],
            solutions: [
                'Implemented Mask-RCNN model for precise cube detection and segmentation from live video feeds',
                'Developed sophisticated convexity defect analysis algorithms to measure edge break depths',
                'Applied advanced image preprocessing techniques (blurring, erosion/dilation, thresholding) to enhance crack detection accuracy',
                'Created a contour comparison system to evaluate crack uniformity across cube faces',
                'Established automated threshold-based classification for pass/fail decisions'
            ],
            outcome: 'Successfully automated the concrete cube inspection process, reducing inspection time from 40 seconds to 10 seconds per cube while eliminating human error in the evaluation process. The system effectively identifies uneven crack distributions and measures edge defects, ensuring reliable quality assurance for construction materials.',
            gallery: [
                {
                    src: '/defect.jpg',
                    caption: 'Live stream cube detection using Mask-RCNN',
                    alt: 'AI model detecting concrete cube in real-time'
                },
                {
                    src: '/defect-detail-1.jpg',
                    caption: 'Edge defect analysis showing depth measurements',
                    alt: 'Concrete cube edge defect analysis'
                },
                {
                    src: '/defect-detail-2.jpg',
                    caption: 'Crack pattern analysis with contour detection',
                    alt: 'Crack pattern uniformity analysis'
                },
                {
                    src: '/defect-detail-3.jpg',
                    caption: 'Certificate of Merit in Hong Kong Institution',
                    alt: 'Certificate of Merit in Hong Kong Institution'
                }
            ]
        }
    },
    {
        title: 'Smart Traffic Control System',
        description: 'An intelligent traffic management system that dynamically adjusts traffic signals based on real-time vehicle and pedestrian detection data.',
        technologies: ['Node.js', 'Express.js', 'WebSocket'],
        imgSrc: '/traffic.jpg',
        slug: 'smart-traffic-control',
        details: {
            overview: 'A sophisticated traffic management solution that leverages network cameras and AI detection to optimize traffic flow in real-time. The system processes data from strategically placed cameras to detect vehicles and pedestrians, automatically adjusting traffic signals based on actual demand, thereby improving traffic efficiency and reducing unnecessary wait times.',
            challenges: [
                'Ensuring reliable real-time data communication between AI detection systems and traffic controllers',
                'Handling system failures gracefully without compromising traffic safety',
                'Managing complex state transitions between smart and local control modes',
                'Maintaining system stability while processing continuous streams of detection data',
                'Implementing fail-safe mechanisms for critical traffic control operations'
            ],
            solutions: [
                'Developed a robust backend system to process AI detection results and control traffic devices',
                'Transitioned from WebSocket to request-response architecture for improved data reliability',
                'Implemented an alert simulator for comprehensive system error testing and recovery',
                'Created dynamic signal adjustment logic based on real-time traffic demand',
                'Designed a fallback mechanism to automatically switch to local control mode during system failures'
            ],
            outcome: 'Successfully improved system reliability through architectural changes and comprehensive error handling. The transition from WebSocket to request-response model significantly reduced data loss and enhanced system stability. The implementation of the alert simulator enabled proactive error detection and seamless fallback to local control mode, ensuring uninterrupted traffic management.',
            gallery: [],
            technicalDetails: [
                {
                    title: 'Key Features',
                    points: [
                        'Dynamic signal adjustment based on real-time traffic demand',
                        'Automatic pedestrian signal skipping when no pedestrians detected',
                        'Intelligent lane management for empty traffic lanes',
                        'Seamless transition between smart and local control modes',
                        'Comprehensive error detection and recovery system'
                    ]
                },
                {
                    title: 'System Architecture',
                    points: [
                        'REST API-based communication for reliable data exchange',
                        'Real-time data processing pipeline for AI detection results',
                        'Automated failover mechanisms for system resilience',
                        'Modular design for easy maintenance and updates',
                        'Integrated alert system for proactive error management'
                    ]
                }
            ]
        }
    },
    {
        title: 'Color Change Detection System',
        description: 'Environmental monitoring system using advanced image processing to detect water pollution and assess construction impact on natural habitats through color analysis and multi-sensor data.',
        technologies: ['Python', 'OpenCV', 'NumPy', 'Multithreading', 'docker'],
        imgSrc: '/water.jpg',
        slug: 'color-change-detection',
        details: {
            overview: 'An innovative environmental monitoring system that combines computer vision and sensor data to assess the impact of construction activities on natural habitats. The system employs sophisticated color analysis techniques in the LAB color space, along with multi-sensor data integration to detect subtle changes in water quality and wildlife presence, providing early warning of potential environmental impacts.',
            challenges: [
                'Accurately detecting subtle color changes in water bodies under varying lighting conditions',
                'Managing and comparing large sets of reference images efficiently',
                'Integrating multiple data sources including visual, audio, and sensor data',
                'Developing robust algorithms to minimize false positives from natural lighting variations',
                'Creating an effective weighting system for color space components to prioritize relevant changes',
                'Difficulty in discerning daytime and nighttime images for accurate color comparison',
                'Processing simultaneous video streams from multiple cameras in real-time without performance degradation'
            ],
            solutions: [
                'Implemented CIE 2000 (ΔE2000) color difference algorithm in LAB color space for precise color comparison',
                'Developed an adaptive reference image system with 10-minute sampling intervals',
                'Created a weighted color analysis system emphasizing A and B channels over luminance',
                'Applied histogram comparison techniques for comprehensive color channel analysis',
                'Implemented multi-threading architecture to handle concurrent processing of multiple camera streams efficiently',
                'Developed a thread pool system to manage and process video streams from different cameras simultaneously while maintaining system responsiveness'
            ],
            outcome: 'Successfully created a comprehensive environmental monitoring system capable of detecting subtle changes in water quality through color analysis. The system effectively distinguishes between natural variations and pollution-induced changes, providing reliable early warning of potential environmental impacts from construction activities.',
            gallery: [
                {
                    src: '/color-detection-1.jpg',
                    caption: 'Comparing color changes in water',
                    alt: 'LAB color space analysis'
                },
                {
                    src: '/water.jpg',
                    caption: 'Extract color data from each image and use histogram comparison to verify the color change',
                    alt: 'Reference image comparison'
                },
            ],
        }
    },
    {
        title: 'IBB Beacon Scanning - Smart Crossing Assistant',
        description: 'An innovative mobile application that alerts visually impaired users about approaching vehicles at zebra crossings using Bluetooth beacon technology and AI-powered vehicle detection.',
        technologies: ['Flutter', 'Dart'],
        imgSrc: undefined, // Will use accessibility icon in component
        slug: 'ibb-beacon-scanning',
        details: {
            overview: 'IBB Beacon Scanning is a groundbreaking assistive technology application designed to enhance pedestrian safety for visually impaired users at zebra crossings. The system combines Bluetooth beacon technology installed on lamp poles with AI-powered cameras to detect approaching vehicles and provide real-time audio alerts to users through a mobile application.',
            challenges: [
                'Managing signal congestion from multiple beacons in close proximity',
                'Ensuring reliable beacon detection and connection in outdoor environments',
                'Implementing real-time vehicle detection integration with mobile notifications',
                'Creating intuitive user experience for visually impaired users',
                'Balancing battery efficiency with continuous beacon scanning',
                'Handling cross-platform native iOS integration for beacon functionality',
                'Managing location permissions and background processing for safety-critical applications'
            ],
            solutions: [
                'Resolved signal congestion by carefully adjusting beacon signal strength and optimizing signal direction',
                'Implemented GetX state management pattern for reactive and efficient app state handling',
                'Created custom native iOS integration using Swift for precise iBeacon functionality',
                'Developed comprehensive permission management system for location and notification access',
                'Built secure local data storage with AES encryption for sensitive beacon information',
                'Designed adaptive audio feedback system with multiple sound types for different scenarios',
                'Implemented background processing with cron job scheduling for continuous monitoring'
            ],
            outcome: 'Successfully developed and deployed a safety-critical mobile application that significantly enhances pedestrian safety for visually impaired users. The system effectively detects approaching vehicles and provides timely audio alerts, with optimized beacon signal management eliminating initial congestion issues. The application demonstrates reliable cross-platform performance and robust native iOS integration.',
            technicalDetails: [
                {
                    title: 'Architecture & Design Patterns',
                    points: [
                        'GetX State Management: Implemented GetX Controller pattern for reactive state management with efficient dependency injection',
                        'Observer Pattern: Applied GetX reactive programming for real-time beacon status updates and vehicle detection alerts',
                        'Singleton Pattern: Implemented Singleton design pattern in SharedPreferenceService for global configuration management',
                        'MVC Architecture: Applied Model-View-Controller pattern with clear separation of BeaconStatus models, UI components, and state controllers'
                    ]
                },
                {
                    title: 'Mobile Development & Cross-Platform Integration',
                    points: [
                        'Flutter/Dart Development: Built cross-platform application supporting both iOS and Android with consistent functionality',
                        'Native iOS Integration: Developed Swift code for platform-specific beacon features including BeaconStreamHandler.swift and BluetoothStreamHandler.swift',
                        'Method Channel Implementation: Created seamless Flutter-iOS communication bridge for beacon data streaming',
                        'Custom Component Library: Developed reusable UI components including input counters, list tiles, and text forms optimized for accessibility'
                    ]
                },
                {
                    title: 'Bluetooth & IoT Technology',
                    points: [
                        'iBeacon Technology: Implemented comprehensive iBeacon protocol with UUID/Major/Minor identifier management for precise beacon tracking',
                        'Real-time Proximity Detection: Built advanced region monitoring system for accurate distance-based notifications',
                        'Signal Optimization: Resolved beacon congestion issues through careful signal strength adjustment and directional optimization',
                        'Location Services: Integrated location-based services with region detection for enhanced positioning accuracy'
                    ]
                },
                {
                    title: 'Data Security & Advanced Features',
                    points: [
                        'AES Encryption: Implemented secure data storage using AES encryption with custom keys and initialization vectors',
                        'Permission Management: Built comprehensive runtime permission handling for location access and notifications with optimized user experience',
                        'Audio Integration: Developed sophisticated sound management using Soundpool for efficient audio playback with multiple alert types (car.m4a, ped.m4a, crossing.m4a)',
                        'Background Processing: Created cron job scheduling for periodic beacon scanning and local notification management with timezone support',
                        'Haptic Feedback: Integrated tactile feedback system using native iOS Haptic and Vibration capabilities for enhanced user experience'
                    ]
                }
            ],
            gallery: [], // No images provided as mentioned
            implementation: [
                {
                    component: 'Beacon Detection System',
                    details: 'Advanced Bluetooth beacon scanning and management system with signal strength optimization and congestion resolution'
                },
                {
                    component: 'Native iOS Integration',
                    details: 'Swift-based native implementation including BeaconStreamHandler, BluetoothStreamHandler, and iBeacon protocol management'
                },
                {
                    component: 'Alert Management System',
                    details: 'Multi-modal notification system providing audio alerts, haptic feedback, and visual indicators for approaching vehicles'
                },
                {
                    component: 'Cross-Platform Mobile App',
                    details: 'Flutter application with GetX state management, custom UI components, and accessibility-focused design for visually impaired users'
                },
                {
                    component: 'Security & Data Management',
                    details: 'Encrypted local storage system with secure beacon data handling and privacy-focused permission management'
                }
            ]
        }
    }
];

// Side Projects (Remaining projects)
export const sideProjects: Project[] = [
    {
        title: 'Solva',
        description: 'A reward-based Q&A platform where users post questions with monetary incentives and verified experts compete to provide the best answers, featuring time-limited responses and delayed comment visibility.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'BLoC'],
        imgSrc: '/solva-home.png',
        slug: 'solva',
        details: {
            overview: 'Solva is a unique Q&A platform that introduces a competitive reward system to incentivize high-quality expert responses. Users post questions with monetary rewards and set time limits for responses. Only verified experts can answer questions, and all comments remain hidden until the question expires, ensuring unbiased expert responses. The questioner selects the best answer to award the prize, creating a merit-based knowledge marketplace.',
            challenges: [
                'Implementing a secure reward system with monetary transactions and escrow functionality',
                'Creating a robust expert verification process to ensure credibility and expertise',
                'Managing time-sensitive question lifecycles with automated expiration and comment reveal',
                'Developing a fair and transparent best answer selection mechanism',
                'Building real-time communication features while maintaining question confidentiality',
                'Designing an intuitive tagging and categorization system for diverse topics',
                'Implementing secure payment processing and reward distribution'
            ],
            solutions: [
                'Developed a comprehensive reward system with escrow functionality to hold payments until completion',
                'Created a multi-step expert verification process requiring document submission and domain expertise proof',
                'Implemented time-based question management with automated expiration and scheduled comment visibility',
                'Built a dual-account system allowing users to switch between normal user and expert modes',
                'Designed a secure chat system for direct communication between users and experts',
                'Created an advanced tagging system allowing multiple categories per question for better discoverability',
                'Integrated clipping and bookmarking features for users to save valuable content'
            ],
            outcome: {
                status: 'Completed',
                currentMilestones: [
                    {
                        title: 'Core Platform Features',
                        status: 'Completed',
                        details: 'Implemented the complete Q&A platform with reward system, expert verification, and time-limited question functionality'
                    },
                    {
                        title: 'User Interface & Experience',
                        status: 'Completed',
                        details: 'Developed comprehensive UI including home page, question creation, clipping system, chat functionality, and profile management'
                    },
                    {
                        title: 'Expert Verification System',
                        status: 'Completed',
                        details: 'Built robust verification process for experts with document submission and approval workflow'
                    },
                    {
                        title: 'Payment Integration',
                        status: 'Completed',
                        details: 'Integrated secure payment processing for question rewards and expert compensation'
                    }
                ],
                upcomingMilestones: [
                    {
                        title: 'Mobile Application',
                        description: 'Develop native mobile apps for iOS and Android to expand platform accessibility'
                    },
                    {
                        title: 'Advanced Analytics',
                        description: 'Add comprehensive analytics dashboard for users to track their question performance and expert statistics'
                    },
                    {
                        title: 'AI-Powered Recommendations',
                        description: 'Implement machine learning algorithms to recommend relevant questions and experts'
                    }
                ],
                targetCompletion: 'Initial Version Completed'
            },
            technicalDetails: [
                {
                    title: 'App Architecture & Code Organization',
                    points: [
                        'Clean Code Structure: Built the app using a 3-layer architecture that separates business logic, data handling, and user interface - making the code maintainable and scalable',
                        'Data Management Pattern: Created a systematic approach to handle data from 25+ different features like chat, payments, and user accounts with consistent interfaces',
                        'Business Logic Layer: Developed 200+ reusable components that handle complex tasks like real-time messaging, expert verification, and payment processing',
                        'Smart State Management: Used BLoC pattern to manage app state efficiently - handling real-time chat, user verification workflows, payment processing, and search functionality with proper loading and error states',
                        'Organized State Flow: Created well-structured state management with clear transitions, comprehensive error handling, and proper loading indicators across all app features'
                    ]
                },
                {
                    title: 'Core App Features & Implementation',
                    points: [
                        'Real-Time Chat System: Built instant messaging using WebSocket technology with Supabase backend - includes message delivery confirmations, automatic image compression, offline message storage, and push notifications',
                        'Smart Message Loading: Implemented efficient message pagination that loads 20 messages at a time with smooth infinite scrolling experience',
                        'Chat User Management: Created advanced participant management with different user roles and customizable notification settings',
                        'Multiple Login Options: Integrated 4 different login methods (Google, Apple, Kakao, Naver) for user convenience',
                        'Dual User Accounts: Built a system where users can seamlessly switch between regular user mode and expert mode with different capabilities',
                        'Advanced Payment System: Developed comprehensive payment handling supporting in-app purchases, receipt verification, digital wallet features, and automatic expert earnings distribution with transparent fee calculation',
                    ]
                },
                {
                    title: 'Performance & Speed Optimization',
                    points: [
                        'Smart Caching System: Implemented intelligent data storage including question cache with automatic cleanup (5-minute refresh), offline chat storage, bookmarked content cache, and user profile caching with smart updates',
                        'Faster Loading: Built content prediction system that loads data in advance, reducing loading times by 20%',
                        'Memory Optimization: Implemented smart loading for large content lists and optimized image handling with automatic format selection for best performance'
                    ]
                },
                {
                    title: 'Backend Services & Infrastructure',
                    points: [
                        'Database Integration: Connected with Supabase database using real-time data streams, serverless functions for image processing and notifications, security rules for data protection, and automated database workflows',
                        'Analytics & Monitoring: Integrated Firebase services for user analytics, crash reporting, and push messaging with detailed user behavior tracking',
                        'Error Management: Built comprehensive error handling with custom error types, detailed logging system, automatic crash reporting with user context, and backup systems for critical app functions',
                        'Cloud Functions: Developed serverless functions for push notifications via Firebase, automated image processing and optimization, payment webhook processing, and automated content filtering'
                    ]
                }
            ],
            gallery: [
                {
                    src: '/solva-home.png',
                    caption: 'Home page displaying categorized questions and articles with tag-based filtering',
                    alt: 'Solva home page showing question categories and tags'
                },
                {
                    src: '/solva-post.png',
                    caption: 'Question detail page showing expert responses, engagement options, and reward information',
                    alt: 'Question detail view with expert answers and interaction features'
                },
                {
                    src: '/solva-comment.png',
                    caption: 'Comment system displaying expert responses and user interactions after question expiration',
                    alt: 'Comment section with expert responses and user engagement'
                },
                {
                    src: '/solva-clip.png',
                    caption: 'Personal clipping page where users can view and manage their saved questions and articles',
                    alt: 'User clip collection showing bookmarked content'
                },
                {
                    src: '/solva-chat.png',
                    caption: 'Real-time chat interface enabling direct communication between users and experts',
                    alt: 'Chat system for user-expert communication'
                },
                {
                    src: '/solva-profile.png',
                    caption: 'User profile page with account switching functionality between normal user and verified expert modes',
                    alt: 'Profile management with user/expert mode switching'
                }
            ],
            implementation: [
                {
                    component: 'Question Management System',
                    details: 'Comprehensive system for creating, posting, and managing time-limited questions with reward allocation and multi-tag categorization'
                },
                {
                    component: 'Expert Verification Platform',
                    details: 'Robust verification process requiring document submission and expertise validation for expert account approval'
                },
                {
                    component: 'Reward & Payment System',
                    details: 'Secure escrow-based payment processing for question rewards with automatic distribution to selected best answers'
                },
                {
                    component: 'Real-time Communication',
                    details: 'Socket.io-powered chat system enabling direct messaging between users and experts while maintaining question confidentiality'
                },
                {
                    component: 'Content Engagement Features',
                    details: 'Clipping, liking, and commenting system with time-based visibility controls and user interaction tracking'
                }
            ],
            links: []
        }
    },
    {
        title: 'Enus.ai',
        description: 'An AI-powered news summarization platform that delivers personalized news briefings and enables interactive discussions through an intelligent chatbot.',
        technologies: ['Java', 'Spring Boot', 'Python', 'WebSocket', 'TypeScript', 'React', 'Next.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Message Queue'],
        imgSrc: '/enus.jpg',
        slug: 'enus-ai',
        details: {
            overview: 'Enus.ai is an intelligent news platform that transforms how users consume news by providing personalized summaries based on individual interests. The system combines efficient web crawling, smart summarization, and interactive chat capabilities to deliver a comprehensive news experience. Users receive daily briefings of relevant news and can engage in dynamic conversations about the content through an AI-powered chatbot.',
            challenges: [
                'Building a high-performance web crawler capable of handling multiple news sources simultaneously',
                'Implementing real-time chat functionality with low latency requirements',
                'Creating an efficient system for personalized news filtering and summarization',
                'Managing concurrent processing of large volumes of news data',
                'Designing a scalable architecture for handling multiple user sessions and chat interactions'
            ],
            solutions: [
                'Developed an asynchronous Python web crawler for efficient news collection',
                'Implemented WebSocket-based chat system using Spring Boot for real-time communication',
                'Created a concurrent processing pipeline for rapid data collection and summarization',
                'Built a personalized keyword-based filtering system for news relevance',
                'Designed an interactive chatbot interface for news-related queries and discussions'
            ],
            outcome: {
                status: 'In Active Development',
                currentMilestones: [
                    {
                        title: 'Backend Architecture',
                        status: 'Completed',
                        details: 'Designed and implemented the core system architecture using Spring Boot and PostgreSQL'
                    },
                    {
                        title: 'Web Crawler Engine',
                        status: 'Completed',
                        details: 'Built an efficient asynchronous crawler system for news collection'
                    },
                    {
                        title: 'Real-time Communication',
                        status: 'Completed',
                        details: 'Implemented WebSocket infrastructure for live updates and chat functionality'
                    },
                    {
                        title: 'User Interface',
                        status: 'In Progress',
                        details: 'Developed initial prototype with React and Next.js, focusing on user experience'
                    }
                ],
                upcomingMilestones: [
                    {
                        title: 'AI Integration',
                        description: 'Implement advanced summarization pipeline using NLP models'
                    },
                    {
                        title: 'Chat Enhancement',
                        description: 'Develop intelligent chat interface with context-aware responses'
                    },
                    {
                        title: 'User Personalization',
                        description: 'Add user preference learning and content customization'
                    }
                ],
                targetCompletion: 'Q2 2024'
            },
            technicalDetails: [
                {
                    title: 'Backend Architecture',
                    points: [
                        'Spring Boot backend with WebSocket support for real-time chat',
                        'Asynchronous Python web crawler for efficient news collection',
                        'PostgreSQL database for user preferences and news storage',
                        'Concurrent processing pipeline for data collection',
                        'RESTful API endpoints for news delivery and user management'
                    ]
                },
                {
                    title: 'Key Features',
                    points: [
                        'Personalized news filtering based on user keywords',
                        'Daily news briefing generation',
                        'Interactive AI chatbot for news discussions',
                        'Real-time news updates and notifications',
                        'Multi-source news aggregation and summarization'
                    ]
                }
            ],
            gallery: [],
            implementation: [
                {
                    component: 'Web Crawler',
                    details: 'Asynchronous Python crawler using concurrent processing for efficient news collection from multiple sources'
                },
                {
                    component: 'Backend Server',
                    details: 'Java Spring Boot application with WebSocket support for real-time chat and RESTful APIs for news delivery'
                },
                {
                    component: 'Chat System',
                    details: 'Interactive chatbot interface allowing users to ask follow-up questions about news summaries'
                },
                {
                    component: 'News Processing',
                    details: 'Concurrent processing pipeline for news collection, filtering, and summarization based on user preferences'
                }
            ],
            links: [
                {
                    title: 'API Server Repository',
                    url: 'https://github.com/enus-corp/enus-api-server'
                },
                {
                    title: 'Web Client Repository',
                    url: 'https://github.com/enus-corp/enus-web'
                }
            ]
        }
    },
    {
        title: 'Crypto Backtesting Platform',
        description: 'A user-friendly platform that democratizes algorithmic trading by enabling non-programmers to create, test, and analyze cryptocurrency trading strategies without coding knowledge.',
        technologies: ['TypeScript', 'Next.js', 'Nest.JS', 'MongoDB', 'Python'],
        imgSrc: '/backtest.jpg',
        slug: 'crypto-backtesting',
        details: {
            links: [
                {
                    title: "Api Server Repository",
                    url: 'https://github.com/ggomruk/ggomruk_api_server'
                },
                {
                    title: "Web Client Repository",
                    url: 'https://github.com/ggomruk/client'
                }
            ],
            overview: 'We developed an algorithmic backtesting platform to democratize cryptocurrency trading strategies for users without programming expertise. The platform simplifies the process of creating and testing trading algorithms by providing an intuitive interface for combining established strategies with customizable parameters, making algorithmic trading accessible to everyone.',
            challenges: [
                'Creating an intuitive interface that simplifies complex trading concepts for non-technical users',
                'Processing and analyzing large volumes of historical cryptocurrency data efficiently',
                'Implementing complex trading algorithms with customizable parameters',
                'Balancing feature complexity with user accessibility',
                'Addressing technical and regulatory challenges in real-time trading implementation'
            ],
            solutions: [
                'Developed a user-friendly interface for combining multiple trading strategies without coding',
                'Implemented popular trading indicators (MACD, Bollinger Bands, SMA) with customizable parameters',
                'Created an efficient backtesting engine for historical performance analysis',
                'Built comprehensive performance metrics visualization',
                'Designed an intuitive parameter optimization system'
            ],
            technicalDetails: [
                {
                    title: 'Key Features',
                    points: [
                        'Accessible backtesting interface requiring no coding knowledge',
                        'Customizable strategy combination system',
                        'Comprehensive performance metrics analysis',
                        'Parameter optimization tools',
                        'User-friendly visualization of results'
                    ]
                },
                {
                    title: 'Analysis Metrics',
                    points: [
                        'Return rates and profit analysis',
                        'Volume volatility measurements',
                        'Parameter sensitivity testing',
                        'Strategy combination effectiveness',
                        'Risk assessment metrics'
                    ]
                }
            ],
            methodology: [
                {
                    phase: 'Initial Vision',
                    description: 'Originally planned as a complete trading platform with real-time execution capabilities'
                },
                {
                    phase: 'Market Analysis',
                    description: 'Identified gap in market for accessible trading tools for non-programmers'
                },
                {
                    phase: 'Strategic Pivot',
                    description: 'Shifted focus to backtesting and strategy development due to technical, regulatory, and capital constraints'
                },
                {
                    phase: 'Implementation',
                    description: 'Developed user-friendly interface and comprehensive backtesting capabilities'
                }
            ],
            outcome: {
                status: 'Completed',
                currentMilestones: [
                    {
                        title: 'Strategy Builder Interface',
                        status: 'Completed',
                        details: 'Successfully developed an intuitive interface for non-programmers to create and combine trading strategies without coding knowledge'
                    },
                    {
                        title: 'Backtesting Engine',
                        status: 'Completed',
                        details: 'Built a comprehensive backtesting system with support for multiple trading indicators (MACD, Bollinger Bands, SMA) and customizable parameters'
                    },
                    {
                        title: 'Performance Analytics',
                        status: 'Completed',
                        details: 'Implemented detailed performance metrics visualization and analysis tools for strategy evaluation'
                    },
                    {
                        title: 'Parameter Optimization',
                        status: 'Completed',
                        details: 'Created an intuitive system for optimizing strategy parameters based on historical performance'
                    }
                ],
                upcomingMilestones: [
                    {
                        title: 'Real-time Trading Integration',
                        description: 'Future consideration: Integration with exchanges for live trading (pending regulatory and technical requirements)'
                    },
                    {
                        title: 'Advanced Strategy Templates',
                        description: 'Expand library of pre-built strategies and combinations for users to customize'
                    },
                    {
                        title: 'Machine Learning Integration',
                        description: 'Add AI-powered strategy optimization and parameter suggestions'
                    }
                ],
                targetCompletion: 'Initial Version Completed'
            },
            implementation: [
                {
                    component: 'Strategy Builder',
                    details: 'Visual interface for combining multiple trading strategies and customizing parameters without coding'
                },
                {
                    component: 'Backtesting Engine',
                    details: 'Comprehensive system for testing strategies against historical data with multiple performance metrics'
                },
                {
                    component: 'Analysis Dashboard',
                    details: 'Interactive visualization of backtest results including returns, volatility, and optimization opportunities'
                },
                {
                    component: 'Parameter Optimizer',
                    details: 'Tool for finding optimal strategy parameters based on historical performance'
                }
            ]
        }
    },
    {
        title: 'Seoul Big Data Competition',
        description: 'Analysis of Seoul metropolitan data to identify correlations between economic indicators, population demographics, and illegal cigarette littering, leading to targeted intervention strategies.',
        technologies: ['Python', 'Numpy', 'Pandas', 'Qgis', 'XGBoost', 'Scikit-learn'],
        imgSrc: '/big-data.jpg',
        slug: 'seoul-big-data',
        details: {
            overview: 'An initiative utilizing Seoul Open Data to assess the impact of economic indicators, population demographics, and corporate presence on illegal cigarette littering. The project addressed the surge in cigarette littering cases from 65,000 to 72,000 over three years by analyzing various urban factors to determine priority areas for anti-littering campaigns.',
            challenges: [
                'Processing and integrating multiple data sources including smoking rates, population indices, and commercial data',
                'Handling skewed data distributions requiring normalization and transformation',
                'Managing multicollinearity between different urban indicators',
                'Developing accurate predictive models for littering behavior',
                'Identifying optimal clustering methods for district categorization'
            ],
            solutions: [
                'Implemented data normalization using MinMaxScaler and log transformation for skewed distributions',
                'Applied correlation analysis to identify and handle multicollinearity in the dataset',
                'Utilized XGBoost for feature importance ranking and prediction',
                'Developed clustering analysis using Elbow Method and Silhouette Coefficient',
                'Created comprehensive data visualizations for district-level analysis'
            ],
            technicalDetails: [
                {
                    title: 'Data Processing & Analysis',
                    points: [
                        'Log transformation of target variables to handle right-skewed distributions',
                        'Feature normalization using MinMaxScaler',
                        'Correlation analysis with heat map visualization',
                        'XGBoost implementation with MSE: 0.060 and R-squared: 0.900',
                        'Clustering optimization using Elbow Method and Silhouette Coefficient'
                    ]
                },
                {
                    title: 'Key Findings',
                    points: [
                        'Identified three critical factors: number of enterprises, smoking rate, and sales index',
                        'Determined optimal cluster count of 4 through Silhouette analysis',
                        'Found significant correlation between financial indices and smoking violations',
                        'Excluded worker count data due to high multicollinearity (0.93)',
                        'Successfully identified priority regions for intervention'
                    ]
                }
            ],
            methodology: [
                {
                    phase: 'Data Collection',
                    description: 'Gathered comprehensive data including smoking index, population index, and commercial index from Seoul Open Data'
                },
                {
                    phase: 'Data Preprocessing',
                    description: 'Applied normalization and log transformation to handle data distributions and prepare for analysis'
                },
                {
                    phase: 'Model Development',
                    description: 'Implemented multiple models including Linear Regression, Lasso, Random Forest, and XGBoost'
                },
                {
                    phase: 'Cluster Analysis',
                    description: 'Performed district clustering to identify areas with similar characteristics and intervention needs'
                }
            ],
            outcome: 'Successfully identified Cluster 3 as the priority region for cigarette littering prevention efforts based on comprehensive analysis of economic and demographic factors. The project provided data-driven insights for targeted intervention strategies, with the XGBoost model achieving 90% accuracy in predicting problem areas.',
            gallery: [
                {
                    src: '/big-data-1.jpg',
                    caption: 'Correlation matrix showing relationships between different urban factors and smoking violations',
                    alt: 'Correlation heatmap of urban factors in Seoul'
                },
                {
                    src: '/big-data-2.jpg',
                    caption: 'Model evaluation metrics and feature importance analysis showing XGBoost performance (MSE: 0.060, R-squared: 0.900)',
                    alt: 'Model comparison and feature importance graph'
                },
                {
                    src: '/big-data-3.jpg',
                    caption: 'Clustering analysis using Elbow Method and Silhouette Coefficient to determine optimal number of clusters',
                    alt: 'Elbow method and silhouette coefficient analysis'
                },
                {
                    src: '/big-data-4.jpg',
                    caption: 'Final clustering results showing four distinct district groups with Cluster 3 identified as the priority target area',
                    alt: 'Seoul district clustering results map'
                }
            ]
        }
    }
];

// Combined export for backward compatibility
export const projects: Project[] = [...workProjects, ...sideProjects];