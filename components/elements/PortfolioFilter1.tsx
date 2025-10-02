'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

// Dynamically import Isotope with SSR disabled
const Isotope = dynamic(() => import('isotope-layout'), { ssr: false });

export default function PortfolioFilter1() {
    const isotope = useRef(null);
    const [filterKey, setFilterKey] = useState('*');

    // Initialize isotope
    useEffect(() => {
        let isoInstance;

        const loadIsotope = async () => {
            const IsotopeLib = (await import('isotope-layout')).default;
            isoInstance = new IsotopeLib('.items-container', {
                itemSelector: '.masonry-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.masonry-item',
                },
            });
            isotope.current = isoInstance;
        };

        loadIsotope();

        return () => {
            if (isoInstance) {
                isoInstance.destroy();
            }
        };
    }, []);

    // Apply filter
    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({
                filter: filterKey === '*' ? '*' : `.${filterKey}`,
            });
        }
    }, [filterKey]);

    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key);
    }, []);

    const activeBtn = (key) => (key === filterKey ? 'filter active' : 'filter');

    // Portfolio item data
    const portfolioItems = [
        {
            id: 1,
            cat: 'cat-1',
            img: 'portfolio-two-1-1.jpg',
            subtitle: 'Cloud Services',
            title: 'Azure Migration'
        },
        {
            id: 2,
            cat: 'cat-2',
            img: 'portfolio-two-1-2.jpg',
            subtitle: 'Illustration',
            title: 'Creative Sketchbook'
        },
        {
            id: 3,
            cat: 'cat-3',
            img: 'portfolio-two-1-3.jpg',
            subtitle: 'Photography',
            title: 'Urban Exploration'
        },
        {
            id: 4,
            cat: 'cat-4',
            img: 'portfolio-two-1-4.jpg',
            subtitle: 'Web Design',
            title: 'Corporate Website Revamp'
        },
    ];

    return (
        <>
            {/* Filter Buttons */}
            <div className="portfolio-two__menu-box">
                <ul className="portfolio-two-filter style1 post-filter has-dynamic-filters-counter list-unstyled">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
                        <span className="filter-text">All Work</span>
                    </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>
                        <span className="filter-text">Cloud Services</span>
                    </li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>
                        <span className="filter-text">Illustration</span>
                    </li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>
                        <span className="filter-text">Photography</span>
                    </li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>
                        <span className="filter-text">Web Design</span>
                    </li>
                </ul>
            </div>

            {/* Portfolio Grid */}
            <div className="row isotope-layout items-container">
                {portfolioItems.map((item) => (
                    <div
                        key={item.id}
                        className={`col-xl-3 col-lg-6 col-md-6 masonry-item all ${item.cat}`}
                    >
                        <div className="portfolio-two__single">
                            <div className="portfolio-two__img">
                                <img
                                    src={`assets/images/project/${item.img}`}
                                    alt={item.title}
                                />
                                <div className="portfolio-two__content">
                                    <p className="portfolio-two__sub-title">{item.subtitle}</p>
                                    <h3 className="portfolio-two__title">
                                        <Link href="/portfolio-details">{item.title}</Link>
                                    </h3>
                                </div>
                                <div className="portfolio-two__arrow">
                                    <Link
                                        href={`/assets/images/project/${item.img}`}
                                        className="img-popup"
                                    >
                                        <span className="icon-back" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
