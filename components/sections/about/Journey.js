'use client'
import { useState, useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const milestones = [
    {
        year: '1996',
        stat: 'Establishment',
        title: 'Bank of Abyssinia founded',
        desc: 'Established our first branch in Addis Ababa',
        icon: 'icon-5',
    },
    {
        year: '2005',
        stat: '100 Branches',
        title: 'Reached 100 branches nationwide',
        desc: 'Expanded our reach across Ethiopia',
        icon: 'icon-6',
    },
    {
        year: '2010',
        stat: 'Digital',
        title: 'Launched digital banking services',
        desc: 'Introduced our online banking platform',
        icon: 'icon-7',
    },
    {
        year: '2015',
        stat: '500 Branches',
        title: 'Expanded to 500 branches',
        desc: "Became one of Ethiopia's largest bank networks",
        icon: 'icon-8',
    },
    {
        year: '2020',
        stat: 'Mobile',
        title: 'Introduced mobile banking app',
        desc: 'Revolutionized banking convenience',
        icon: 'icon-10',
    },
    {
        year: '2024',
        stat: '10M+',
        title: 'Serving over 10M+ customers',
        desc: 'Continuing our journey of innovation and trust',
        icon: 'icon-11',
    },
]

export default function Journey() {
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const activeIndexRef = useRef(0)

    useEffect(() => {
        activeIndexRef.current = activeIndex
    }, [activeIndex])

    // Smoothly slide Swiper so the active card is comfortably in view
    const slideToMilestone = (index, swiper = swiperInstance) => {
        if (!swiper) return
        const isMobileOrTablet = typeof window !== 'undefined' ? window.innerWidth < 992 : false
        const maxSlide = swiper.snapGrid ? swiper.snapGrid.length - 1 : milestones.length - 1

        let target
        if (isMobileOrTablet) {
            // On mobile / tablet, slide directly to the active milestone card
            target = Math.max(0, Math.min(index, maxSlide))
        } else {
            // On desktop (4 visible), slide 0 shows [0,1,2,3], slide 1 shows [1,2,3,4], slide 2 shows [2,3,4,5]
            target = Math.max(0, Math.min(index <= 1 ? 0 : index - 1, maxSlide))
        }
        swiper.slideTo(target, 600)
    }

    const selectMilestone = (index) => {
        setActiveIndex(index)
        slideToMilestone(index)
    }

    const handleNext = () => {
        const next = (activeIndex + 1) % milestones.length
        selectMilestone(next)
    }

    const handlePrev = () => {
        const prev = (activeIndex - 1 + milestones.length) % milestones.length
        selectMilestone(prev)
    }

    // Auto-advance through milestones every 6 seconds (looping 1996 -> 2005 -> ... -> 2024 -> 1996)
    // Pauses only when the user hovers over or clicks a card
    useEffect(() => {
        if (isHovered || isPaused) return

        const timer = setInterval(() => {
            const next = (activeIndexRef.current + 1) % milestones.length
            selectMilestone(next)
        }, 6000)

        return () => clearInterval(timer)
    }, [swiperInstance, isHovered, isPaused])

    const progressWidth = (activeIndex / (milestones.length - 1)) * 100

    return (
        <>
            <section
                className="journey-section pt_110 pb_100"
                id="journey"
            >
                <div className="auto-container">
                    {/* Section Header */}
                    <div className="sec-title centred mb_50">
                        <h6>Our Story</h6>
                        <h2>The Journey</h2>
                        {/* <p>Milestones that shaped our legacy</p> */}
                    </div>

                    {/* Horizontal Timeline Track */}
                    <div className="journey-timeline-bar">
                        <div className="journey-timeline-track">
                            <div
                                className="journey-timeline-fill"
                                style={{ width: `${progressWidth}%` }}
                            />
                        </div>
                        <div className="journey-timeline-nodes">
                            {milestones.map((m, idx) => {
                                const isActive = idx === activeIndex
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        className={`journey-node-btn ${isActive ? 'is-active' : ''}`}
                                        onClick={() => selectMilestone(idx)}
                                        aria-label={`Jump to year ${m.year}`}
                                    >
                                        <span className="node-dot"></span>
                                        <span className="node-year">{m.year}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Horizontally Scrollable Cards Outer Container */}
                <div
                    className="journey-slider-outer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                >
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={setSwiperInstance}
                        onSlideChange={(swiper) => {
                            if (typeof window !== 'undefined' && window.innerWidth < 992) {
                                setActiveIndex(swiper.activeIndex)
                            }
                        }}
                        slidesPerView={1.15}
                        spaceBetween={16}
                        speed={600}
                        grabCursor={true}
                        breakpoints={{
                            576: {
                                slidesPerView: 1.6,
                                spaceBetween: 18,
                            },
                            768: {
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3.1,
                                spaceBetween: 24,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="journey-swiper"
                    >
                        {milestones.map((m, idx) => {
                            const isActive = idx === activeIndex
                            return (
                                <SwiperSlide key={idx} className="journey-slide">
                                    <div
                                        className={`journey-card ${isActive ? 'is-active' : ''}`}
                                        onClick={() => {
                                            selectMilestone(idx)
                                            setIsPaused(true)
                                        }}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        {/* Icon Box */}
                                        <div className="icon-box">
                                            <i className={m.icon}></i>
                                        </div>

                                        {/* Year Tag */}
                                        <span className="card-year">{m.year}</span>

                                        {/* Stat Headline */}
                                        {m.stat && (
                                            <div className="card-stat">{m.stat}</div>
                                        )}

                                        {/* Title */}
                                        <h4>{m.title}</h4>

                                        {/* Description */}
                                        <p>{m.desc}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                <div className="auto-container">
                    {/* Centered Prev / Next Controls */}
                    <div className="journey-nav-wrapper">
                        <button
                            type="button"
                            className="journey-nav-btn prev"
                            onClick={handlePrev}
                            aria-label="Previous milestone"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="journey-nav-btn next"
                            onClick={handleNext}
                            aria-label="Next milestone"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
