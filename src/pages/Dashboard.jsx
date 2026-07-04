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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Hi Vidya 👋</h2>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>Welcome back to your SBI dashboard.</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <ProgressRing score={score} />
          <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
            Stage: {currentStage}
          </p>
        </div>
      </div>
      
      <div className="grid-2">
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="card" style={{ marginBottom: 0, padding: '1.5rem', textAlign: 'center' }}>
              <div className="text-muted text-sm mb-1">Completed Milestones</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>{completedCount}</div>
            </div>
            <div className="card" style={{ marginBottom: 0, padding: '1.5rem', textAlign: 'center' }}>
              <div className="text-muted text-sm mb-1">Pending Milestones</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{pendingCount}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-secondary" onClick={() => navigate('/learning')} style={{ flex: 1, padding: '1rem' }}>
              <BookOpen size={20} style={{ marginRight: '8px' }} /> Learning Hub
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/explore')} style={{ flex: 1, padding: '1rem' }}>
              <Compass size={20} style={{ marginRight: '8px' }} /> Explore Products
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {score < 100 && (
            <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-color)' }}>
                <Lightbulb size={24} />
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>AURA Recommendation</h3>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>Enable Internet Banking</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '8px', marginBottom: '16px' }}>
                  <Clock size={16} /> Estimated Time: 3 minutes
                </div>
                <div style={{ fontSize: '1rem', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0', color: 'var(--text-secondary)' }}>
                  <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--text-primary)' }}>Why is this important?</strong>
                  Access your bank statements, execute fund transfers, and unlock exclusive banking services from anywhere.
                </div>
              </div>
            </div>
          )}

          <div className="card" style={{ flex: 1 }}>
            <h3 className="mb-4" style={{ fontSize: '1.25rem' }}>Your Journey Timeline</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {journeySteps.map((step, index) => {
                const isCompleted = milestones[step.key];
                return (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px', color: isCompleted ? 'var(--text-primary)' : 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    {isCompleted ? <CheckCircle2 color="var(--accent-color)" size={24} /> : <Circle size={24} />}
                    <span style={{ fontWeight: isCompleted ? '500' : '400', textDecoration: isCompleted ? 'line-through' : 'none' }}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: score >= 100 ? 'var(--text-primary)' : 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
                {score >= 100 ? <Target color="var(--accent-color)" size={24} /> : <Target size={24} />}
                <span style={{ fontWeight: score >= 100 ? 'bold' : '500' }}>🏆 Digital Graduate</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
