import React from 'react';
import heroImg from '../assets/hero.png';

const Diary = () => {
  return (
    <section className="garden-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>🍃 오늘의 농사 일기</h2>
        <button className="btn-primary">+ 새 일기 쓰기</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        <div className="diary-entry" style={{ background: 'var(--surface-container-low)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <img src={heroImg} alt="감자 싹" style={{ width: '100%', height: '120px', objectFit: 'cover' }} />
          <div style={{ padding: '1rem' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)' }}>2026.03.22</span>
            <p style={{ margin: '0.5rem 0', fontWeight: '600' }}>감자 싹이 올라왔어요!</p>
            <p style={{ fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
              드디어 기다리던 감자 싹이 보입니다. 물을 듬뿍 주고 풀을 좀 뽑아주었습니다.
            </p>
          </div>
        </div>
        <div style={{ border: '2px dashed var(--surface-container-highest)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px', cursor: 'pointer' }}>
          <span style={{ color: 'var(--on-surface-variant)' }}>어제의 기록을 남겨보세요</span>
        </div>
      </div>
    </section>
  );
};

export default Diary;
