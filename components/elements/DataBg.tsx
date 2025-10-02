import { useEffect } from 'react'

export default function DataBg() {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-bg]')

        elements.forEach((element) => {
            (element as HTMLElement).style.backgroundImage = `url(${element.getAttribute('data-bg')})`
        })
    }, [])
    return (
        <>

        </>
    )
}