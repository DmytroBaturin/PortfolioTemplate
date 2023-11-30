// hooks/useChangePage.js
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeActiveLi } from "../store/haederSlice.js";

const useChangePage = (page) => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {; // Масив з 100 значень від 0 до 1
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3// Використання масиву threshold
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dispatch(changeActiveLi({
                        page: page,
                    }))
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [dispatch, page]); // Ви повинні також включити thresholds в залежності, якщо вони будуть динамічно змінюватись

    return ref;
};

export default useChangePage;
