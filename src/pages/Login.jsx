import { useNavigate } from 'react-router-dom';
import { User, ShieldCheck } from 'lucide-react';

const Login = ({ milestones = {} }) => {
  const navigate = useNavigate();

  let primaryGoal = "Activate UPI";
  if (milestones.upi && !milestones.internetBanking) {
    primaryGoal = "Activate Internet Banking";
  } else if (milestones.internetBanking && !milestones.savingsGoal) {
    primaryGoal = "Set Up Savings Goal";
  }

  return (
    <div className="center-content page-container">
      <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ width: '100px', height: '100px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
          <User color="white" size={50} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Hi Vidya!</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Welcome to SBI YONO</p>

        <div style={{ backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', borderLeft: '4px solid var(--accent-color)', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Today's Primary Goal</h3>
          <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
            {primaryGoal}
          </p>
        </div>

        <button className="btn btn-primary" onClick={() => navigate('/dashboard')} style={{ fontSize: '1.1rem', padding: '1rem' }}>
          Continue Journey
        </button>

        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <ShieldCheck size={16} /> Secure Login via AURA
        </div>
      </div>
    </div>
  );
};

export default Login;
