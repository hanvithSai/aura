import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, CheckCircle, Shield, ChevronLeft } from 'lucide-react';
import AiCoachCard from '../components/AiCoachCard';

const UpiDemo = ({ onComplete, isIb = false }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const title = isIb ? "Internet Banking Setup" : "UPI Payment Demo";
  const steps = isIb 
    ? ["Enter Account Details", "Verify OTP", "Set Username & Password", "Setup Complete"]
    : ["Choose Contact", "Enter ₹1", "Enter MPIN", "Payment Success"];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(prev => prev + 1);
    } else {
      onComplete();
      navigate('/dashboard');
    }
  };

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '1.5rem 1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h2>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        {step < 3 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem', border: '2px dashed var(--primary-color)' }}>
            <Smartphone size={48} color="var(--primary-color)" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Step {step + 1}</h3>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              {steps[step]}
            </p>
            <button className="btn btn-primary" onClick={handleNext}>
              Simulate Next Action
            </button>
          </div>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem', backgroundColor: '#ecfdf5', border: '2px solid var(--accent-color)' }}>
            <CheckCircle size={64} color="var(--accent-color)" style={{ margin: '0 auto 1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Congratulations!</h3>
            <p style={{ color: '#065f46', marginBottom: '2rem' }}>
              You completed your {isIb ? 'Internet Banking Setup' : 'first UPI payment'}.
            </p>
          </div>
        )}

      </div>

      <div style={{ marginTop: 'auto' }}>
        {step === 3 && (
          <div style={{ marginBottom: '1rem' }}>
            <AiCoachCard 
              title="AURA Security Tip"
              message={isIb 
                ? "Never share your password or OTP. Always check for the lock icon in your browser when using Internet Banking." 
                : "Your MPIN acts like your ATM PIN. Never share it with anyone. AURA will never ask for your MPIN."}
              targetRoute="/dashboard"
              buttonText="Return to Dashboard"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpiDemo;
