'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
    images: {
        src: string;
        caption: string;
        alt?: string;
    }[];
    currentIndex: number;
    onClose: () => void;
}

const ImageModal = ({ images, currentIndex, onClose }: ImageModalProps) => {
    const currentImage = images[currentIndex];

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    if (!currentImage) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="relative w-[90vw] h-[90vh] max-w-7xl">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Image container */}
                <div className="relative w-full h-full">
                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt || currentImage.caption}
                        fill
                        className="object-contain"
                        sizes="90vw"
                        priority
                        onClick={(e) => e.stopPropagation()}
                    />
                    {currentImage.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                            {currentImage.caption}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
