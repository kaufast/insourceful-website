declare module 'isotope-layout' {
    interface IsotopeOptions {
        itemSelector?: string;
        percentPosition?: boolean;
        masonry?: {
            columnWidth?: string;
        };
    }
    
    class Isotope {
        constructor(selector: string, options?: IsotopeOptions);
        arrange(options: { filter: string }): void;
        destroy(): void;
    }
    
    export = Isotope;
}