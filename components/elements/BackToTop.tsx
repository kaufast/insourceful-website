
export default function BackToTop({ scroll }: { scroll: boolean }) {

    return (
        <>
            {scroll && (  
                <a href="#top" data-target="html" className="scroll-to-target scroll-to-top">
                <i className="icon-right-arrow"></i>
                </a>
            )}
        </>
    )
}