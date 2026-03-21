import React from 'react';

const WeatherNews = () => {
  return (
    <section className="garden-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="weather-widget" style={{ background: 'linear-gradient(135deg, #cbeea1 0%, #feffd6 100%)', padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>동네 날씨</h3>
          <p style={{ margin: '0.25rem 0', fontWeight: '600' }}>경기도 양평군 서종면</p>
          <span style={{ fontSize: '2rem', fontWeight: '800' }}>18°C</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '3rem' }}>☀️</span>
          <p style={{ fontSize: '0.875rem', margin: 0 }}>맑음 (강수확률 10%)</p>
        </div>
      </div>

      <div className="news-feed">
        <h3 style={{ fontSize: '1.125rem', color: 'var(--on-surface)', marginBottom: '1rem' }}>📋 오늘의 농사 소식</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <li style={{ fontSize: '0.925rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--surface-container)' }}>
            <a href="#" style={{ color: 'var(--on-surface)', textDecoration: 'none' }}>• 이번 주말 서리 주의 - 고추 모종 관리 요령</a>
          </li>
          <li style={{ fontSize: '0.925rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--surface-container)' }}>
            <a href="#" style={{ color: 'var(--on-surface)', textDecoration: 'none' }}>• 2026년 공익직불금 신청 안내 (4월 30일까지)</a>
          </li>
          <li style={{ fontSize: '0.925rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--surface-container)' }}>
            <a href="#" style={{ color: 'var(--on-surface)', textDecoration: 'none' }}>• 병해충 발생 정보: 노균병 예방 방제 철저</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WeatherNews;
