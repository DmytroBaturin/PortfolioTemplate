import styles from './index.module.scss';
import info from "../../info.js";
import { Project } from "../../components/project";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules"; // Scrollbar module

export const ProjectsPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <h1>My projects</h1>
            </div>
            <Swiper
                modules={[Navigation]}
                className={styles.container}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {Object.values(info.myprojects).map((project, i) => (
                    <SwiperSlide key={i}>
                        <Project {...project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
