import React from 'react';
import './App.css';
import Diary from './components/Diary';
import AccountBook from './components/AccountBook';
import Schedule from './components/Schedule';
import WeatherNews from './components/WeatherNews';

function App() {
  return (
    <div className="app-container" style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <header className="app-header">
        <div>
          <h1>영농 일지</h1>
          <p className="subtitle">자연과 함께하는 소중한 기록</p>
        </div>
        <div className="user-info">
          <div className="user-text">
            <p className="user-name">홍길동 농부님</p>
            <p className="farm-name">꿈꾸는 달팽이 농장</p>
          </div>
          <div className="user-avatar">🐌</div>
        </div>
      </header>

      <main className="asymmetric-grid">
        <div className="left-column" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Diary />
          <Schedule />
        </div>
        <div className="right-column" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <WeatherNews />
          <AccountBook />
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2026 영농 일지 Service. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
