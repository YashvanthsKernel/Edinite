/**
 * OptimizedImage Component
 * 
 * A performance-optimized image component with:
 * - Native lazy loading
 * - Width/height to prevent CLS (Cumulative Layout Shift)
 * - Optional blur placeholder
 * - WebP format hint
 */

import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean; // Set true for above-the-fold images
    placeholder?: 'blur' | 'empty';
    'data-testid'?: string;
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    placeholder = 'empty',
    'data-testid': testId,
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (priority) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px', // Start loading 50px before entering viewport
                threshold: 0.01,
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    return (
        <div
            ref={imgRef}
            className={`relative overflow-hidden ${className}`}
            style={{
                width: width ? `${width}px` : undefined,
                height: height ? `${height}px` : undefined,
                aspectRatio: width && height ? `${width}/${height}` : undefined,
            }}
        >
            {/* Placeholder blur background */}
            {placeholder === 'blur' && !isLoaded && (
                <div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 animate-pulse"
                    style={{ filter: 'blur(20px)' }}
                />
            )}

            {/* Actual image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding={priority ? 'sync' : 'async'}
                    fetchPriority={priority ? 'high' : 'auto'}
                    onLoad={() => setIsLoaded(true)}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        } ${className}`}
                    data-testid={testId}
                />
            )}
        </div>
    );
}
