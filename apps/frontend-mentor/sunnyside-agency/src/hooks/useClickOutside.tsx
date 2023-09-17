import { useCallback, useEffect, useRef, useState } from "react";

export default function useClickOutside<T extends HTMLElement>(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);

    const ref = useRef<T | null>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsComponentVisible(false);
        }
    }, []);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            handleClickOutside(event);
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, [handleClickOutside]);

    return { ref, isComponentVisible, setIsComponentVisible };
}
