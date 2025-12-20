/**
 * HiddenSEO Component
 * 
 * This component renders SEO-rich content that is hidden from visual users
 * but accessible to search engine crawlers. Uses sr-only (screen-reader only)
 * CSS class to hide content visually while keeping it in the DOM.
 */

import React from 'react';

// SEO Keywords organized by category
const SEO_KEYWORDS = {
    coreServices: [
        'digital engineering services',
        'digital engineering studio in india',
        'engineering simulation services',
        'virtual prototyping services',
        'product design simulation services for startups',
        'engineering design and simulation for student projects',
    ],
    cadDesign: [
        'cad design services india',
        '3d cad modelling services',
        '3d product modelling and rendering',
        'cad design for student projects',
        'cad design for hardware startups',
        'mechanical cad design and drafting',
    ],
    feaCfd: [
        'fea analysis services india',
        'cfd simulation services india',
        'structural analysis fea services',
        'thermal analysis simulation services',
        'aerodynamics cfd simulation for drones',
        'fea cfd services for student projects',
        'fea cfd services for startups',
    ],
    pcbElectronics: [
        'pcb design services india',
        'pcb layout and routing services',
        'circuit design and pcb design',
        'pcb design for iot startups',
        'pcb design support for student projects',
    ],
    edutech: [
        'digital engineering training for students',
        'cad training for engineering students',
        'fea cfd course for mechanical students',
        'pcb design workshop for college students',
        'industry-oriented cfd and fea training',
    ],
    brand: [
        'bridge between classroom and industry',
        'virtual validation before fabrication',
        'research-backed cad and simulation',
        'design simulate optimize validate',
        'engineering r&d support for students and startups',
    ],
};

// Long-tail keywords / questions
const LONG_TAIL_KEYWORDS = [
    'how to validate engineering project before fabrication',
    'why student hardware projects fail after manufacturing',
    'how to do cfd simulation for student project',
    'how to do fea analysis for final year project',
    'simulation support for formula student baja robotics teams',
    'simulation services for hardware startups',
    'using simulation to reduce prototype cost',
    'virtual testing before manufacturing for startups',
    'cfd and fea for pitch deck validation',
    'how to design pcb for iot prototype',
    'common pcb design mistakes in student projects',
    'pcb layout review before manufacturing',
];

interface HiddenSEOProps {
    page?: 'home' | 'services' | 'about' | 'contact' | 'edutech' | 'cad' | 'fea-cfd' | 'pcb';
}

export default function HiddenSEO({ page = 'home' }: HiddenSEOProps) {
    // Select keywords based on page context
    const getKeywordsForPage = () => {
        switch (page) {
            case 'cad':
                return [...SEO_KEYWORDS.cadDesign, ...SEO_KEYWORDS.coreServices];
            case 'fea-cfd':
                return [...SEO_KEYWORDS.feaCfd, ...SEO_KEYWORDS.coreServices];
            case 'pcb':
                return [...SEO_KEYWORDS.pcbElectronics, ...SEO_KEYWORDS.coreServices];
            case 'edutech':
                return [...SEO_KEYWORDS.edutech, ...SEO_KEYWORDS.brand];
            case 'services':
                return [...SEO_KEYWORDS.coreServices, ...SEO_KEYWORDS.cadDesign, ...SEO_KEYWORDS.feaCfd, ...SEO_KEYWORDS.pcbElectronics];
            case 'about':
                return [...SEO_KEYWORDS.brand, ...SEO_KEYWORDS.coreServices];
            default:
                return Object.values(SEO_KEYWORDS).flat();
        }
    };

    const keywords = getKeywordsForPage();

    return (
        <>
            {/* Screen-reader only content for SEO */}
            <div className="sr-only" aria-hidden="true">
                <h2>Edinite - Digital Engineering & Simulation Services for Students and Startups in India</h2>
                <p>
                    Edinite is India's leading digital engineering studio providing professional
                    {keywords.slice(0, 10).join(', ')}.
                    We serve as the bridge between classroom and industry, offering virtual validation
                    before fabrication to help students and startups succeed.
                </p>

                <h3>Our Services</h3>
                <ul>
                    {keywords.map((keyword, index) => (
                        <li key={index}>{keyword}</li>
                    ))}
                </ul>

                <h3>Common Questions</h3>
                <ul>
                    {LONG_TAIL_KEYWORDS.map((question, index) => (
                        <li key={index}>{question}</li>
                    ))}
                </ul>

                <p>
                    Looking for {SEO_KEYWORDS.coreServices.join(' or ')}?
                    Edinite provides research-backed CAD and simulation services with a focus on
                    design, simulate, optimize, and validate methodology. We support formula student,
                    BAJA SAE, and robotics teams with professional engineering R&D support.
                </p>
            </div>

            {/* Noscript fallback for crawlers that don't execute JS */}
            <noscript>
                <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
                    <h1>Edinite - Digital Engineering & Simulation Services for Students and Startups in India</h1>
                    <p>CAD design services india, FEA analysis services india, CFD simulation services india, PCB design services india, 3D CAD modelling services, virtual prototyping services, engineering design and simulation for student projects, cad design for hardware startups, fea cfd services for startups, pcb design for iot startups, digital engineering training for students, simulation support for formula student teams.</p>
                </div>
            </noscript>
        </>
    );
}
