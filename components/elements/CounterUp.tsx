'use client'
import { useEffect, useRef, useState } from 'react'
import Counter from './Counter'

export default function CounterUp({ end }) {
    const [inViewport, setInViewport] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInViewport(true)
                    observer.disconnect() // Only trigger once
                }
            },
            { threshold: 0.2 } // Trigger when 20% is visible
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <span ref={elementRef} className="count-text">
            {inViewport && <Counter end={end} duration={50} />}
        </span>
    )
}
