import React from 'react';

const AccountBook = () => {
  const expenses = [
    { id: 1, item: '씨감자', category: '종자', amount: 25000 },
    { id: 2, item: '친환경 비료', category: '비료', amount: 45000 },
  ];

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <section className="garden-card" style={{ background: 'var(--surface-container-low)' }}>
      <h2 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1rem' }}>💰 우리 밭 가계부</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {expenses.map(exp => (
          <div key={exp.id} style={{ background: 'var(--surface-container-lowest)', padding: '1rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.75rem', background: 'var(--secondary-container)', color: 'var(--on-secondary-container)', padding: '0.2rem 0.6rem', borderRadius: '1rem', marginRight: '0.5rem' }}>{exp.category}</span>
              <span style={{ fontWeight: '600' }}>{exp.item}</span>
            </div>
            <span style={{ fontWeight: '700', color: 'var(--on-background)' }}>{exp.amount.toLocaleString()}원</span>
          </div>
        ))}
        <div style={{ marginTop: '0.5rem', padding: '1rem', borderTop: '1px solid var(--surface-container-highest)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '600' }}>이번 달 지출 합계</span>
          <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--tertiary)' }}>{total.toLocaleString()}원</span>
        </div>
      </div>
      <button className="btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>상세 가계부 보기</button>
    </section>
  );
};

export default AccountBook;
