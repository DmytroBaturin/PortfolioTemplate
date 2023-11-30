import styles from './index.module.scss';
import info from "../../info.js";
import { Project } from "../../components/project";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules";
import useChangePage from "../../hooks/useChangePage.js";

export const ProjectsPage = () => {
    const ref = useChangePage(2)
    return (
        <div id='projects'  className={styles.root}>
            <div className={styles.title}>
                <h1  >My projects</h1>
            </div>
            <Swiper
                ref={ref}
                modules={[Navigation]}
                className={styles.container}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {Object.values(info.myprojects).map((project, i) => (
                    <SwiperSlide key={i}>
                        <Project  {...project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
