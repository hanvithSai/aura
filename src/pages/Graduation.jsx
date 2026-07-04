import { useNavigate } from 'react-router-dom';
import { Trophy, CheckCircle, Home } from 'lucide-react';

const Graduation = ({ score }) => {
  const navigate = useNavigate();

  return (
    <div className="center-content page-container">
      <div className="card" style={{ width: '100%', maxWidth: '600px', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem', animation: 'fadeIn 1s ease-out' }}>
          <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 2rem' }}>
            <Trophy size={160} color="#f59e0b" />
            <div style={{ position: 'absolute', bottom: '-10px', right: '10px', backgroundColor: 'var(--bg-color)', borderRadius: '50%' }}>
              <CheckCircle size={48} color="var(--accent-color)" />
            </div>
          </div>

          <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
            Congratulations!
          </h1>
          <p className="text-muted" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            You're now a
          </p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
            Digital Banking Explorer
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '2rem', backgroundColor: '#f1f5f9', borderRadius: '16px', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>7</div>
            <div className="text-muted">Completed</div>
          </div>
          <div style={{ borderLeft: '2px solid #cbd5e1' }}></div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>30</div>
            <div className="text-muted">Days</div>
          </div>
          <div style={{ borderLeft: '2px solid #cbd5e1' }}></div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{score}</div>
            <div className="text-muted">Score</div>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.25rem', lineHeight: '1.6' }}>
          You've successfully completed your Digital Adoption Journey. AURA will now become your personalized financial companion.
        </p>

        <button className="btn btn-primary" onClick={() => navigate('/dashboard')} style={{ fontSize: '1.1rem', padding: '1rem 2rem', width: 'auto' }}>
          <Home size={20} style={{ marginRight: '8px' }} /> Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Graduation;
