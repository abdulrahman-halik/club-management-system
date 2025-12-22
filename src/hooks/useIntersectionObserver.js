import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Optional: Stop observing once visible if we only want the animation to happen once
                if (options.freezeOnceVisible) {
                    observer.unobserve(entry.target);
                }
            } else if (!options.freezeOnceVisible) {
                setIsVisible(false);
            }
        }, { threshold: 0.1, ...options });

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options.threshold, options.root, options.rootMargin, options.freezeOnceVisible]);

    return [elementRef, isVisible];
};

export default useIntersectionObserver;
