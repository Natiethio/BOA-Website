'use client'

const partners = [

    {
        name: "MoneyGram",
        logo: "assets/images/remittance/moneygram.png",
        fallback: "MG",
    },
    {
        name: "Western Union",
        logo: "assets/images/remittance/westernunion.png",
        fallback: "WU",
    },
    {
        name: "Ria",
        logo: "assets/images/remittance/riasend.png",
        fallback: "WU",
    },
    {
        name: "Dahabshiil",
        logo: "assets/images/remittance/dahabshiil.png",
        fallback: "DH",
    },
    {
        name: "Ethio Dash",
        logo: "assets/images/remittance/ethiodash.png",
        fallback: "ED",
    },
    {
        name: "Transfast",
        logo: "assets/images/remittance/transfast.png",
        fallback: "ED",
    },
    {
        name: "Fastpay",
        logo: "assets/images/remittance/fastpay.png",
        fallback: "FT",
    },
    {
        name: "Cashgo",
        logo: "assets/images/remittance/cashgo.png",
        fallback: "MP",
    },
    {
        name: "Wegen",
        logo: "assets/images/remittance/wegen.png",
        fallback: "WG",
    },
    {
        name: "Terra Pay",
        logo: "assets/images/remittance/terrapay.png",
        fallback: "TP",
    },

    {
        name: "Taptap Send",
        logo: "assets/images/remittance/taptapsend.png",
        fallback: "TT",
    },
    {
        name: "Teleremit",
        logo: "assets/images/remittance/teleremit.png",
        fallback: "TR",
    },

    {
        name: "Mamapays",
        logo: "assets/images/remittance/mamapays.jpg",
        fallback: "MP",
    },
]

/** Duplicate the list so the CSS infinite scroll looks seamless */
const slidingPartners = [...partners, ...partners]

export default function Remittance() {
    return (
        <>
            <section className="remittance-section centred" id="remittance">
                {/* subtle decorative shape */}
                <div
                    className="shape-layer"
                    style={{ backgroundImage: 'url(assets/images/shape/shape-6.png)' }}
                />

                <div className="auto-container">
                    {/* Section heading */}
                    <div className="sec-title centred mb_50">
                        <h6>Our Partners</h6>
                        <h2>
                            <span>Remittance</span> &amp; Money Transfer
                        </h2>
                    </div>
                </div>
                {/* Auto-sliding cards — no arrows, pure CSS animation */}
                <div className="remittance-slider-outer">
                    <div className="remittance-track">
                        {slidingPartners.map((partner, index) => (
                            <div className="remittance-card" key={index}>
                                <div className="logo-wrap">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        onError={(e) => {
                                            /* If logo not found, show a styled text fallback */
                                            e.currentTarget.style.display = 'none'
                                            const fb = e.currentTarget.nextSibling
                                            if (fb) fb.style.display = 'flex'
                                        }}
                                    />
                                    {/* Fallback badge shown when image fails to load */}
                                    <span
                                        style={{
                                            display: 'none',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 54,
                                            height: 54,
                                            borderRadius: 12,
                                            background: 'var(--theme-color)',
                                            color: '#fff',
                                            fontWeight: 700,
                                            fontSize: 18,
                                            letterSpacing: 1,
                                        }}
                                    >
                                        {partner.fallback}
                                    </span>
                                </div>
                                <span className="partner-name">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
