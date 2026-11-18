'use client'

/**
 * =========================================================================
 * ICONS LOCATION & CONFIGURATION:
 * 
 * Each card's icon is defined in the `icon` field below:
 * - Flaticon classes from template: 'icon-5', 'icon-6', 'icon-7', 'icon-8', 'icon-10', 'icon-11', etc.
 * - If you have your own image or SVG file, put it in public/assets/images/icons/
 *   and set: icon: 'assets/images/icons/your-icon.png'
 * =========================================================================
 */
const values = [
    {
        icon: 'assets/images/icons/excellence.png',
        title: 'Excellence',
        desc: 'We hold high standards in everything we do and keep improving our service.',
    },
    {
        icon: 'icon-5',
        title: 'Integrity and trust',
        desc: 'We act ethically, honestly, openly and fairly with all our stakeholders.',
    },
    {
        icon: 'assets/images/icons/support.png',
        title: 'Teamwork',
        desc: 'We work together in a collaborative environment.',
    },
    {
        icon: 'icon-6',
        title: 'Caring',
        desc: 'We care for our communities, customers, employees and the environment.',
    },
    {
        icon: 'icon-8',
        title: 'Innovation',
        desc: 'We encourage creativity and new solutions.',
    },
]

export default function CoreValues() {
    return (
        <>
            <section className="cv-section pt_100 pb_90">
                <div className="auto-container">
                    {/* Section Header */}
                    <div className="sec-title centred mb_60">
                        <h6>Our Values</h6>
                        <h2>Our Core Values</h2>
                    </div>

                    {/* 5 Cards Grid */}
                    <div className="cv-grid">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="cv-card wow fadeInUp animated"
                                data-wow-delay={`${i * 100}ms`}
                                data-wow-duration="1000ms"
                            >
                                <div className="cv-card__inner">
                                    <div className="icon-box">
                                        {typeof v.icon === 'string' && (v.icon.includes('/') || v.icon.includes('.')) ? (
                                            <img src={v.icon} alt={v.title} width={32} height={32} style={{ objectFit: 'contain' }} />
                                        ) : typeof v.icon === 'string' ? (
                                            <i className={v.icon}></i>
                                        ) : (
                                            v.icon
                                        )}
                                    </div>
                                    <h4>{v.title}</h4>
                                    <p>{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
