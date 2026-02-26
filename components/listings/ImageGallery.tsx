'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function ImageGallery({ photos }: { photos: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)

    if (!photos || photos.length === 0) {
        return (
            <div className="relative aspect-video w-full bg-brand-bg-dark flex items-center justify-center">
                <span className="text-brand-text-muted">No images available</span>
            </div>
        )
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % photos.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
    }

    const currentPhoto = photos[currentIndex]

    return (
        <>
            <div className="relative group w-full aspect-[4/3] md:aspect-video bg-black overflow-hidden select-none">

                <Image
                    src={currentPhoto}
                    alt={`Property Photo ${currentIndex + 1} of ${photos.length}`}
                    fill
                    className="object-contain cursor-pointer transition-opacity duration-300"
                    sizes="100vw"
                    priority={currentIndex === 0}
                    onClick={() => setIsFullscreen(true)}
                />

                {/* Navigation Buttons (desktop mostly, but visible on mobile) */}
                {photos.length > 1 && (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full md:opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 touch-manipulation"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); handleNext(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full md:opacity-0 group-hover:opacity-100 transition-all focus:opacity-100 touch-manipulation"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}

                {/* Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-sm pointer-events-none">
                    {currentIndex + 1} / {photos.length}
                </div>
            </div>

            {/* Thumbnails row below */}
            {photos.length > 1 && (
                <div className="flex overflow-x-auto gap-2 py-4 snap-x hide-scrollbar">
                    {photos.map((photo, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 snap-start border-2 transition-all ${index === currentIndex ? 'border-brand-accent scale-100 opacity-100' : 'border-transparent scale-95 opacity-60 hover:opacity-100'}`}
                        >
                            <Image
                                src={photo}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100px, 150px"
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* Fullscreen Overlay */}
            {isFullscreen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
                    <button
                        onClick={() => setIsFullscreen(false)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors z-50 bg-black/50 rounded-full"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="relative w-full h-[80vh] flex items-center justify-center">
                        <Image
                            src={currentPhoto}
                            alt={`Fullscreen Property Photo ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />

                        {photos.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                                    className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full transition-all touch-manipulation z-50"
                                    autoFocus
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>

                                <button
                                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                                    className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-4 rounded-full transition-all touch-manipulation z-50"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </>
                        )}

                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium tracking-widest uppercase">
                            {currentIndex + 1} / {photos.length}
                        </div>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
        </>
    )
}
