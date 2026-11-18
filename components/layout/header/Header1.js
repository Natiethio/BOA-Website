'use client'
import { useState } from "react"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    const [currentLang, setCurrentLang] = useState('EN')

    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                {/* ===== Header Top — Utility Bar ===== */}
                <div className="header-top">
                    <div className="large-container">
                        <div className="top-inner">
                            <div className="top-left-content">
                                <div className="top-phone">
                                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f1ab15" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 11.9 19.79 19.79 0 0 1 1.14 3.3 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    <a href="tel:8397" className="phone-num">8397</a>
                                    <span className="phone-label">Toll-free · 24/7</span>
                                </div>

                                {/* Language Switcher Pill (Image 2) */}
                                <div className="lang-switcher-pill" role="group" aria-label="Language Switcher">
                                    <button
                                        type="button"
                                        className={`lang-opt ${currentLang === 'EN' ? 'active' : ''}`}
                                        onClick={() => setCurrentLang('EN')}
                                    >
                                        EN
                                    </button>
                                    <button
                                        type="button"
                                        className={`lang-opt ${currentLang === 'AM' ? 'active' : ''}`}
                                        onClick={() => setCurrentLang('AM')}
                                    >
                                        አማርኛ
                                    </button>
                                </div>
                            </div>

                            <ul className="top-right-links">
                                <li>
                                    <Link href="/exchange" className="top-link">
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                                            <polyline points="17 6 23 6 23 12"/>
                                        </svg>
                                        <span>Exchange Rates</span>
                                    </Link>
                                </li>
                                <li className="top-divider"></li>
                                <li>
                                    <Link href="/contact" className="top-link">
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                        <span>ATM Locator</span>
                                    </Link>
                                </li>
                                <li className="top-divider"></li>
                                <li>
                                    <Link href="/contact" className="top-link">
                                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                        </svg>
                                        <span>Contact Us</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ===== Header Lower — Main Navigation ===== */}
                <div className="header-lower">
                    <div className="large-container">
                        <div className="outer-box">
                            {/* Logo Box on Left */}
                            <div className="logo-box">
                                <div className="shape"></div>
                                <figure className="logo">
                                    <Link href="/">
                                        <img src="assets/images/logo.png" alt="Bank of Abyssinia" className="desktop-logo" />
                                        <img src="assets/images/logomobile.png" alt="Bank of Abyssinia" className="mobile-logo" />
                                    </Link>
                                </figure>
                            </div>

                            {/* Menu Area on Right */}
                            <div className="menu-area">
                                {/* Mobile Header Actions: Call button & Hamburger only */}
                                <div className="mobile-header-actions">
                                    <a href="tel:8397" className="mobile-call-btn" aria-label="Call 8397">
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0A0F20" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </a>
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu} aria-label="Toggle menu">
                                        <i className="icon-bar"></i>
                                        <i className="icon-bar"></i>
                                        <i className="icon-bar"></i>
                                    </div>
                                </div>

                                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                <div className="menu-right-content ml_70">
                                    <Link href="/contact" className="header-open-account-btn">Open Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header lower*/}

                {/* Sticky Header */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="large-container">
                        <div className="outer-box">
                            <div className="logo-box sticky-logo-box">
                                <figure className="logo">
                                    <Link href="/">
                                        <img src="assets/images/logomobile.png" alt="Bank of Abyssinia" className="sticky-logo-img" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="menu-area">
                                <nav className="main-menu clearfix">
                                    <div className="collapse navbar-collapse show clearfix">
                                        <Menu />
                                    </div>
                                </nav>
                                <div className="menu-right-content ml_70">
                                    <Link href="/contact" className="header-open-account-btn">Open Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}

                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
