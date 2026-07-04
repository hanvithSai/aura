import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
          <User color="white" size={40} />
        </div>
        <h1 style={{ fontSize: '2rem' }}>Hi Vidya!</h1>
        <p className="text-muted">Welcome to SBI YONO</p>
      </div>

      <div className="card" style={{ borderLeft: '4px solid var(--accent-color)', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Today's Goal</h3>
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)', marginTop: '0.25rem' }}>
          Activate Internet Banking
        </p>
      </div>

      <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>
        Continue Journey
      </button>
    </div>
  );
};

export default Login;
