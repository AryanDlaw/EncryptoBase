import { useState } from 'react';
import styles from './App.module.scss';
import { Sidebar } from './components/sidebar/sidebar';
import { MainSection } from './components/main-section/main-section';



function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
        
            <Sidebar />
            <MainSection />
            
        </div>
    );
}

export default App;
