import './App.css'
import {Header} from "./components/header/index.jsx";
import {Main} from "./screens/Main";
import {Selection} from "./components/selection";
import {SelectionsPage} from "./screens/Selections/index.jsx";
import {ProjectsPage} from "./screens/Projects";
import {About} from "./screens/About";

function App() {
    return (
        <div className="root">
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
            </div>
        </div>
    )
}

export default App
