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

export const projects: Project[] = [
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
        title: 'Solva',
        description: 'A reward-based Q&A platform where users post questions with monetary incentives and verified experts compete to provide the best answers, featuring time-limited responses and delayed comment visibility.',
        technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Socket.io'],
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
                    title: 'Core Features',
                    points: [
                        'Reward-based question posting with customizable monetary incentives',
                        'Time-limited expert response periods with automatic expiration',
                        'Verified expert system with document-based authentication',
                        'Dual account mode switching between user and expert roles',
                        'Real-time chat system for direct user-to-expert communication',
                        'Content clipping and bookmarking for saving valuable posts',
                        'Multi-tag categorization system for improved content discovery'
                    ]
                },
                {
                    title: 'System Architecture',
                    points: [
                        'Secure payment processing with escrow functionality',
                        'Time-based content visibility management',
                        'Real-time messaging infrastructure using Socket.io',
                        'Document verification and approval workflow system',
                        'Advanced search and filtering capabilities',
                        'User engagement tracking and analytics',
                        'Responsive design optimized for all device types'
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
                    src: '/solva-create_post.png',
                    caption: 'Question creation interface with reward setting, duration selection, and multi-tag categorization',
                    alt: 'Create question form with reward and timing options'
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