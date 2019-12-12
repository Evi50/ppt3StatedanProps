import React from 'react';
import Kursus from './state/State';
import Materi from './props/Prop';
import './props/style.css';

function App() {
    return (
        <div className="wrapperapp">
            <Kursus/>      
            <p>contoh state</p>
            <hr/>
            <Materi img={require('./props/kursus-seo-offline.png')} des="belajar seo" harga="120000"/>
            <Materi img={require('./props/kursuse.jpg')} des="belajar google adword" harga="400000" />
            <Materi img={require('./props/kursus-seo-offline.png')} des="belajar React js" harga="50000" />
        </div>
    );
}

export default App;