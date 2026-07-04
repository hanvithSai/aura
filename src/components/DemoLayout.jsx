import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const DemoLayout = ({ children }) => {
  const navigate = useNavigate();
  
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {children}
      <button 
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#1e293b',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '12px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          zIndex: 1000,
          fontWeight: '600',
          fontFamily: 'Inter, sans-serif',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <LogOut size={18} /> Exit Demo
      </button>
    </div>
  );
};

export default DemoLayout;
