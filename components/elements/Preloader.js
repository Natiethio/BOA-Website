export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">close</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <img
                                src="assets/images/logo2loading.png"
                                alt="Bank of Abyssinia"
                                style={{ maxWidth: '220px', width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                            />
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
