'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

interface GalleryProps {
    gallery: {
        src: string;
        caption: string;
        alt?: string;
    }[];
}

const ProjectGallery = ({ gallery }: GalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gallery.map((item, index) => (
                <div
                    key={index}
                    className="relative aspect-video cursor-pointer overflow-hidden rounded-lg shadow-md"
                    onClick={() => setSelectedImage(index)}
                >
                    <Image
                        src={item.src}
                        alt={item.alt || item.caption}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                        <p className="text-white text-sm">{item.caption}</p>
                    </div>
                </div>
            ))}
            
            {selectedImage !== null && (
                <ImageModal
                    images={gallery}
                    currentIndex={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </div>
    );
};

export default ProjectGallery; 