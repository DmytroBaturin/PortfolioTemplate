import styles from './index.module.scss'
import {Avalible} from "../../components/avalible";
import {Button} from "../../components/button";
import info from "../../info.js"
import useChangePage from "../../hooks/useChangePage.js";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger)

export const Main = () => {

    const title = useRef(null)
    const p = useRef(null)
    const ref = useChangePage(0)

    useEffect(() => {
        const spans = title.current.querySelectorAll('span');
        const buttons = ref.current.querySelectorAll('button');
        console.log(p)
        const tl = gsap.timeline({
            defaults: { ease: 'power4.out' },
            scrollTrigger: {
                trigger: title.current,
                start: "top center",
                toggleActions: "play none none none",
            },
        });
        tl.fromTo([buttons, p.current, spans],
            {
                y: 120,
                skewY: 7,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                skewY: 0,
                stagger: 0.01,
                duration: 2,
            }
        );

        return () => tl.kill();
    }, []);


    return(
      <div id='main' className={styles.root}>
          <div ref={ref} className={styles.page}>
              <div className={styles.container}>
                  <div  className={styles.blur}>
                  </div>
                  <Avalible/>
                  <div className={styles.title}>
                      <div ref={title}>
                          <div className={styles.line}>
                              <span className={styles.h1}>{info.mainPageInfo.h1}</span>
                          </div>
                          <div className={styles.line}>
                              <span className={styles.span}>{info.mainPageInfo.h1span}</span>
                          </div>

                      </div>

                      <div className={styles.buttons}>
                          {
                     Object.values(info.buttons).map((button, i) => (
                         <Button
                             key={i}
                             text={button.text}
                             img={button.img}
                             link={button.link}
                         />
                     ))

                          }
                      </div>
              </div>
                  <div  className={styles.subtitle}>
                      <p ref={p}>
                          {info.mainPageInfo.p}
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}