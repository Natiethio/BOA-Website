'use client'
import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const DURATION = 6000 // 6 seconds per slide

const SLIDES = [
    {
        id: 1,
        // tag: "01 · Hero slider",
        title: <>Open <span>FCY</span> Account</>,
        text: "Open a foreign currency account and start investing in international markets using your international virtual card.",
        btnText: "Discover More",
        btnLink: "/service-details",
        bg: "assets/images/banner/banner_2.png",
    },
    {
        id: 2,
        // tag: "02 · Hero slider",
        title: <>Instant <span>Merchant</span> Payments</>,
        text: "This statistic is based on our average personal current account online opening time from the last 12 months.",
        btnText: "Discover More",
        btnLink: "/service-details",
        bg: "assets/images/banner/banner_1.png",
    },
    {
        id: 3,
        // tag: "03 · Hero slider",
        title: <>Fast <span>Loan</span> In Seconds</>,
        text: "This statistic is based on our average personal current account online opening time from the last 12 months.",
        btnText: "Discover More",
        btnLink: "/service-details",
        bg: "assets/images/banner/banner_3.png",
    },
]

export default function Banner() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [animKey, setAnimKey] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const swiperRef = useRef(null)
    const timerRef = useRef(null)
    const startTimeRef = useRef(Date.now())
    const remainingRef = useRef(DURATION)

    const nextSlide = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slideNext()
        }
    }, [])

    const prevSlide = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev()
        }
    }, [])

    const goToSlide = useCallback((idx) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(idx)
        }
    }, [])

    // Autoplay & progress timer (pauses on hover, resumes on leave)
    useEffect(() => {
        if (isPaused) {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
                timerRef.current = null
            }
            const elapsed = Date.now() - startTimeRef.current
            remainingRef.current = Math.max(0, remainingRef.current - elapsed)
            return
        }

        startTimeRef.current = Date.now()
        timerRef.current = setTimeout(() => {
            remainingRef.current = DURATION
            nextSlide()
        }, remainingRef.current)

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [activeIndex, animKey, isPaused, nextSlide])

    const handleSlideChange = (swiper) => {
        remainingRef.current = DURATION
        startTimeRef.current = Date.now()
        setActiveIndex(swiper.realIndex)
        setAnimKey((prev) => prev + 1)
    }

    return (
        <section
            className="banner-section p_relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                speed={800}
                onSlideChange={handleSlideChange}
                className="banner-carousel"
            >
                {SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id} className="slide-item p_relative">
                        <div
                            className="bg-layer"
                            style={{ backgroundImage: `url(${slide.bg})` }}
                        ></div>
                        <div className="pattern-layer">
                            <div
                                className="pattern-1"
                                style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}
                            ></div>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                {/* Top Pill Badge matching wireframe (e.g. 02 · Hero slider) */}


                                {/* Yellow Accent Line above Heading matching wireframe */}
                                <div className="banner-accent-line"></div>

                                <h2>{slide.title}</h2>
                                <p>{slide.text}</p>
                                <div className="btn-box">
                                    <Link href={slide.btnLink} className="theme-btn btn-one">
                                        {slide.btnText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows matching wireframe */}
            <button
                type="button"
                className="banner-nav-arrow banner-nav-prev"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                type="button"
                className="banner-nav-arrow banner-nav-next"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>

            {/* Bottom Progressive Indicator matching wireframe */}
            <div className="banner-bottom-indicator">
                <div className="auto-container">
                    <div className="indicator-inner">
                        {/* Slide Counter (e.g. 01 / 03) */}
                        <div className="banner-counter">
                            <span className="current">
                                {String(activeIndex + 1).padStart(2, "0")}
                            </span>
                            <span className="sep">/</span>
                            <span className="total">
                                {String(SLIDES.length).padStart(2, "0")}
                            </span>
                        </div>

                        {/* 3 Progressive Segment Bars */}
                        <div className="banner-progress-bars">
                            {SLIDES.map((_, idx) => {
                                const isCompleted = idx < activeIndex
                                const isActive = idx === activeIndex
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        className={`banner-progress-bar ${
                                            isCompleted ? "completed" : ""
                                        } ${isActive ? "active" : ""}`}
                                        onClick={() => goToSlide(idx)}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    >
                                        <span
                                            key={`fill-${idx}-${activeIndex}-${animKey}`}
                                            className="bar-fill"
                                            style={{
                                                animationDuration: `${DURATION}ms`,
                                                animationPlayState: isPaused
                                                    ? "paused"
                                                    : "running",
                                            }}
                                        />
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
