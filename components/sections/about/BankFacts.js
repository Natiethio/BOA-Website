'use client'
import { useState, useEffect, useRef } from 'react'

function StatCounter({ end, suffix = '', highlight = false }) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [hasAnimated])

    useEffect(() => {
        if (!hasAnimated) return

        let startTime = null
        const duration = 1800 // Smooth 1.8s count animation

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            // Ease-out quadratic progression
            const easeOut = 1 - (1 - progress) * (1 - progress)
            setCount(Math.round(easeOut * end))

            if (progress < 1) {
                window.requestAnimationFrame(step)
            }
        }

        window.requestAnimationFrame(step)
    }, [hasAnimated, end])

    return (
        <span ref={ref} className={`fact-counter-number ${highlight ? 'is-highlight' : ''}`}>
            {count.toLocaleString()}
            {suffix && <span className="fact-suffix">{suffix}</span>}
        </span>
    )
}

const statsData = [
    {
        id: 1,
        icon: 'icon-21',
        value: 13160000,
        suffix: '+',
        label: 'Customers',
        highlight: true,
    },
    {
        id: 2,
        icon: 'icon-11',
        value: 10467,
        suffix: '+',
        label: 'Employees',
    },
    {
        id: 3,
        icon: 'icon-22',
        value: 984,
        suffix: '+',
        label: 'Branches',
    },
    {
        id: 4,
        icon: 'icon-23',
        value: 1761,
        suffix: '+',
        label: 'ATMs',
    },
    {
        id: 5,
        icon: 'icon-10',
        value: 80,
        suffix: '+',
        label: 'Virtual Banking Centers',
    },
    {
        id: 6,
        icon: 'icon-14',
        value: 996,
        suffix: '+',
        label: 'Cash Recyclers',
    },
]

export default function BankFacts() {
    return (
        <section className="about-facts-section" id="facts">
            <div className="auto-container">
                {/* Section Header */}
                <div className="sec-title centred mb_50">
                    <h6>Our Reach & Impact</h6>
                    <h2>Bank of Abyssinia in <span>Numbers</span></h2>
                </div>

                {/* 6-Card Uniform Grid */}
                <div className="facts-grid">
                    {statsData.map((item) => (
                        <div key={item.id} className="fact-card">
                            <div className="fact-card-inner">
                                <div className="icon-box">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="fact-card-content">
                                    <div className="fact-count-box">
                                        <StatCounter
                                            end={item.value}
                                            suffix={item.suffix}
                                            highlight={item.highlight}
                                        />
                                    </div>
                                    <p className="fact-label">{item.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
