'use client'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import servicesData from "@/data/servicesData.json"

function ServiceIcon({ name }) {
    switch (name) {
        case 'user':
            return (
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
                </svg>
            )
        case 'bag':
            return (
                <svg viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
                </svg>
            )
        case 'phone':
            return (
                <svg viewBox="0 0 24 24">
                    <rect x="7" y="2" width="10" height="20" rx="2.5" />
                    <path d="M11 18h2" />
                </svg>
            )
        case 'mon':
            return (
                <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="12" rx="2" />
                    <path d="M8 20h8M12 16v4" />
                </svg>
            )
        case 'pct':
            return (
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 15l6-6" />
                    <circle cx="9.5" cy="9.5" r=".8" />
                    <circle cx="14.5" cy="14.5" r=".8" />
                </svg>
            )
        case 'card':
            return (
                <svg viewBox="0 0 24 24">
                    <rect x="2" y="5" width="20" height="14" rx="2.5" />
                    <path d="M2 10h20M6 15h4" />
                </svg>
            )
        case 'globe':
        default:
            return (
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
                </svg>
            )
    }
}

const RightArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
)

export default function Services() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const trackRef = useRef(null)
    const railRef = useRef(null)
    const segRefs = useRef([])
    const stageRef = useRef(null)
    const phoneRef = useRef(null)

    const totalItems = servicesData.length

    // Jump to any service when clicking left rail or mobile indicator
    const jumpTo = (index) => {
        if (!trackRef.current) return
        const rect = trackRef.current.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const trackTop = rect.top + scrollTop
        const totalScrollable = trackRef.current.offsetHeight - window.innerHeight
        if (totalScrollable <= 0) return
        const targetScroll = trackTop + ((index + 0.5) / totalItems) * totalScrollable
        window.scrollTo({ top: targetScroll, behavior: 'smooth' })
    }

    // Scroll-driven calculation
    useEffect(() => {
        let ticking = false

        const updateScroll = () => {
            if (!trackRef.current) return
            const rect = trackRef.current.getBoundingClientRect()
            const totalScrollable = trackRef.current.offsetHeight - window.innerHeight
            if (totalScrollable <= 0) return

            // Calculate progress (0 to 1) while inside the pinned track
            const progress = Math.min(1, Math.max(0, -rect.top / totalScrollable))
            const rawIndex = progress * totalItems
            const activeIdx = Math.min(totalItems - 1, Math.floor(rawIndex))

            setCurrentIndex((prev) => (prev !== activeIdx ? activeIdx : prev))

            // Update left vertical rail: extends to bottom of active item
            if (railRef.current) {
                const fractionInItem = Math.min(1, Math.max(0, rawIndex - activeIdx))
                const railProgress = (activeIdx + fractionInItem) / totalItems
                railRef.current.style.transform = `scaleY(${Math.max(1 / totalItems, railProgress)})`
            }

            // Update mobile indicator segments
            segRefs.current.forEach((seg, k) => {
                if (!seg) return
                const widthPercent =
                    k < activeIdx
                        ? 100
                        : k === activeIdx
                        ? Math.min(1, rawIndex - activeIdx) * 100
                        : 0
                seg.style.width = `${widthPercent}%`
            })
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    ticking = false
                    updateScroll()
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', updateScroll)
        updateScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', updateScroll)
        }
    }, [totalItems])

    // 3D tilt on pointer move over stage
    const handlePointerMove = (e) => {
        if (!stageRef.current) return
        const rect = stageRef.current.getBoundingClientRect()
        const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 16
        const rx = (0.5 - (e.clientY - rect.top) / rect.height) * 12
        if (phoneRef.current) {
            phoneRef.current.style.setProperty('--ry', `${ry}deg`)
            phoneRef.current.style.setProperty('--rx', `${rx}deg`)
        }
    }

    const handlePointerLeave = () => {
        if (phoneRef.current) {
            phoneRef.current.style.removeProperty('--ry')
            phoneRef.current.style.removeProperty('--rx')
        }
    }

    const currentService = servicesData[currentIndex] || servicesData[0]

    return (
        <section className="services-scroll-track" ref={trackRef} id="services">
            <div className="services-scroll-sticky">
                {/* ==================== LEFT COLUMN: OPTIONS RAIL ==================== */}
                <div className="services-side">
                    <span className="services-eyebrow">
                        <span className="d-none d-md-inline">Our Services</span>
                        <span className="d-md-none">{`Our Services · ${String(currentIndex + 1).padStart(2, '0')} / ${String(totalItems).padStart(2, '0')}`}</span>
                    </span>
                    <h2>
                        Banking at <span>fingertips</span>
                    </h2>

                    <div className="services-list">
                        <div className="services-rail">
                            <i ref={railRef}></i>
                        </div>
                        {servicesData.map((item, idx) => {
                            const isActive = idx === currentIndex
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`services-it ${isActive ? 'on' : ''}`}
                                    onClick={() => jumpTo(idx)}
                                    aria-current={isActive ? 'true' : undefined}
                                >
                                    <span className="ic">
                                        <ServiceIcon name={item.icon} />
                                    </span>
                                    <span>{item.label}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* ==================== CENTER COLUMN: ACTIVE CONTENT ==================== */}
                <div className="services-txt" key={currentService.id}>
                    <div className="services-eb">
                        <span className="ic">
                            <ServiceIcon name={currentService.icon} />
                        </span>
                        <span>{currentService.eyebrow}</span>
                    </div>

                    <h3>{currentService.heading}</h3>

                    <p>{currentService.description}</p>

                    <div className="services-chips">
                        {currentService.chips.map((chip, i) => (
                            <span key={i}>{chip}</span>
                        ))}
                    </div>

                    <div className="services-lk">
                        <div>
                            <small>Learn more</small>
                            <Link href={currentService.links[0].href} className="gold-link">
                                {currentService.links[0].label} <RightArrowIcon />
                            </Link>
                        </div>
                        <div>
                            <small>Get started</small>
                            <Link href={currentService.links[1].href}>
                                {currentService.links[1].label} <RightArrowIcon />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ==================== RIGHT COLUMN: VISUAL STAGE (SERVICE IMAGE) ==================== */}
                <div className="services-vis">
                    <div
                        className="services-stage"
                        ref={stageRef}
                        onPointerMove={handlePointerMove}
                        onPointerLeave={handlePointerLeave}
                    >
                        {currentService.image && (
                            <figure className="services-fig" ref={phoneRef} key={currentService.id}>
                                <img
                                    src={currentService.image}
                                    alt={currentService.heading}
                                    className="services-pic"
                                />
                            </figure>
                        )}
                    </div>
                </div>

                {/* ==================== MOBILE BOTTOM PROGRESS INDICATOR ==================== */}
                <div className="services-ind">
                    {servicesData.map((_, i) => (
                        <i key={i} onClick={() => jumpTo(i)} title={`Jump to service ${i + 1}`}>
                            <b ref={(el) => (segRefs.current[i] = el)}></b>
                        </i>
                    ))}
                </div>
            </div>
        </section>
    )
}
