"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * Triangular, responsive card layout
 * - 3 cards on small screens, 5 cards on larger screens.
 * - No horizontal scrollbar (overflow-x clipped; vertical effects preserved).
 */
const images = [
    { id: 1, src: "/characters/character1.png", alt: "Character 1", bg: "#584d5f" },
    { id: 2, src: "/characters/character2.png", alt: "Character 2", bg: "#6C4A8E" },
    { id: 3, src: "/characters/character3.png", alt: "Character 3", bg: "#6e8292" },
    { id: 4, src: "/characters/character4.png", alt: "Character 4", bg: "#4ee1d5" },
    { id: 5, src: "/characters/character5.png", alt: "Character 5", bg: "#c595a5" },
    { id: 6, src: "/characters/character6.png", alt: "Character 6", bg: "#2F8572" },
];

export default function TriangularImageScroller() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const stageRef = useRef<HTMLDivElement | null>(null);
    const [stageWidth, setStageWidth] = useState<number>(0);

    // Determine small vs. large (Tailwind sm breakpoint ~640px)
    const isSmall = stageWidth < 640;

    // Responsive measurements derived from available width
    const { baseSize, stepX, lifts, stageHeight } = useMemo(() => {
        const w = Math.max(stageWidth, 320);
        const targetCols = w < 480 ? 2.4 : w < 768 ? 3.2 : w < 1024 ? 4 : 5;
        const proposed = Math.floor(w / targetCols);
        const size = Math.max(120, Math.min(260, proposed)); // base card size for the center

        const spacingFactor = w < 480 ? 0.85 : w < 768 ? 0.95 : w < 1024 ? 1.0 : 1.1;
        const baseGap = w < 480 ? 8 : w < 768 ? 10 : 12;
        const stepX = Math.floor(size * spacingFactor) + baseGap;

        const lift0 = Math.round(size * 0.75); // top center
        const lift1 = Math.round(size * 0.42); // mid row
        const lift2 = Math.round(size * 0.08); // bottom row

        const stageHeight = Math.floor(size * 1.8);

        return { baseSize: size, stepX, lifts: [lift0, lift1, lift2], stageHeight };
    }, [stageWidth]);

    // ResizeObserver for responsive width
    useEffect(() => {
        if (!stageRef.current) return;
        const el = stageRef.current;
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const cw = entry.contentRect.width;
                setStageWidth(Math.floor(cw));
            }
        });
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const mod = useCallback((n: number, m: number) => ((n % m) + m) % m, []);
    const scrollLeft = () => setCurrentIndex((p) => p - 1);
    const scrollRight = () => setCurrentIndex((p) => p + 1);

    // Visible offsets relative to currentIndex
    const visibleOffsets = useMemo(
        () => (isSmall ? [-1, 0, 1] : [-2, -1, 0, 1, 2]),
        [isSmall]
    );

    // Slot definitions for positions/scales/z-index/opacity
    const slots = useMemo(() => {
        const [lift0, lift1, lift2] = lifts;

        if (isSmall) {
            // [-1] [0] [+1]
            return [
                { x: -stepX * 0.9, y: -lift1, scale: 0.92, z: 30, o: 0.92, r: -1 },
                { x: 0, y: -lift0, scale: 1.0, z: 50, o: 1.0, r: 0 },
                { x: stepX * 0.9, y: -lift1, scale: 0.92, z: 30, o: 0.92, r: 1 },
            ];
        }

        // 5-slot triangle
        return [
            { x: -stepX * 2.1, y: -lift2, scale: 0.84, z: 20, o: 0.7, r: -2 },
            { x: -stepX * 1.05, y: -lift1, scale: 0.91, z: 30, o: 0.88, r: -1 },
            { x: 0, y: -lift0, scale: 1.0, z: 50, o: 1.0, r: 0 },
            { x: stepX * 1.05, y: -lift1, scale: 0.91, z: 30, o: 0.88, r: 1 },
            { x: stepX * 2.1, y: -lift2, scale: 0.84, z: 20, o: 0.7, r: 2 },
        ];
    }, [lifts, stepX, isSmall]);

    const sizeForScale = useCallback((scale: number) => Math.round(baseSize * scale), [baseSize]);

    const onCardClick = (offset: number) => {
        if (offset === 0) return;
        setIsTransitioning(true);
        setCurrentIndex((p) => p + offset);
    };

    // Keyboard support
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") scrollLeft();
            if (e.key === "ArrowRight") scrollRight();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Enable transitions when index changes
    useEffect(() => {
        setIsTransitioning(true);
        const t = window.setTimeout(() => setIsTransitioning(false), 300);
        return () => window.clearTimeout(t);
    }, [currentIndex]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative flex flex-col items-center justify-center">
                {/* Stage */}
                <div
                    ref={stageRef}
                    className="
                        relative w-full
                        overflow-x-clip sm:overflow-x-visible
                        overflow-y-visible  
                        px-4 sm:px-6
                    "
                    style={{ height: stageHeight }}
                    aria-roledescription="carousel"
                >
                    <div className="absolute inset-0 flex items-end justify-center">
                        {visibleOffsets.map((offset, i) => {
                            const img = images[mod(currentIndex + offset, images.length)];
                            const s = slots[i];
                            const cardSize = sizeForScale(s.scale);

                            return (
                                <div
                                    key={`${img.id}-${offset}`}
                                    className={`absolute cursor-pointer select-none ${isTransitioning ? "transition-opacity duration-300 ease-out" : ""
                                        }`}
                                    style={{
                                        transform: `translateX(${s.x}px) translateY(${s.y}px) rotate(${s.r}deg)`,
                                        zIndex: s.z,
                                        opacity: s.o,
                                    }}
                                    onClick={() => onCardClick(offset)}
                                >
                                    {/* Wrapper sets the card box; contents are layered */}
                                    <div
                                        className="relative rounded-2xl overflow-visible"
                                        style={{ height: cardSize, width: cardSize }}
                                        aria-current={offset === 0}
                                    >
                                        {/* Bookmark background */}
                                        {(() => {
                                            const bookmarkStart = 0.35; // 35% of the card height
                                            const scale = 1.06;
                                            const bw = cardSize * scale;
                                            const bh = cardSize * scale;

                                            return (
                                                <div
                                                    aria-hidden
                                                    className="absolute -z-10"
                                                    style={{
                                                        width: bw,
                                                        height: bh,
                                                        left: (cardSize - bw) / 2,
                                                        top: cardSize * bookmarkStart,
                                                        backgroundColor: img.bg,
                                                        WebkitMaskImage: "url(/bookmark.png)",
                                                        maskImage: "url(/bookmark.png)",
                                                        WebkitMaskSize: "contain",
                                                        maskSize: "contain",
                                                        WebkitMaskRepeat: "no-repeat",
                                                        maskRepeat: "no-repeat",
                                                        WebkitMaskPosition: "top center",
                                                        maskPosition: "top center",
                                                        borderRadius: 16,
                                                    }}
                                                />
                                            );
                                        })()}

                                        {/* Character image */}
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 h-full w-full">
                                            <Image
                                                src={img.src || "/placeholder.svg"}
                                                alt={img.alt}
                                                fill
                                                className="object-cover"
                                                sizes={`(max-width: 480px) ${Math.min(cardSize, 160)}px,
                                 (max-width: 768px) ${Math.min(cardSize, 200)}px,
                                 (max-width: 1024px) ${Math.min(cardSize, 240)}px,
                                 ${cardSize}px`}
                                                priority={offset === 0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Controls */}
                    <div className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-50">
                        <button
                            onClick={scrollLeft}
                            className="h-10 w-16 sm:h-12 sm:w-20 lg:h-14 lg:w-24 rounded-full bg-[#E8E3D8] hover:bg-[#DDD8CC] transition-colors shadow-lg flex items-center justify-center"
                            aria-label="Scroll left"
                        >
                            <ArrowDownLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-black" strokeWidth={2} />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="h-10 w-16 sm:h-12 sm:w-20 lg:h-14 lg:w-24 rounded-full bg-[#E8E3D8] hover:bg-[#DDD8CC] transition-colors shadow-lg flex items-center justify-center"
                            aria-label="Scroll right"
                        >
                            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-black" strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
