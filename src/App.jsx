import './App.css'
import {Header} from "./components/header/index.jsx";
import {Main} from "./screens/Main";
import {SelectionsPage} from "./screens/Selections/index.jsx";
import {ProjectsPage} from "./screens/Projects";
import {About} from "./screens/About";
import {useEffect} from "react";
import {Footer} from "./components/footer";

function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
        const canvas = document.getElementById('dotCanvas');
        const root = document.querySelector('.root');
        const context = canvas.getContext('2d');
        function getDocumentWidth() {
            return Math.max(document.documentElement.clientWidth || 0);
        };

        function getDocumentHeight() {
            return Math.max(root.clientHeight || 0)
        };

        let vw = getDocumentWidth(),
            vh = getDocumentHeight();

        window.addEventListener('resize', onResize, false);
        function onResize() {
            vw = getDocumentWidth();
            vh = getDocumentHeight();
            resizeCanvas();
        }

        function resizeCanvas() {
            canvas.width = vw;
            canvas.height = vh;
            drawDots();
        }
        resizeCanvas();

        function drawDots() {
            const r = 2,
                cw = 40,
                ch = 40;

            for (let x = 20; x < vw; x+=cw) {
                for (let y = 20; y < vh; y+=ch) {
                    context.fillStyle = 'rgba(255,255,255,0.05)';
                    context.fillRect(x-r/2,y-r/2,r,r);
                }
            }
        }
        drawDots();
    });

    return (
        <div className="root">
            <div className="container">
                <canvas id="dotCanvas"></canvas>
            </div>
            <div style={{
                maxWidth: '915px',
                margin: '0 auto',
                padding: '0px 20px',
            }}>
                <div style={{
                    paddingBottom: '80px'
                }}>
                <Header/>
                </div>
                <Main />
                <SelectionsPage />
                <ProjectsPage/>
                <About/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
