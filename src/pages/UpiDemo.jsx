import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, CheckCircle, Shield, ChevronLeft, ArrowRight } from 'lucide-react';
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
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ChevronLeft size={32} />
        </button>
        <h2 style={{ margin: 0, fontSize: '2rem' }}>Interactive Demo: {title}</h2>
      </div>

      <div className="grid-2" style={{ flex: 1 }}>
        {/* Left Side: The Interactive Step Container */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {step < 3 ? (
            <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', border: '2px dashed var(--primary-color)', backgroundColor: 'white' }}>
              <Smartphone size={64} color="var(--primary-color)" style={{ margin: '0 auto 2rem' }} />
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Step {step + 1}</h3>
              <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
                {steps[step]}
              </p>
              <button className="btn btn-primary" onClick={handleNext} style={{ fontSize: '1.1rem', padding: '1rem' }}>
                Simulate Next Action <ArrowRight style={{ marginLeft: '8px' }} />
              </button>
            </div>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: '#ecfdf5', border: '2px solid var(--accent-color)' }}>
              <CheckCircle size={80} color="var(--accent-color)" style={{ margin: '0 auto 2rem' }} />
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Congratulations!</h3>
              <p style={{ color: '#065f46', fontSize: '1.25rem', marginBottom: '3rem' }}>
                You completed your {isIb ? 'Internet Banking Setup' : 'first UPI payment'}.
              </p>
              <button className="btn btn-primary" onClick={handleNext} style={{ fontSize: '1.1rem', padding: '1rem' }}>
                Return to Dashboard
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Coach & Progress */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
          <div className="card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Demo Progress</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: i > step ? 0.4 : 1 }}>
                  {i < step ? (
                    <CheckCircle color="var(--accent-color)" size={24} />
                  ) : i === step ? (
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>{i + 1}</div>
                  ) : (
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid var(--text-secondary)' }}></div>
                  )}
                  <span style={{ fontSize: '1.1rem', fontWeight: i === step ? 'bold' : 'normal', color: i === step ? 'var(--primary-color)' : 'inherit' }}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <AiCoachCard 
            title="AURA Security Tip"
            message={isIb 
              ? "Never share your password or OTP. Always check for the lock icon in your browser when using Internet Banking." 
              : "Your MPIN acts like your ATM PIN. Never share it with anyone. AURA will never ask for your MPIN."}
          />
        </div>
      </div>
    </div>
  );
};

export default UpiDemo;
