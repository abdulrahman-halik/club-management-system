import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = ({
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
} = {}) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Optional: Stop observing once visible if we only want the animation to happen once
                if (freezeOnceVisible) {
                    observer.unobserve(entry.target);
                }
            } else if (!freezeOnceVisible) {
                setIsVisible(false);
            }
        }, { threshold, root, rootMargin });

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, root, rootMargin, freezeOnceVisible]);

    return [elementRef, isVisible];
};

export default useIntersectionObserver;
