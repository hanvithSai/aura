import { useNavigate } from 'react-router-dom';
import { ChevronLeft, GraduationCap, Briefcase, Plane, ArrowRight } from 'lucide-react';

const Explore = () => {
  const navigate = useNavigate();

  const lifeGoals = [
    {
      title: "Going to College",
      icon: <GraduationCap size={32} color="var(--primary-color)" />,
      path: ["UPI", "Debit Card", "Savings Goal"]
    },
    {
      title: "First Salary",
      icon: <Briefcase size={32} color="var(--primary-color)" />,
      path: ["Emergency Fund", "Credit Score", "Investment"]
    },
    {
      title: "Travel",
      icon: <Plane size={32} color="var(--primary-color)" />,
      path: ["Forex", "International Payments"]
    }
  ];

  return (
    <div className="page-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ChevronLeft size={24} />
        </button>
        <h2 style={{ margin: 0 }}>Explore Products</h2>
      </div>

      <p className="text-muted" style={{ marginBottom: '2rem' }}>
        Products personalized for your life goals.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {lifeGoals.map((goal, idx) => (
          <div key={idx} className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: '#e0e7ff', padding: '12px', borderRadius: '12px' }}>
                {goal.icon}
              </div>
              <h3 style={{ margin: 0 }}>{goal.title}</h3>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {goal.path.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-secondary)', backgroundColor: '#f1f5f9', padding: '6px 12px', borderRadius: '16px' }}>
                    {item}
                  </span>
                  {index < goal.path.length - 1 && <ArrowRight size={16} color="var(--text-secondary)" />}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
