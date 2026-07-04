import { useNavigate } from 'react-router-dom';
import ProgressRing from '../components/ProgressRing';
import AiCoachCard from '../components/AiCoachCard';
import { CheckCircle2, Circle, Clock, Target, Lightbulb, BookOpen, Compass } from 'lucide-react';

const Dashboard = ({ score, milestones }) => {
  const navigate = useNavigate();

  const journeySteps = [
    { key: 'account', label: 'Account Created' },
    { key: 'kyc', label: 'KYC' },
    { key: 'upi', label: 'UPI' },
    { key: 'firstPayment', label: 'First Transaction' },
    { key: 'internetBanking', label: 'Internet Banking' },
    { key: 'billPay', label: 'Bill Pay' },
    { key: 'savingsGoal', label: 'Savings Goal' },
  ];

  const completedCount = Object.values(milestones).filter(Boolean).length;
  const pendingCount = journeySteps.length - completedCount;

  let currentStage = "Explorer";
  if (score >= 100) currentStage = "Digital Banking Champion";
  else if (score >= 80) currentStage = "Confident";
  else if (score >= 60) currentStage = "Digital Explorer";
  else if (score >= 40) currentStage = "Explorer";
  else if (score >= 20) currentStage = "Learning";
  else currentStage = "Getting Started";

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Hi Vidya 👋</h2>
          <p className="text-muted">Welcome back.</p>
        </div>
        <ProgressRing score={score} />
      </div>
      
      <p style={{ textAlign: 'right', marginTop: '-1rem', marginBottom: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
        Stage: {currentStage}
      </p>

      {score < 100 ? (
        <AiCoachCard 
          message={"Hello Vidya.\n\nYou're only one step away from becoming fully digital.\n\nToday's goal: Activate Internet Banking."}
          targetRoute="/ib-demo"
          buttonText="Continue Setup"
        />
      ) : (
        <AiCoachCard 
          message={"Amazing work Vidya!\n\nYou've completed your 30-day digital onboarding.\n\nAURA will now act as your financial companion."}
          targetRoute="/graduation"
          buttonText="View Graduation"
          title="Journey Complete"
        />
      )}

      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem', marginBottom: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={() => navigate('/learning')} style={{ flex: 1 }}>
          <BookOpen size={18} style={{ marginRight: '8px' }} /> Learning Hub
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/explore')} style={{ flex: 1 }}>
          <Compass size={18} style={{ marginRight: '8px' }} /> Explore
        </button>
      </div>

      <div className="card">
        <h3 className="mb-3">Journey Timeline</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {journeySteps.map((step, index) => {
            const isCompleted = milestones[step.key];
            return (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: isCompleted ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                {isCompleted ? <CheckCircle2 color="var(--accent-color)" /> : <Circle />}
                <span style={{ fontWeight: isCompleted ? '500' : '400', textDecoration: isCompleted ? 'line-through' : 'none' }}>
                  {step.label}
                </span>
              </div>
            );
          })}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: score >= 100 ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
            {score >= 100 ? <Target color="var(--accent-color)" /> : <Target />}
            <span style={{ fontWeight: score >= 100 ? 'bold' : '400' }}>🏆 Graduate</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div className="card" style={{ marginBottom: 0, padding: '1rem' }}>
          <div className="text-muted text-sm mb-1">Completed</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{completedCount}</div>
        </div>
        <div className="card" style={{ marginBottom: 0, padding: '1rem' }}>
          <div className="text-muted text-sm mb-1">Pending</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{pendingCount}</div>
        </div>
      </div>

      {score < 100 && (
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)' }}>
            <Lightbulb size={20} />
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Recommendation</h3>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <div style={{ fontWeight: '600' }}>Enable Internet Banking</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px', marginBottom: '12px' }}>
              <Clock size={14} /> Estimated Time: 3 minutes
            </div>
            <div style={{ fontSize: '0.9rem', paddingLeft: '12px', borderLeft: '2px solid #e2e8f0' }}>
              <strong style={{ display: 'block', marginBottom: '4px' }}>Why?</strong>
              Access statements, fund transfers, and exclusive services.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
