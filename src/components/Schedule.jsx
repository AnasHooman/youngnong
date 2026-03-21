import React from 'react';

const Schedule = () => {
  const tasks = [
    { id: 'mon', day: '월', task: '물주기', status: 'done' },
    { id: 'tue', day: '화', task: '비료하기', status: 'pending' },
    { id: 'wed', day: '수', task: '풀뽑기', status: 'pending' },
    { id: 'thu', day: '목', task: '정식하기', status: 'upcoming' },
    { id: 'fri', day: '금', task: '수확준비', status: 'upcoming' },
  ];

  return (
    <section className="garden-card">
      <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>📅 주간 농사 계획</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
        {tasks.map((item) => (
          <div key={item.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: '600', color: 'var(--on-surface-variant)' }}>{item.day}</span>
            <div style={{
              width: '100%',
              padding: '0.75rem 0',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
              background: item.status === 'done' ? 'var(--primary-container)' : 'var(--surface-container)',
              color: item.status === 'done' ? 'var(--primary)' : 'var(--on-surface)',
              border: item.status === 'pending' ? '2px solid var(--primary)' : 'none'
            }}>
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{item.task}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
