'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const CARDS = [
    {
        id: 1,
        name: "International",
        sub: "Visa Debit · International",
        image: "assets/images/resource/BOA_Classic International.png",
        link: "/contact",
    },
    {
        id: 2,
        name: "Platinum",
        sub: "Visa Debit · Platinum",
        image: "assets/images/resource/platinumcard.png",
        link: "/contact",
    },
    {
        id: 3,
        name: "Classic",
        sub: "Visa Debit · Classic",
        image: "assets/images/resource/classiccard.png",
        link: "/contact",
    },
    {
        id: 4,
        name: "Gold",
        sub: "Visa Debit · Gold",
        image: "assets/images/resource/Gold card.jpg",
        link: "/contact",
    },
    {
        id: 5,
        name: "Infinite Card",
        sub: "Visa Debit · Infinite",
        image: "assets/images/resource/Infinite card.png",
        link: "/contact",
    },
    {
        id: 6,
        name: "Amen Card",
        sub: "Visa Debit · Interest Free",
        image: "assets/images/resource/amencard.png",
        link: "/contact",
    },
]

const STATES = [
    { y: 0, s: 1, o: 1, z: 4 },        // Slot 0: Front active card
    { y: -18, s: 0.95, o: 1, z: 3 },    // Slot 1: 1 step behind & higher
    { y: -36, s: 0.90, o: 1, z: 2 },    // Slot 2: 2 steps behind & higher
    { y: -36, s: 0.90, o: 0, z: 1 },    // Slot 3+: Waiting behind (invisible)
]

export default function Card() {
    const [order, setOrder] = useState(() => CARDS.map((_, i) => i))
    const orderRef = useRef(order)
    const cardRefs = useRef([])
    const stackRef = useRef(null)
    const busyRef = useRef(false)
    const timerRef = useRef(null)

    // Helper to apply CSS variables to a card DOM element
    const put = (node, st) => {
        if (!node) return
        node.style.setProperty('--y', `${st.y}px`)
        node.style.setProperty('--s', `${st.s}`)
        node.style.setProperty('--o', `${st.o}`)
        node.style.setProperty('--z', `${st.z}`)
    }

    // Render cards in their stacked slots
    const renderCards = (currentOrder, skipIdx = null) => {
        currentOrder.forEach((cardIdx, pos) => {
            if (cardIdx === skipIdx) return
            const node = cardRefs.current[cardIdx]
            if (!node) return
            const st = STATES[Math.min(pos, 3)]
            put(node, st)
            node.style.pointerEvents = pos === 0 ? 'auto' : 'none'
        })
    }

    // Dynamic container height calculation so cards never clip
    const fitHeight = () => {
        if (!stackRef.current) return
        const frontNode = cardRefs.current[orderRef.current[0]]
        if (!frontNode) return
        const h = frontNode.offsetHeight
        if (h > 0) {
            stackRef.current.style.height = `${h + 40 + 28}px`
        }
    }

    // Advance stack: dir = 1 for Next (downward glide), dir = -1 for Prev
    const advance = (dir = 1) => {
        if (busyRef.current || CARDS.length < 2) return
        busyRef.current = true

        if (dir === 1) {
            // Next: Front card glides smoothly DOWN and fades
            const front = orderRef.current[0]
            const frontNode = cardRefs.current[front]
            const nextOrder = [...orderRef.current.slice(1), front]
            orderRef.current = nextOrder
            setOrder(nextOrder)

            if (frontNode) {
                const dropY = frontNode.offsetHeight * 0.3 + 70
                put(frontNode, { y: dropY, s: 1, o: 0, z: 10 })
            }
            renderCards(nextOrder, front)

            // After transition, snap the leaving card into its waiting resting spot
            setTimeout(() => {
                if (frontNode) {
                    frontNode.classList.add('no-anim')
                    put(frontNode, STATES[3])
                    void frontNode.offsetWidth // Force reflow
                    frontNode.classList.remove('no-anim')
                }
                renderCards(orderRef.current)
                busyRef.current = false
            }, 900)
        } else {
            // Prev: Bring the last card smoothly back up to the front
            const back = orderRef.current[orderRef.current.length - 1]
            const backNode = cardRefs.current[back]

            if (backNode) {
                backNode.classList.add('no-anim')
                const dropY = backNode.offsetHeight * 0.3 + 70
                put(backNode, { y: dropY, s: 1, o: 0, z: 10 })
                void backNode.offsetWidth // Force reflow
                backNode.classList.remove('no-anim')
            }

            const prevOrder = [back, ...orderRef.current.slice(0, -1)]
            orderRef.current = prevOrder
            setOrder(prevOrder)
            renderCards(prevOrder)

            setTimeout(() => {
                busyRef.current = false
            }, 900)
        }
    }

    const startTimer = () => {
        stopTimer()
        timerRef.current = setInterval(() => {
            advance(1)
        }, 4500)
    }

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
        }
    }

    const handleNext = () => {
        advance(1)
        startTimer()
    }

    const handlePrev = () => {
        advance(-1)
        startTimer()
    }

    useEffect(() => {
        orderRef.current = order

        // Initial setup: place cards without animation
        cardRefs.current.forEach((node) => {
            if (node) node.classList.add('no-anim')
        })
        renderCards(orderRef.current)
        fitHeight()

        // Re-enable animations on next frame
        const raf = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                cardRefs.current.forEach((node) => {
                    if (node) node.classList.remove('no-anim')
                })
            })
        })

        startTimer()

        const handleResize = () => fitHeight()
        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopTimer()
            } else {
                startTimer()
            }
        }

        window.addEventListener('resize', handleResize)
        document.addEventListener('visibilitychange', handleVisibilityChange)

        return () => {
            stopTimer()
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('visibilitychange', handleVisibilityChange)
        }
    }, [])

    const activeIndex = order[0]

    return (
        <section className="cards-section" id="cards">
            <div className="auto-container">
                <div className="cards-wrapper">
                    {/* LEFT COLUMN: Details & Action */}
                    <div className="cards-info">
                        <div className="sec-title">
                            <h6>Our Cards</h6>
                            <h2>
                                Visa Debit Cards <span>We Provide</span>
                            </h2>
                        </div>
                        <p className="lead-text">
                            Discover Bank of Abyssinia cards designed to make everyday payments easier, safer, and more convenient.
                            Explore and choose the one that best suits your financial needs and lifestyle.
                        </p>

                        <p className="contact-lead-note">
                            For any card-related inquiries, reach us directly or visit your nearest branch:
                        </p>

                        {/* Horizontal Contact Row: Phone & Email */}
                        <div className="card-contact-row">
                            <div className="card-contact-item">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                                    </svg>
                                </div>
                                <div className="contact-details">
                                    <small>Call Support</small>
                                    <b><a href="tel:8397">8397</a></b>
                                </div>
                            </div>

                            <div className="contact-divider"></div>

                            <div className="card-contact-item">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24">
                                        <rect x="3" y="5" width="18" height="14" rx="2" />
                                        <path d="M3 7l9 6 9-6" />
                                    </svg>
                                </div>
                                <div className="contact-details">
                                    <small>Email Support</small>
                                    <b><a href="mailto:info@bankofabyssinia.com">info@bankofabyssinia.com</a></b>
                                </div>
                            </div>
                        </div>

                        {/* Request Card Button */}
                        <div className="btn-box mt_35">
                            <Link className="request-card-btn" href="/contact">
                                <span>Request Your Card</span>
                                {/* <svg viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9.5" />
                                    <path d="M8.5 12h7m-3-3l3 3-3 3" />
                                </svg> */}
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Animated 6-Card Stack */}
                    <div className="cards-stack">
                        <div
                            className="stack-container"
                            ref={stackRef}
                            onMouseEnter={stopTimer}
                            onMouseLeave={startTimer}
                            onFocus={stopTimer}
                            onBlur={startTimer}
                        >
                            {CARDS.map((c, i) => (
                                <article
                                    key={c.id}
                                    ref={(el) => (cardRefs.current[i] = el)}
                                    className="stack-card"
                                >
                                    <div className="card-img">
                                        <img
                                            src={c.image}
                                            alt={c.name}
                                            draggable="false"
                                            onLoad={fitHeight}
                                        />
                                    </div>
                                    <div className="card-foot">
                                        <div className="card-info">
                                            <div className="card-name">{c.name}</div>
                                            <div className="card-sub">{c.sub}</div>
                                        </div>
                                        <Link className="apply-btn" href={c.link}>
                                            View More
                                            <svg viewBox="0 0 24 24">
                                                <path d="M9.5 18l6-6-6-6" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Stack Navigation Controls */}
                        <div className="stack-controls">
                            <button
                                className="circle-btn"
                                type="button"
                                onClick={handlePrev}
                                aria-label="Previous card"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <div className="count-display">
                                {String(activeIndex + 1).padStart(2, '0')}{' '}
                                <span>/ {String(CARDS.length).padStart(2, '0')}</span>
                            </div>
                            <button
                                className="circle-btn"
                                type="button"
                                onClick={handleNext}
                                aria-label="Next card"
                            >
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
