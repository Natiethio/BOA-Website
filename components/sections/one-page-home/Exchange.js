'use client'
import Link from "next/link"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const BASE = "ETB"
const LABEL_A = "Send"
const LABEL_B = "Receive"

const RATES = [
    {
        code: "USD",
        name: "US Dollar",
        flag: "assets/images/icons/flag-1.png",
        a: 161.1991,
        b: 164.4231,
        trend: "up"
    },
    {
        code: "EUR",
        name: "Euro",
        flag: "assets/images/icons/flag-8.png",
        a: 188.1062,
        b: 191.8683,
        trend: "up"
    },
    {
        code: "GBP",
        name: "British Pound",
        flag: "assets/images/icons/flag-2.png",
        a: 215.0226,
        b: 219.3231,
        trend: "down"
    },
    {
        code: "AED",
        name: "UAE Dirham",
        flag: "assets/images/icons/flag-aed.svg",
        a: 44.7249,
        b: 45.6194,
        trend: "up"
    }
]

export default function Exchange() {
    const formatNumber = (num) =>
        num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })

    return (
        <section className="exchange-section" id="exchange-rates">
            <div className="auto-container">
                {/* Section Header */}
                <div className="exchange-header">
                    <div className="header-left">
                        <div className="sec-title">
                            <h6>Exchange Currency</h6>
                            <h2>Foreign Exchange Rate</h2>
                        </div>
                    </div>
                    {/* Desktop View More Button */}
                    <Link className="theme-btn btn-one fx-view-all-btn fx-desktop-btn" href="/currency">
                        <span>View More</span>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 12h14m-6-6l6 6-6 6" />
                        </svg>
                    </Link>
                </div>

                {/* Rates Slider (Mobile Carousel with Peek / Desktop 4-Col Grid) */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={600}
                    pagination={{
                        el: '.fx-swiper-pagination',
                        clickable: true,
                    }}
                    slidesPerView={1.16}
                    spaceBetween={14}
                    onSwiper={(swiper) => {
                        if (typeof window !== 'undefined' && window.innerWidth >= 992) {
                            swiper.autoplay?.stop()
                        }
                    }}
                    onBreakpoint={(swiper, params) => {
                        if (params.slidesPerView >= 4) {
                            swiper.autoplay?.stop()
                        } else {
                            swiper.autoplay?.start()
                        }
                    }}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.25,
                            spaceBetween: 16,
                        },
                        651: {
                            slidesPerView: 2,
                            spaceBetween: 18,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                            allowTouchMove: false,
                        },
                    }}
                    className="fx-cards-swiper"
                >
                    {RATES.map((rate, index) => (
                        <SwiperSlide key={rate.code}>
                            <article
                                className="fx-card in"
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
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Mobile Pagination Dots (matching wireframe) */}
                <div className="fx-swiper-pagination"></div>

                {/* Mobile View More Button (matching wireframe) */}
                <div className="fx-mobile-view-more">
                    <Link className="theme-btn btn-one" href="/currency">
                        <span>View More</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
