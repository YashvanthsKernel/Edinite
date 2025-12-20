/**
 * Internal Linking Configuration
 * 
 * Defines relationships between pages for internal linking:
 * - Related services for each service page
 * - CTAs per page type
 * - FAQ content per service
 */

import { Box, Wind, Printer, Microchip, Code } from 'lucide-react';

export interface RelatedLink {
    title: string;
    href: string;
    description: string;
    icon?: any;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ServiceLinkingConfig {
    relatedServices: RelatedLink[];
    faqs: FAQItem[];
    ctaText: string;
    ctaDescription: string;
}

// Related services for cross-linking
const ALL_SERVICES: RelatedLink[] = [
    {
        title: 'Mechanical CAD Design',
        href: '/services/mechanical-cad',
        description: '3D modeling with SolidWorks, CATIA, Fusion 360',
        icon: Box,
    },
    {
        title: 'FEA/CFD Simulation',
        href: '/services/fea-cfd',
        description: 'Structural and thermal analysis with ANSYS',
        icon: Wind,
    },
    {
        title: '3D Printing Services',
        href: '/services/3d-printing',
        description: 'Rapid prototyping with FDM, SLA, SLS',
        icon: Printer,
    },
    {
        title: 'PCB Design',
        href: '/services/pcb-design',
        description: 'Circuit board design with Altium Designer',
        icon: Microchip,
    },
    {
        title: 'MATLAB Solutions',
        href: '/services/matlab',
        description: 'Control systems and algorithm development',
        icon: Code,
    },
];

// Get related services (excludes current service)
export const getRelatedServices = (currentPath: string, count = 3): RelatedLink[] => {
    return ALL_SERVICES
        .filter(s => s.href !== currentPath)
        .slice(0, count);
};

// Service-specific FAQs
export const SERVICE_FAQS: Record<string, FAQItem[]> = {
    '/services/mechanical-cad': [
        {
            question: 'What CAD file formats do you deliver?',
            answer: 'We deliver in all major formats including STEP, IGES, STL, Parasolid, and native formats for SolidWorks, CATIA, Fusion 360, and Inventor.',
        },
        {
            question: 'What is your typical turnaround time for CAD projects?',
            answer: 'Simple parts take 2-3 days, complex assemblies 1-2 weeks. We offer expedited delivery for urgent student project deadlines.',
        },
        {
            question: 'Do you offer revision support?',
            answer: 'Yes, we include 2 rounds of revisions in our standard pricing. Additional revisions are available at discounted rates.',
        },
        {
            question: 'Can you work with existing CAD files?',
            answer: 'Absolutely! We handle reverse engineering, design modifications, and format conversions for existing CAD models.',
        },
    ],
    '/services/fea-cfd': [
        {
            question: 'What simulation software do you use?',
            answer: 'We primarily use ANSYS Workbench, ANSYS Fluent, CFX, Abaqus, and COMSOL Multiphysics depending on project requirements.',
        },
        {
            question: 'How accurate are your simulation results?',
            answer: 'Our simulations achieve 95%+ correlation with experimental results. We validate mesh independence and use industry-standard convergence criteria.',
        },
        {
            question: 'What deliverables do I receive from a simulation project?',
            answer: 'You receive a comprehensive report with stress/strain plots, factor of safety analysis, optimization recommendations, and raw data files.',
        },
        {
            question: 'Do you support Formula Student teams?',
            answer: 'Yes! We have extensive experience with FSAE/Formula Student projects including chassis analysis, suspension optimization, and aerodynamics.',
        },
    ],
    '/services/3d-printing': [
        {
            question: 'What 3D printing technologies do you offer?',
            answer: 'We offer FDM for prototypes, SLA for precision parts, and SLS for functional testing. Material options include PLA, ABS, PETG, resin, and nylon.',
        },
        {
            question: 'What are your dimensional tolerances?',
            answer: 'FDM: ±0.3mm, SLA: ±0.1mm, SLS: ±0.15mm. Tighter tolerances available with post-processing.',
        },
        {
            question: 'Can you handle batch production?',
            answer: 'Yes, we support batches from 1 to 100+ units with consistent quality and volume discounts for larger orders.',
        },
        {
            question: 'Do you offer post-processing services?',
            answer: 'We provide sanding, painting, vapor smoothing, and assembly services to deliver production-ready parts.',
        },
    ],
    '/services/pcb-design': [
        {
            question: 'What is the maximum PCB complexity you handle?',
            answer: 'We design up to 8-layer PCBs with fine-pitch BGAs, high-speed differential pairs, and RF sections.',
        },
        {
            question: 'Do you perform DFM checks?',
            answer: 'Yes, every design includes Design for Manufacturing (DFM) verification to ensure smooth production with your chosen fab house.',
        },
        {
            question: 'What file formats do you deliver?',
            answer: 'We provide Gerber files, assembly drawings, BOM, pick-and-place files, and native Altium/KiCad project files.',
        },
        {
            question: 'Can you help with component selection?',
            answer: 'Absolutely! We assist with component selection considering cost, availability, and technical requirements.',
        },
    ],
    '/services/matlab': [
        {
            question: 'Which MATLAB toolboxes do you work with?',
            answer: 'We are proficient in Control System, Signal Processing, Image Processing, Machine Learning, and Simulink toolboxes.',
        },
        {
            question: 'Can you help with my academic MATLAB project?',
            answer: 'Yes! We support B.Tech, M.Tech, and PhD students with algorithm development, simulation, and thesis documentation.',
        },
        {
            question: 'Do you provide code documentation?',
            answer: 'All MATLAB code comes with comprehensive comments, function documentation, and a user guide for your reference.',
        },
        {
            question: 'Can you convert MATLAB code to other languages?',
            answer: 'We can convert MATLAB algorithms to Python, C/C++, or generate standalone executables using MATLAB Compiler.',
        },
    ],
};

// Get FAQs for a specific page
export const getFAQs = (path: string): FAQItem[] => {
    return SERVICE_FAQS[path] || [];
};

// Generate FAQPage JSON-LD schema
export const generateFAQSchema = (faqs: FAQItem[]) => {
    if (faqs.length === 0) return null;

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
};

// Quick links for footer/navigation
export const QUICK_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
];

// Service links for navigation
export const SERVICE_LINKS = ALL_SERVICES.map(s => ({
    label: s.title,
    href: s.href,
}));
