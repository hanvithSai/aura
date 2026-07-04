import { useNavigate } from 'react-router-dom';
import { ChevronLeft, PlayCircle, BookOpen } from 'lucide-react';

const LearningHub = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'UPI', desc: 'Unified Payment Interface. Instant payments.' },
    { title: 'Internet Banking', desc: 'Access accounts, transfers, statements.' },
    { title: 'Debit Card', desc: 'Secure card for POS and ATMs.' },
    { title: 'Savings Goal', desc: 'Build emergency savings automatically.' }
  ];

  return (
    <div className="page-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ margin: 0 }}>Learning Hub</h2>
      </div>

      <div className="card" style={{ backgroundColor: 'var(--primary-color)', color: 'white', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <BookOpen color="white" />
          <h3 style={{ color: 'white', margin: 0, fontSize: '1.25rem' }}>Learn by doing.</h3>
        </div>
        <p style={{ opacity: 0.9 }}>
          Short interactive demos to help you master digital banking confidently.
        </p>
      </div>

      <h3 className="mb-3" style={{ fontSize: '1.1rem' }}>Featured Demo</h3>
      <div className="card" style={{ border: '2px solid var(--accent-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0, color: 'var(--primary-color)' }}>UPI Setup</h3>
          <span style={{ fontSize: '0.8rem', backgroundColor: '#e2e8f0', padding: '4px 8px', borderRadius: '12px', fontWeight: 'bold' }}>2 mins</span>
        </div>
        
        <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>What is it?</strong> Unified Payment Interface.</div>
        <div style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}><strong>Why use it?</strong> Instant, secure payments 24/7.</div>
        
        <button className="btn btn-primary" onClick={() => navigate('/upi-demo')}>
          <PlayCircle size={18} style={{ marginRight: '8px' }} /> Try ₹1 Demo
        </button>
      </div>

      <h3 className="mb-3 mt-4" style={{ fontSize: '1.1rem' }}>Topics</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {cards.map((card, idx) => (
          <div key={idx} className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4 style={{ margin: 0, fontSize: '0.95rem' }}>{card.title}</h4>
            <p className="text-muted text-sm" style={{ flex: 1 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningHub;
