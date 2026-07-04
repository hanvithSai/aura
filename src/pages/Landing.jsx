import { useNavigate } from 'react-router-dom';
import { Bot, ShieldCheck, Target, Smartphone } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container" style={{ textAlign: 'center', paddingTop: '3rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>SBI AURA</h1>
        <p className="text-muted" style={{ fontWeight: '500' }}>AI User Relationship Agent</p>
      </div>

      <div className="card" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '2rem 1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ color: 'white', fontSize: '1.75rem', lineHeight: '1.2' }}>
          Banking is easy when someone guides you.
        </h2>
        <p style={{ marginTop: '1rem', opacity: 0.9 }}>
          Meet your personal AI Digital Adoption Coach.
        </p>
      </div>

      <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>Features</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Bot color="var(--primary-color)" /> Personalized Guidance
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Target color="var(--primary-color)" /> Goal-Based Learning
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <ShieldCheck color="var(--primary-color)" /> Secure Banking
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Smartphone color="var(--primary-color)" /> Built into SBI YONO
          </li>
        </ul>
      </div>

      <button className="btn btn-primary" onClick={() => navigate('/login')}>
        Start Journey
      </button>
    </div>
  );
};

export default Landing;
