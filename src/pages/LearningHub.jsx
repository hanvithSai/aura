import { useNavigate } from 'react-router-dom';
import { ChevronLeft, PlayCircle, BookOpen } from 'lucide-react';

const LearningHub = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'UPI', desc: 'Unified Payment Interface. Instant payments.' },
    { title: 'Internet Banking', desc: 'Access accounts, transfers, statements.' },
    { title: 'Debit Card', desc: 'Secure card for POS and ATMs.' },
    { title: 'Savings Goal', desc: 'Build emergency savings automatically.' },
    { title: 'Credit Score', desc: 'Understand and build your credit health.' },
    { title: 'AutoPay', desc: 'Set up recurring payments effortlessly.' }
  ];

  return (
    <div className="page-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ChevronLeft size={32} />
        </button>
        <h2 style={{ margin: 0, fontSize: '2rem' }}>Learning Hub</h2>
      </div>

      <div className="grid-2" style={{ marginBottom: '3rem' }}>
        <div className="card" style={{ backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <BookOpen color="white" size={32} />
            <h3 style={{ color: 'white', margin: 0, fontSize: '1.75rem' }}>Learn by doing.</h3>
          </div>
          <p style={{ opacity: 0.9, fontSize: '1.1rem', lineHeight: '1.6' }}>
            AURA integrates learning directly into real banking tasks. Discover short interactive demos to help you master digital banking confidently.
          </p>
        </div>

        <div className="card" style={{ border: '2px solid var(--accent-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ margin: 0, color: 'var(--primary-color)', fontSize: '1.5rem' }}>Featured: UPI Setup</h3>
            <span style={{ fontSize: '0.9rem', backgroundColor: '#e2e8f0', padding: '6px 12px', borderRadius: '12px', fontWeight: 'bold' }}>2 mins</span>
          </div>
          
          <div style={{ fontSize: '1.1rem', marginBottom: '1rem' }}><strong>What is it?</strong> Unified Payment Interface.</div>
          <div style={{ fontSize: '1.1rem', marginBottom: '2rem' }}><strong>Why use it?</strong> Instant, secure payments 24/7.</div>
          
          <button className="btn btn-primary" onClick={() => navigate('/upi-demo')} style={{ padding: '1rem' }}>
            <PlayCircle size={20} style={{ marginRight: '8px' }} /> Launch Interactive Demo
          </button>
        </div>
      </div>

      <h3 className="mb-4" style={{ fontSize: '1.5rem' }}>Explore Topics</h3>
      <div className="card-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'transform 0.2s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <h4 style={{ margin: 0, fontSize: '1.25rem' }}>{card.title}</h4>
            <p className="text-muted" style={{ flex: 1, fontSize: '1rem' }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningHub;
