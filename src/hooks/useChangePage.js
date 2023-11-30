import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeActiveLi } from "../store/headerSlice.js";

const useChangePage = (page) => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {;
        const options = {
            root: null,
            rootMargin: '-100px',
            threshold: 0.3
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
    }, [dispatch, page]);

    return ref;
};

export default useChangePage;
