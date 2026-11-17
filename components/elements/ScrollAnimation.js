'use client'
import { useEffect } from 'react'

export default function ScrollAnimation() {
    useEffect(() => {
        if (typeof window === 'undefined') return

        const initAnimation = () => {
            const elements = document.querySelectorAll(
                '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-zoom, [data-reveal]'
            )

            if (elements.length === 0) return

            // If IntersectionObserver is not available, make everything visible immediately
            if (!('IntersectionObserver' in window)) {
                elements.forEach((el) => el.classList.add('is-visible'))
                return
            }

            // Mark body as ready for animation
            document.body.classList.add('anim-ready')

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const target = entry.target

                            const delay = target.getAttribute('data-wow-delay') || target.getAttribute('data-delay')
                            if (delay) {
                                const delayMs = parseInt(delay, 10)
                                if (!isNaN(delayMs) && delayMs > 0) {
                                    target.style.transitionDelay = `${delayMs}ms`
                                    target.style.animationDelay = `${delayMs}ms`
                                }
                            }

                            target.classList.add('is-visible')
                            target.classList.add('animated')
                            observer.unobserve(target)
                        }
                    })
                },
                {
                    threshold: 0.05,
                    rootMargin: '0px 0px 50px 0px',
                }
            )

            elements.forEach((el) => {
                // If element is already in viewport, show it right away
                const rect = el.getBoundingClientRect()
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('is-visible')
                } else {
                    observer.observe(el)
                }
            })
        }

        // Run on mount and with a small delay for Next.js page hydration
        initAnimation()
        const timer = setTimeout(initAnimation, 200)

        // Also watch for DOM changes (route transitions)
        const mutationObserver = new MutationObserver(() => {
            initAnimation()
        })
        mutationObserver.observe(document.body, { childList: true, subtree: true })

        return () => {
            clearTimeout(timer)
            mutationObserver.disconnect()
        }
    }, [])

    return null
}
