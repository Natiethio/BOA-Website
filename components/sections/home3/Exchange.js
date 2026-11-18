'use client'
import Link from "next/link"
import { useEffect, useRef } from "react"

const BASE = "ETB"
const LABEL_A = "Send"
const LABEL_B = "Receive"

const RATES = [
    {
        code: "USD",
        name: "US Dollar",
        flag: "assets/images/icons/flag-1.png",
        a: 50.30,
        b: 45.30,
        trend: "up"
    },
    {
        code: "GBP",
        name: "British Pound",
        flag: "assets/images/icons/flag-2.png",
        a: 60.30,
        b: 55.30,
        trend: "down"
    },
    {
        code: "INR",
        name: "Indian Rupee",
        flag: "assets/images/icons/flag-3.png",
        a: 20.30,
        b: 40.30,
        trend: "down"
    },
    {
        code: "CAD",
        name: "Canadian Dollar",
        flag: "assets/images/icons/flag-4.png",
        a: 30.30,
        b: 32.30,
        trend: "up"
    },
    {
        code: "CNY",
        name: "Chinese Yuan",
        flag: "assets/images/icons/flag-5.png",
        a: 90.30,
        b: 95.30,
        trend: "up"
    },
    {
        code: "AUD",
        name: "Australian Dollar",
        flag: "assets/images/icons/flag-6.png",
        a: 50.30,
        b: 45.30,
        trend: "down"
    }
]

export default function Exchange() {
    const gridRef = useRef(null)

    useEffect(() => {
        if (!gridRef.current) return
        const cards = gridRef.current.querySelectorAll('.fx-card')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.15 }
        )

        cards.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    const formatNumber = (num) =>
        num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    return (
        <section className="exchange-section" id="exchange-rates">
            <div className="auto-container">
                {/* Section Header */}
                <div className="exchange-header">
                    <div className="header-left">
                        <div className="sec-title">
                            <h6>Exchange Currency</h6>
                            <h2>Foreign Exchange Rate</h2>
                            {/* <p className="exchange-sub">Indicative rates in {BASE}</p> */}
                        </div>
                    </div>
                    <Link className="fx-view-all-btn" href="/currency">
                        <span>View All Rates</span>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 12h14m-6-6l6 6-6 6" />
                        </svg>
                    </Link>
                </div>

                {/* 3-Column Rates Grid */}
                <div className="fx-cards-grid" ref={gridRef}>
                    {RATES.map((rate, index) => (
                        <article
                            key={rate.code}
                            className="fx-card"
                            style={{ '--i': index }}
                        >
                            <div className="fx-top">
                                <div className="fx-currency-info">
                                    <img
                                        src={rate.flag}
                                        alt={`${rate.name} flag`}
                                        className="fx-flag-img"
                                    />
                                    <div className="fx-currency-meta">
                                        <b>{rate.code}</b>
                                        <small>{rate.name}</small>
                                    </div>
                                </div>
                                <span className={`fx-trend-pill ${rate.trend}`}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                        {rate.trend === 'up' ? (
                                            <path d="M12 19V5m-6 6l6-6 6 6" />
                                        ) : (
                                            <path d="M12 5v14m6-6l-6 6-6-6" />
                                        )}
                                    </svg>
                                    <span>{rate.trend === 'up' ? 'Up' : 'Down'}</span>
                                </span>
                            </div>

                            <div className="fx-vals">
                                <div className="val-col">
                                    <span>{LABEL_A}</span>
                                    <b>{formatNumber(rate.a)}</b>
                                </div>
                                <div className="val-col">
                                    <span>{LABEL_B}</span>
                                    <b>{formatNumber(rate.b)}</b>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footnote */}
                {/* <p className="fx-footer-note">
                    Rates are indicative and may change. Visit your nearest branch for the latest rates.
                </p> */}
            </div>
        </section>
    )
}
