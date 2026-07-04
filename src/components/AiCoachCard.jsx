import { Bot, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AiCoachCard = ({ message, targetRoute, buttonText = "Continue", title = "AURA Coach" }) => {
  const navigate = useNavigate();

  return (
    <div className="card" style={{ border: '2px solid var(--accent-color)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '-15px', left: '20px', backgroundColor: 'var(--accent-color)', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Bot size={14} /> AI Recommendation
      </div>
      <h3 style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>{title}</h3>
      <div style={{ margin: '1rem 0', whiteSpace: 'pre-line', color: 'var(--text-secondary)' }}>
        {message}
      </div>
      {targetRoute && (
        <button className="btn btn-primary" onClick={() => navigate(targetRoute)}>
          {buttonText} <ChevronRight size={18} style={{ marginLeft: '4px' }} />
        </button>
      )}
    </div>
  );
};

export default AiCoachCard;
