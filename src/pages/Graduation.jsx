import { useNavigate } from 'react-router-dom';
import { Trophy, CheckCircle, Home } from 'lucide-react';

const Graduation = ({ score }) => {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', textAlign: 'center' }}>
      
      <div style={{ marginBottom: '2rem', animation: 'fadeIn 1s ease-out' }}>
        <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 2rem' }}>
          <Trophy size={120} color="#f59e0b" />
          <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', backgroundColor: 'var(--bg-color)', borderRadius: '50%' }}>
            <CheckCircle size={40} color="var(--accent-color)" />
          </div>
        </div>

        <h1 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
          Congratulations!
        </h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          You're now a
        </p>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
          Digital Banking Explorer
        </p>
      </div>

      <div className="card" style={{ display: 'flex', justifyContent: 'space-around', padding: '1.5rem 1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>7</div>
          <div className="text-muted text-sm">Completed</div>
        </div>
        <div style={{ borderLeft: '1px solid #e2e8f0' }}></div>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>30</div>
          <div className="text-muted text-sm">Days</div>
        </div>
        <div style={{ borderLeft: '1px solid #e2e8f0' }}></div>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{score}</div>
          <div className="text-muted text-sm">Score</div>
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
        You've successfully completed your Digital Adoption Journey. AURA will now become your financial companion.
      </p>

      <button className="btn btn-primary" onClick={() => navigate('/dashboard')} style={{ marginTop: 'auto' }}>
        <Home size={18} style={{ marginRight: '8px' }} /> Continue Banking
      </button>

    </div>
  );
};

export default Graduation;
