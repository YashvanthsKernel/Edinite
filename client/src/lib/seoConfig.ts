/**
 * SEO Configuration
 * 
 * Centralized SEO data for all routes including:
 * - Title, description, keywords
 * - JSON-LD structured data
 * - Primary keyword for each page
 */

export const BASE_URL = 'https://edinite.com';

export interface SEOConfig {
    title: string;
    description: string;
    keywords: string;
    primaryKeyword: string;
    h1: string;
    jsonLd?: object;
}

// Organization Schema (global)
export const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Edinite',
    url: BASE_URL,
    logo: `${BASE_URL}/Edinite Logo.svg`,
    description: 'Digital engineering services for students and startups in India',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
    },
    sameAs: [
        'https://www.linkedin.com/company/edinite',
        'https://www.instagram.com/edinite_official',
    ],
};

// Service Schema Generator
export const generateServiceSchema = (service: {
    name: string;
    description: string;
    url: string;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
        '@type': 'Organization',
        name: 'Edinite',
        url: BASE_URL,
    },
    name: service.name,
    description: service.description,
    url: service.url,
    areaServed: {
        '@type': 'Country',
        name: 'India',
    },
});

// Per-route SEO configuration
export const SEO_CONFIG: Record<string, SEOConfig> = {
    '/': {
        title: 'Edinite - Digital Engineering & Simulation Services for Students and Startups',
        description: 'Transform your engineering concepts into reality with expert CAD design, FEA/CFD simulation, 3D printing, PCB design, and MATLAB solutions. India\'s leading digital engineering studio.',
        keywords: 'digital engineering services india, cad design for students, fea cfd simulation, pcb design startups, engineering services for startups',
        primaryKeyword: 'digital engineering services india',
        h1: 'Bring Your Engineering Ideas to Reality',
        jsonLd: ORGANIZATION_SCHEMA,
    },
    '/about': {
        title: 'About Edinite - Our Team & Mission | Digital Engineering Studio',
        description: 'Meet the Edinite team - passionate engineers bridging classroom learning and industry-grade product development. Learn about our mission and values.',
        keywords: 'edinite team, engineering studio india, digital engineering company, engineering consultancy, cad design company',
        primaryKeyword: 'engineering studio india',
        h1: 'Transforming Ideas Into Digital Reality',
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: ORGANIZATION_SCHEMA,
        },
    },
    '/services': {
        title: 'Engineering Services - CAD, FEA, CFD, PCB Design | Edinite',
        description: 'Comprehensive engineering services including mechanical CAD design, FEA/CFD simulation, 3D printing, PCB design, and MATLAB solutions for students and startups.',
        keywords: 'engineering services, cad design services, fea analysis, cfd simulation, pcb layout, matlab solutions',
        primaryKeyword: 'engineering services',
        h1: 'Our Engineering Services',
    },
    '/services/mechanical-cad': {
        title: 'Mechanical CAD Design Services | 3D Modeling | Edinite',
        description: 'Professional 3D CAD modeling using SolidWorks, CATIA, and Fusion 360. Design for manufacturability, reverse engineering, and technical drawings for student projects and startups.',
        keywords: 'mechanical cad design, 3d cad modeling, solidworks services, catia design, fusion 360, cad for students',
        primaryKeyword: 'mechanical cad design',
        h1: 'Mechanical CAD Design',
        jsonLd: generateServiceSchema({
            name: 'Mechanical CAD Design',
            description: 'Professional 3D CAD modeling using SolidWorks, CATIA, and Fusion 360',
            url: `${BASE_URL}/services/mechanical-cad`,
        }),
    },
    '/services/fea-cfd': {
        title: 'FEA & CFD Simulation Services | Structural Analysis | Edinite',
        description: 'Advanced finite element analysis and CFD simulation for structural, thermal, and fluid dynamics optimization. ANSYS, COMSOL experts for student and startup projects.',
        keywords: 'fea analysis india, cfd simulation services, ansys simulation, structural analysis, thermal analysis, fea for students',
        primaryKeyword: 'fea cfd simulation',
        h1: 'FEA/CFD Simulation',
        jsonLd: generateServiceSchema({
            name: 'FEA/CFD Simulation',
            description: 'Advanced finite element analysis and CFD simulation services',
            url: `${BASE_URL}/services/fea-cfd`,
        }),
    },
    '/services/3d-printing': {
        title: '3D Printing & Rapid Prototyping Services | Edinite',
        description: 'Rapid prototyping with FDM, SLA, and SLS 3D printing technologies. From concept to functional prototype in days for student projects and startups.',
        keywords: '3d printing services, rapid prototyping india, fdm printing, sla printing, additive manufacturing, 3d printing for students',
        primaryKeyword: '3d printing services',
        h1: 'Rapid Printing Services',
        jsonLd: generateServiceSchema({
            name: '3D Printing & Rapid Prototyping',
            description: 'Rapid prototyping with FDM, SLA, and SLS 3D printing technologies',
            url: `${BASE_URL}/services/3d-printing`,
        }),
    },
    '/services/pcb-design': {
        title: 'PCB Design & Layout Services | Circuit Board Design | Edinite',
        description: 'Custom PCB design, schematic capture, and layout services using Altium Designer. IoT, embedded systems, and electronics for startups and student projects.',
        keywords: 'pcb design india, circuit board design, altium designer, pcb layout, electronic design, pcb for iot startups',
        primaryKeyword: 'pcb design india',
        h1: 'PCB Design & Development',
        jsonLd: generateServiceSchema({
            name: 'PCB Design & Development',
            description: 'Custom PCB design, schematic capture, and layout services',
            url: `${BASE_URL}/services/pcb-design`,
        }),
    },
    '/services/matlab': {
        title: 'MATLAB & Simulink Services | Control Systems | Edinite',
        description: 'MATLAB-based simulation, control systems design, data analysis, and algorithm development. Simulink modeling for dynamic systems and student projects.',
        keywords: 'matlab services, simulink modeling, control systems, data analysis, algorithm development, matlab for students',
        primaryKeyword: 'matlab services',
        h1: 'MATLAB-Based Simulation',
        jsonLd: generateServiceSchema({
            name: 'MATLAB & Simulink Services',
            description: 'MATLAB-based simulation, control systems design, and algorithm development',
            url: `${BASE_URL}/services/matlab`,
        }),
    },
    '/contact': {
        title: 'Contact Edinite - Get a Quote | Engineering Services',
        description: 'Get in touch with Edinite for your engineering project needs. Request a quote for CAD design, simulation, or PCB services. Quick response guaranteed.',
        keywords: 'contact edinite, engineering quote, cad design quote, project inquiry, get engineering help',
        primaryKeyword: 'contact edinite',
        h1: 'Get In Touch',
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: ORGANIZATION_SCHEMA,
        },
    },
    '/edutech': {
        title: 'Edutech - Engineering Training & Workshops | Edinite',
        description: 'Coming soon: Interactive engineering education platform with CAD training, simulation courses, and hands-on workshops for students.',
        keywords: 'engineering training, cad course, simulation training, pcb workshop, engineering education, learn cad india',
        primaryKeyword: 'engineering training',
        h1: 'EDUTECH Learning Platform',
    },
    '/portfolio': {
        title: 'Portfolio - Engineering Projects & Case Studies | Edinite',
        description: 'Explore our engineering portfolio featuring CAD designs, simulation projects, and successful case studies from Formula Student teams and startups.',
        keywords: 'engineering portfolio, cad projects, simulation case studies, design showcase, student projects',
        primaryKeyword: 'engineering portfolio',
        h1: 'Our Portfolio',
    },
};

// Helper to get SEO config for a route
export const getSEOConfig = (path: string): SEOConfig => {
    return SEO_CONFIG[path] || SEO_CONFIG['/'];
};
