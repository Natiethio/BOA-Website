'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Clean SVG Info Icon Component (replaces dollar sign icon)
const InfoIcon = ({ size = 15, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
)

// Simple No-Handle Chevron Arrow (replaces stars or handled arrows)
const ChevronArrow = ({ direction = "down", size = 14 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            transition: 'transform 0.3s ease'
        }}
    >
        {direction === "down" ? (
            <polyline points="6 9 12 15 18 9" />
        ) : (
            <polyline points="18 15 12 9 6 15" />
        )}
    </svg>
)

// Board of Directors Data
const boardDirectors = [
    {
        id: 'bd-1',
        name: 'Mr. Mekonnen Manyazewal',
        role: 'Board Chairman',
        isApex: true,
        image: '/assets/images/boardofdirectors/chairman.jpg',
        qualification: 'BA degree with distinction in Business Administration',
        primaryOccupation: 'Freelance Advisory Service',
        subcommittees: ['Risk, Compensation, Management & Credit Review Committee'],
        bio: 'Distinguished economic strategist and public servant with decades of leadership guiding national economic development policy and corporate governance.'
    },
    {
        id: 'bd-2',
        name: 'Mr. Aemero Belete',
        role: 'Deputy Board Chairman',
        isApex: true,
        image: '/assets/images/boardofdirectors/dboardchairman.jpg',
        qualification: 'MBA in Financial Strategy, BA in Accounting & Authorized Accountant',
        primaryOccupation: 'Self Employed',
        subcommittees: ['Audit Committee , Nomination and Remuneration Committee'],
        bio: 'Accomplished financial strategist and authorized accountant with extensive expertise in corporate audit, financial governance, and capital allocation.'
    },
    {
        id: 'bd-3',
        name: 'Mr. Kassahun Zewudie',
        role: 'Board Director',
        image: '/assets/images/boardofdirectors/boaddirector1.jpg',
        qualification: 'BA in Managementt',
        primaryOccupation: 'General Manager, New Sun Trading Plc.',
        subcommittees: ['Audit Committee'],
        bio: 'Experienced corporate consultant with an in-depth track record in enterprise risk management, strategic operations, and business transformation.'
    },
    {
        id: 'bd-4',
        name: 'Mrs. Emebet Woldeher',
        role: 'Board Director',
        image: '/assets/images/boardofdirectors/boaddirector2.jpg',
        qualification: 'Bachelor of Arts in Foreign Languages & Literature (English), and Diploma in Commerce (In Accounting)',
        primaryOccupation: 'General Manager at Ghion Industrial Chemical Sector PLCr',
        subcommittees: ['Nomination and Remuneration Committee'],
        bio: 'Dynamic leader in enterprise management, organizational strategy, and workforce development across major commercial sectors.'
    },
    {
        id: 'bd-5',
        name: 'Mr. Yerom Gessesse',
        role: 'Board Director',
        image: '/assets/images/boardofdirectors/boaddirector3.jpg',
        qualification: 'Masters in Marketing Management',
        primaryOccupation: 'General Manager, Real Way Trading PLC',
        subcommittees: ['Risk , Compensation, Management & Credit Review Committee , Credit Committee'],
        bio: 'Technology visionary spearheading digital modernization, IT infrastructure governance, and cybersecurity frameworks.'
    },
    {
        id: 'bd-6',
        name: 'Mr. Molalign Melese',
        role: 'Board Director',
        image: '/assets/images/boardofdirectors/boaddirector4.jpg',
        qualification: 'LL.B Degree in Law, and BA Degree in Management & Public Administration (Management)',
        primaryOccupation: 'Advocate and Legal Consultant',
        subcommittees: ['Risk, Compensation, Management & Credit Review Committee, Credit Committee'],
        bio: 'Seasoned economist and advisor with deep specialization in credit portfolio assessment, micro-macro financial analysis, and governance.'
    },
    {
        id: 'bd-7',
        name: 'Mr. Meseret Melese',
        role: 'Board Director',
        image: '/assets/images/boardofdirectors/boaddirector5.jpg',
        qualification: 'Master of Business Administration (MBA), BA Degree in Management (with distinction), and Certificate in Commodity Marketing',
        primaryOccupation: 'Deputy Director at University of South Africa, Ethiopia Center for Graduate Studies, Addis Ababa',
        subcommittees: ['Nomination and Remuneration Committee , Credit Committee'],
        bio: 'Expert in international commercial finance, statutory auditing, capital management, and institutional compliance.'
    },
    {
        id: 'bd-8',
        name: 'Mr. Solomon Alula',
        role: 'Board Director',
        image: '/assets/images/boardofdirectors/boaddirector6.jpg',
        qualification: 'MA in National Economy Planning',
        primaryOccupation: 'Pensioner',
        subcommittees: ['Audit Committee'],
        bio: 'Renowned legal practitioner advising on complex corporate transactions, regulatory compliance, and contractual frameworks.'
    },
    {
        id: 'bd-9',
        name: 'Dr. Yihenew Zewdie',
        role: 'Board Director',
        image: '/assets/images/boardofdirectors/boaddirector7.jpg',
        qualification: 'PhD (Development Studies - Natural Resource Management)',
        primaryOccupation: 'Country Director, Alliance for a Green Revolution for Africa (AGRA)',
        subcommittees: ['Nomination and Remuneration Committee , Credit Committee'],
        bio: 'Prominent researcher and socio-economic analyst contributing forward-looking insights on sustainable banking and emerging markets.'
    },
    {
        id: 'bd-10',
        name: 'Mr. Tewodros Tesfaye',
        role: 'Company Secretary & Board Director',
        image: '/assets/images/boardofdirectors/boaddirector8.jpg',
        qualification: '',
        primaryOccupation: 'Company Secretary',
        subcommittees: '',
        bio: 'Experienced corporate secretary steering statutory board governance, regulatory liaison, and legal integrity.'
    }
]

// Board Sub-Committees Data
const boardSubCommittees = [
    {
        id: 'sc-1',
        name: 'Audit Committee',
        memberIds: ['bd-8', 'bd-2', 'bd-3']
    },
    {
        id: 'sc-2',
        name: 'Risk, Comp, Mgt & Credit Review Committee',
        memberIds: ['bd-6', 'bd-1', 'bd-5']
    },
    {
        id: 'sc-3',
        name: 'Nomination and Remuneration Committee',
        memberIds: ['bd-7', 'bd-2', 'bd-4', 'bd-9']
    },
    {
        id: 'sc-4',
        name: 'Credit Committee',
        memberIds: ['bd-9', 'bd-7', 'bd-6', 'bd-5']
    }
]

// CEO Data
const ceoData = {
    id: 'mgt-ceo',
    name: 'Mr. Bekalu Zeleke',
    role: 'Chief Executive Officer',
    badge: 'CEO',
    image: '/assets/images/mangement/ceo.jpg',
    description: 'Responsible for overall strategic direction and leadership of the bank.',
    qualification: 'Master of Business Administration (MBA), BA in Accounting',
    primaryOccupation: 'Chief Executive Officer, Bank of Abyssinia',
    keyFocus: ['Strategic Vision & Growth', 'Digital Transformation', 'Operational Excellence', 'Shareholder Value'],
    bio: 'Visionary banking executive with over two decades of transformative leadership in Ethiopia’s financial industry, driving pioneering digital banking adoption and nationwide financial inclusion.'
}

// Management Team Data
const managementTeam = [
    {
        id: 'mgt-1',
        name: 'Mrs. Sakina Mengesha',
        role: 'Chief Digital Banking Officer',
        image: '/assets/images/mangement/digtalbank.jpg',
        description: 'Leads digital transformation and innovative banking solutions.',
        qualification: 'M.Sc. in Information Systems, B.Sc. in Computer Science',
        primaryOccupation: 'Chief Digital Banking Officer',
        keyFocus: ['Mobile & Internet Banking', 'Fintech Partnerships', 'Payment Gateways', 'Digital UX']
    },
    {
        id: 'mgt-2',
        name: 'Mrs. Messeret Asfaw',
        role: 'Chief Enterprise Service Officer',
        image: '/assets/images/mangement/Enterprise.jpg',
        description: 'Oversees enterprise-level service delivery and operations.',
        qualification: 'MBA in Management, BA in Economics',
        primaryOccupation: 'Chief Enterprise Service Officer',
        keyFocus: ['Corporate Banking Solutions', 'Operational Infrastructure', 'Service Excellence']
    },
    {
        id: 'mgt-3',
        name: 'Mr. Mohammed Nuredin',
        role: 'Chief International Banking Officer',
        image: '/assets/images/mangement/International.jpg',
        description: 'Manages international banking operations and foreign relations.',
        qualification: 'MA in International Trade & Finance, BA in Accounting',
        primaryOccupation: 'Chief International Banking Officer',
        keyFocus: ['Forex Operations', 'Trade Finance & LC', 'Correspondent Banking', 'Diaspora Remittance']
    },
    {
        id: 'mgt-4',
        name: 'Mr. Seifu Bogale',
        role: 'Chief Corporate Human Resource Officer',
        image: '/assets/images/mangement/HR.jpg',
        description: 'Leads HR strategy, talent management, and organizational development.',
        qualification: 'MA in Human Resource Management, BA in Public Administration',
        primaryOccupation: 'Chief Corporate HR Officer',
        keyFocus: ['Talent Acquisition', 'Leadership Academy', 'Employee Welfare', 'Corporate Culture']
    },
    {
        id: 'mgt-5',
        name: 'Mr. Daniel Hailu',
        role: 'Chief Information Officer',
        image: '/assets/images/mangement/CIO.jpg',
        description: 'Oversees IT infrastructure, systems, and digital innovation.',
        qualification: 'M.Sc. in Computer Engineering, B.Sc. in Electrical Engineering',
        primaryOccupation: 'Chief Information Officer',
        keyFocus: ['Core Banking Architecture', 'Cybersecurity & DR', 'Cloud Infrastructure', 'Data Analytics']
    },
    {
        id: 'mgt-6',
        name: 'Mr. Asaminew Deribew',
        role: 'Chief Credit Business Officer',
        image: '/assets/images/mangement/credit.jpg',
        description: 'Manages credit portfolio, risk assessment, and lending operations.',
        qualification: 'M.Sc. in Finance & Investment, BA in Banking & Finance',
        primaryOccupation: 'Chief Credit Business Officer',
        keyFocus: ['Commercial Lending', 'SME Financing', 'Credit Risk Underwriting', 'Portfolio Quality']
    },
    {
        id: 'mgt-7',
        name: 'Mr. Berhanu Mengistu',
        role: 'Chief Financial Officer',
        image: '/assets/images/mangement/CFO.jpg',
        description: 'Directs financial planning, budgeting, reporting, and treasury management.',
        qualification: 'ACCA, MBA in Finance, BA in Accounting',
        primaryOccupation: 'Chief Financial Officer',
        keyFocus: ['Financial Strategy & Reporting', 'Treasury & Liquidity', 'IFRS Compliance', 'Capital Planning']
    },
    {
        id: 'mgt-8',
        name: 'Mrs. Tigist Abera',
        role: 'Chief Customer Experience Officer',
        image: '/assets/images/mangement/customer.jpg',
        description: 'Drives customer-centric service excellence across all branches and channels.',
        qualification: 'MA in Marketing & Communications, BA in Management',
        primaryOccupation: 'Chief Customer Experience Officer',
        keyFocus: ['Customer Journey Mapping', 'Service Standards', 'Contact Center 24/7', 'Feedback Analytics']
    },
    {
        id: 'mgt-9',
        name: 'Mr. Getachew Tadesse',
        role: 'Chief Risk & Compliance Officer',
        image: '/assets/images/mangement/riskandcompliance.jpg',
        description: 'Ensures robust institutional risk governance and regulatory adherence.',
        qualification: 'M.Sc. in Risk Management, BA in Accounting & Finance',
        primaryOccupation: 'Chief Risk & Compliance Officer',
        keyFocus: ['Enterprise Risk Governance', 'AML/CFT Compliance', 'Regulatory Audits', 'Operational Risk']
    },
    {
        id: 'mgt-10',
        name: 'Mr. Abdurahman Kemal',
        role: 'Chief Interest-Free Banking Officer',
        image: '/assets/images/mangement/IFB officer.jpg',
        description: 'Guides Sharia-compliant banking services, Ameen products, and outreach.',
        qualification: 'M.Sc. in Islamic Banking & Finance, BA in Economics',
        primaryOccupation: 'Chief Interest-Free Banking (Ameen) Officer',
        keyFocus: ['Sharia Advisory Compliance', 'Ameen Deposit & Financing', 'Halal Investment Products']
    },
    {
        id: 'mgt-11',
        name: 'Mr. Worku Alemayehu',
        role: 'Chief Internal Audit Officer',
        image: '/assets/images/mangement/audit.png',
        description: 'Manages independent internal controls, assurance, and risk audits.',
        qualification: 'CIA, MSc in Accounting and Auditing, BA in Accounting',
        primaryOccupation: 'Chief Internal Audit Officer',
        keyFocus: ['Internal Assurance', 'Fraud Prevention', 'Process Audit', 'Board Audit Liaison']
    },
    {
        id: 'mgt-12',
        name: 'Mr. Tilahun Girma',
        role: 'Senior Strategic Advisor to the CEO',
        image: '/assets/images/mangement/CEOadviser.jpg',
        description: 'Provides strategic counsel on growth, transformation, and bank expansion.',
        qualification: 'PhD in Economics, MA in International Economics',
        primaryOccupation: 'Senior Strategic Advisor',
        keyFocus: ['Corporate Strategy', 'Macro-Economic Forecasting', 'Strategic Partnerships']
    },
    {
        id: 'mgt-13',
        name: 'Mrs. Rahel Hailu',
        role: 'Deputy Chief Customer Relations Officer',
        image: '/assets/images/mangement/deputycusrel.jpg',
        description: 'Enhances institutional partnerships, relationship management, and service delivery.',
        qualification: 'MA in Business Administration, BA in Marketing',
        primaryOccupation: 'Deputy Chief Customer Relations Officer',
        keyFocus: ['High Net Worth Clients', 'Corporate Relationship Management', 'Service Delivery']
    },
    {
        id: 'mgt-14',
        name: 'Mr. Dawit Tesfaye',
        role: 'Deputy Chief Customer Support Officer',
        image: '/assets/images/mangement/deputycustomersupport.png',
        description: 'Oversees multichannel 24/7 client support and issue resolution.',
        qualification: 'B.Sc. in Computer Science & Information Management',
        primaryOccupation: 'Deputy Chief Customer Support Officer',
        keyFocus: ['24/7 Call Center (8397)', 'Digital Omnichannel Support', 'Ticket Resolution SLA']
    },
    {
        id: 'mgt-15',
        name: 'Mrs. Helen Worku',
        role: 'Executive Assistant to the CEO',
        image: '/assets/images/mangement/executiveasstceo.png',
        description: 'Coordinates executive administration, board liaison, and strategic communications.',
        qualification: 'MA in Corporate Communications, BA in Management',
        primaryOccupation: 'Executive Assistant to the CEO',
        keyFocus: ['Executive Secretariat', 'Stakeholder Protocol', 'Board Interface']
    }
]

export default function Leadership() {
    const [activeTab, setActiveTab] = useState('directors') // 'directors' | 'management'
    const [isExpanded, setIsExpanded] = useState(false)
    const [selectedLeader, setSelectedLeader] = useState(null)

    // Reset expansion state when toggling tabs
    const handleTabChange = (tab) => {
        setActiveTab(tab)
        setIsExpanded(false)
    }

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedLeader(null)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedLeader) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedLeader])

    // Directors slicing:
    // First 2 are apex (Chairman & Deputy Chairman)
    const apexDirectors = boardDirectors.slice(0, 2)
    // Other directors
    const otherDirectors = boardDirectors.slice(2)
    // If not expanded, show only first 4 of other directors (total 6 cards: 2 apex + 4 other)
    const visibleOtherDirectors = isExpanded ? otherDirectors : otherDirectors.slice(0, 4)

    // Management slicing:
    // If not expanded, show first 6 members (plus CEO hero is always visible)
    const visibleManagement = isExpanded ? managementTeam : managementTeam.slice(0, 6)

    return (
        <section className="leadership-section" id="leadership">
            <div className="auto-container">
                {/* Section Header */}
                <div className="leadership-header text-center mb_40">
                    <div className="sec-title centred mb_15">
                        <h6>MEET OUR LEADERS</h6>
                        <h2>Our Leadership</h2>
                    </div>
                </div>

                {/* Modern Pill Tab Switcher */}
                <div className="leadership-tabs-wrapper mb_50">
                    <div className="leadership-tabs-pill">
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'directors' ? 'active' : ''}`}
                            onClick={() => handleTabChange('directors')}
                            aria-selected={activeTab === 'directors'}
                        >
                            <span className="tab-text">Board of Directors</span>
                            <span className="tab-count">{boardDirectors.length}</span>
                        </button>
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'management' ? 'active' : ''}`}
                            onClick={() => handleTabChange('management')}
                            aria-selected={activeTab === 'management'}
                        >
                            <span className="tab-text">Management Team</span>
                            <span className="tab-count">{managementTeam.length + 1}</span>
                        </button>
                    </div>
                </div>

                {/* ==================== TAB 1: BOARD OF DIRECTORS ==================== */}
                {activeTab === 'directors' && (
                    <div className="leadership-tab-content">
                        {/* Apex Executive Leadership Tier (Chairman & Deputy Chairman) */}
                        <div className="directors-apex-tier mb_40">
                            <div className="apex-tier-label">
                                {/* <span className="apex-pill">
                                    Board Apex Leadership
                                </span> */}
                            </div>
                            <div className="directors-apex-grid">
                                {apexDirectors.map((director) => (
                                    <div
                                        key={director.id}
                                        className="director-card apex-card"
                                        onClick={() => setSelectedLeader(director)}
                                    >
                                        <div className="card-image-box">
                                            <div className="image-wrap">
                                                <Image
                                                    src={director.image}
                                                    alt={director.name}
                                                    width={500}
                                                    height={560}
                                                    className="leader-img"
                                                    priority
                                                />
                                            </div>
                                            <span className="apex-crown-badge">
                                                {director.role === 'Board Chairman' ? 'Board Chairman' : 'Deputy Chairman'}
                                            </span>

                                            {/* Floating Info Icon Badge */}
                                            {/* <div className="card-info-badge" title="View Details">
                                                <InfoIcon size={14} />
                                            </div> */}

                                            {/* Modern Ease-Out Preview Glassmorphism Overlay */}
                                            <div className="card-hover-preview">
                                                <div className="preview-glass">
                                                    <span className="preview-tag">
                                                        <InfoIcon size={12} /> Profile Overview
                                                    </span>
                                                    <p className="preview-qual">
                                                        {director.qualification}
                                                    </p>
                                                    <div className="preview-cta">
                                                        <span>Full Details</span>
                                                        <InfoIcon size={13} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-info text-center">
                                            <h4 className="leader-name">{director.name}</h4>
                                            <p className="leader-role apex-role">{director.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Grid for Other Board Directors */}
                        <div className="directors-standard-grid">
                            {visibleOtherDirectors.map((director) => (
                                <div
                                    key={director.id}
                                    className="director-card standard-card"
                                    onClick={() => setSelectedLeader(director)}
                                >
                                    <div className="card-image-box">
                                        <div className="image-wrap">
                                            <Image
                                                src={director.image}
                                                alt={director.name}
                                                width={400}
                                                height={460}
                                                className="leader-img"
                                            />
                                        </div>

                                        {/* Floating Info Icon Badge */}
                                        {/* <div className="card-info-badge" title="View Details">
                                            <InfoIcon size={14} />
                                        </div> */}

                                        {/* Modern Ease-Out Preview Glassmorphism Overlay */}
                                        <div className="card-hover-preview">
                                            <div className="preview-glass">
                                                <span className="preview-tag">
                                                    <InfoIcon size={12} /> Profile Overview
                                                </span>
                                                <p className="preview-qual">
                                                    {director.qualification}
                                                </p>
                                                <div className="preview-cta">
                                                    <span>Full Details</span>
                                                    <InfoIcon size={13} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-info text-center">
                                        <h4 className="leader-name">{director.name}</h4>
                                        <p className="leader-role">{director.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Expand / Collapse Button */}
                        <div className="leadership-toggle-action text-center mt_45">
                            <button
                                type="button"
                                className="theme-btn btn-one expand-btn"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                <span>{isExpanded ? 'Show Less' : `View All ${boardDirectors.length} Members`}</span>
                                <span className="btn-chevron-wrap">
                                    <ChevronArrow direction={isExpanded ? "up" : "down"} size={14} />
                                </span>
                            </button>
                        </div>

                        {/* Board Sub-Committee Members Section */}
                        <div className="board-subcommittees-wrapper mt_60">
                            <div className="subcommittees-header text-center mb_35">
                                <div className="sec-title centred mb_10">
                                    <h6>Board SUB Committee</h6>
                                    <h3>Board Sub-Committee <span>Members</span></h3>
                                </div>
                                {/* <div className="subcommittee-accent-line"></div> */}
                            </div>

                            <div className="subcommittees-grid">
                                {boardSubCommittees.map((committee) => (
                                    <div key={committee.id} className="committee-card">
                                        <div className="committee-card-header">
                                            <h4 className="committee-title">{committee.name}</h4>
                                            <span className="committee-count-badge">
                                                {committee.memberIds.length} Members
                                            </span>
                                        </div>
                                        <div className="committee-members-list">
                                            {committee.memberIds.map((memberId) => {
                                                const member = boardDirectors.find((d) => d.id === memberId)
                                                if (!member) return null
                                                return (
                                                    <div
                                                        key={`${committee.id}-${member.id}`}
                                                        className="committee-member-row"
                                                        onClick={() => setSelectedLeader(member)}
                                                        title={`Click to view ${member.name}'s profile`}
                                                    >
                                                        <div className="member-avatar-wrap">
                                                            <Image
                                                                src={member.image}
                                                                alt={member.name}
                                                                width={90}
                                                                height={90}
                                                                className="member-avatar"
                                                            />
                                                        </div>
                                                        <div className="member-meta">
                                                            <h5 className="member-name">{member.name}</h5>
                                                            <span className="member-role-tag">{member.role}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ==================== TAB 2: MANAGEMENT TEAM ==================== */}
                {activeTab === 'management' && (
                    <div className="leadership-tab-content">
                        {/* Featured CEO Card with generous bottom margin */}
                        <div className="ceo-hero-card" onClick={() => setSelectedLeader(ceoData)}>
                            <div className="ceo-hero-inner">
                                <div className="ceo-image-container">
                                    <div className="ceo-image-frame">
                                        <Image
                                            src={ceoData.image}
                                            alt={ceoData.name}
                                            width={420}
                                            height={480}
                                            className="ceo-photo"
                                            priority
                                        />
                                        <span className="ceo-badge">CEO</span>
                                    </div>
                                </div>
                                <div className="ceo-details-content">
                                    <span className="ceo-eyebrow">CHIEF EXECUTIVE OFFICER</span>
                                    <h3 className="ceo-name">{ceoData.name}</h3>
                                    <p className="ceo-title-label">{ceoData.role}</p>
                                    <p className="ceo-description">{ceoData.description}</p>
                                    <div className="ceo-view-profile-btn">
                                        <span>View Full Profile</span>
                                        <InfoIcon size={15} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Executive Committee Grid */}
                        <div className="management-grid">
                            {visibleManagement.map((officer) => (
                                <div
                                    key={officer.id}
                                    className="management-card"
                                    onClick={() => setSelectedLeader(officer)}
                                >
                                    <div className="card-image-box">
                                        <div className="image-wrap">
                                            <Image
                                                src={officer.image}
                                                alt={officer.name}
                                                width={400}
                                                height={460}
                                                className="leader-img"
                                            />
                                        </div>

                                        {/* Floating Info Icon Badge */}
                                        {/* <div className="card-info-badge" title="View Details">
                                            <InfoIcon size={14} />
                                        </div> */}

                                        {/* Modern Ease-Out Preview Glassmorphism Overlay */}
                                        <div className="card-hover-preview">
                                            <div className="preview-glass">
                                                <span className="preview-tag">
                                                    <InfoIcon size={12} /> Profile Overview
                                                </span>
                                                <p className="preview-qual">
                                                    {officer.description}
                                                </p>
                                                <div className="preview-cta">
                                                    <span>Full Details</span>
                                                    <InfoIcon size={13} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-info text-center">
                                        <h4 className="leader-name">{officer.name}</h4>
                                        <p className="leader-role mgt-role">{officer.role}</p>
                                        <p className="leader-desc-preview">{officer.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Expand / Collapse Button for Management */}
                        <div className="leadership-toggle-action text-center mt_45">
                            <button
                                type="button"
                                className="theme-btn btn-one expand-btn"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                <span>{isExpanded ? 'Show Less' : `View All ${managementTeam.length + 1} Members`}</span>
                                <span className="btn-chevron-wrap">
                                    <ChevronArrow direction={isExpanded ? "up" : "down"} size={14} />
                                </span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* ==================== SMOOTH EASE-OUT PROFILE MODAL ==================== */}
            {selectedLeader && (
                <div
                    className="leader-modal-overlay"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setSelectedLeader(null)
                    }}
                >
                    <div className="leader-modal-card">
                        <button
                            type="button"
                            className="modal-close-btn"
                            onClick={() => setSelectedLeader(null)}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>

                        <div className="modal-body-layout">
                            {/* Left: Leader Portrait Frame */}
                            <div className="modal-image-col">
                                <div className="modal-photo-frame">
                                    <Image
                                        src={selectedLeader.image}
                                        alt={selectedLeader.name}
                                        width={420}
                                        height={480}
                                        className="modal-photo"
                                    />
                                    {selectedLeader.badge && (
                                        <span className="modal-badge-tag">{selectedLeader.badge}</span>
                                    )}
                                </div>
                            </div>

                            {/* Right: Detailed Bio & Qualifications */}
                            <div className="modal-info-col">
                                <div className="modal-header-meta">
                                    <span className="modal-role-pill">{selectedLeader.role}</span>
                                    <h3 className="modal-leader-name">{selectedLeader.name}</h3>
                                </div>

                                {selectedLeader.bio && (
                                    <p className="modal-bio-text">{selectedLeader.bio}</p>
                                )}

                                <div className="modal-details-grid">
                                    {selectedLeader.qualification && (
                                        <div className="detail-item">
                                            <div className="detail-icon">
                                                <InfoIcon size={16} />
                                            </div>
                                            <div className="detail-content">
                                                <span className="detail-label">QUALIFICATION</span>
                                                <p className="detail-value">{selectedLeader.qualification}</p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedLeader.primaryOccupation && (
                                        <div className="detail-item">
                                            <div className="detail-icon">
                                                <InfoIcon size={16} />
                                            </div>
                                            <div className="detail-content">
                                                <span className="detail-label">PRIMARY OCCUPATION</span>
                                                <p className="detail-value">{selectedLeader.primaryOccupation}</p>
                                            </div>
                                        </div>
                                    )}

                                    {selectedLeader.subcommittees && selectedLeader.subcommittees.length > 0 && (
                                        <div className="detail-item">
                                            <div className="detail-icon">
                                                <InfoIcon size={16} />
                                            </div>
                                            <div className="detail-content">
                                                <span className="detail-label">BOARD SUBCOMMITTEES</span>
                                                <div className="subcommittees-pills">
                                                    {selectedLeader.subcommittees.map((sc, idx) => (
                                                        <span key={idx} className="subcommittee-tag">
                                                            {sc}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {selectedLeader.keyFocus && selectedLeader.keyFocus.length > 0 && (
                                        <div className="detail-item">
                                            <div className="detail-icon">
                                                <InfoIcon size={16} />
                                            </div>
                                            <div className="detail-content">
                                                <span className="detail-label">KEY FOCUS AREAS</span>
                                                <div className="subcommittees-pills">
                                                    {selectedLeader.keyFocus.map((kf, idx) => (
                                                        <span key={idx} className="subcommittee-tag">
                                                            {kf}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="modal-footer-brand">
                                    <span className="modal-brand-label">
                                        Bank of Abyssinia Choice For All
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
