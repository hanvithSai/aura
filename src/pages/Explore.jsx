import { useNavigate } from 'react-router-dom';
import { ChevronLeft, GraduationCap, Briefcase, Plane, ArrowRight, Home, ShoppingCart } from 'lucide-react';

const Explore = () => {
  const navigate = useNavigate();

  const lifeGoals = [
    {
      title: "Going to College",
      icon: <GraduationCap size={40} color="var(--primary-color)" />,
      path: ["UPI", "Debit Card", "Savings Goal"]
    },
    {
      title: "First Salary",
      icon: <Briefcase size={40} color="var(--primary-color)" />,
      path: ["Emergency Fund", "Credit Score", "Investment"]
    },
    {
      title: "Travel Abroad",
      icon: <Plane size={40} color="var(--primary-color)" />,
      path: ["Forex", "International Payments"]
    },
    {
      title: "Buying a Home",
      icon: <Home size={40} color="var(--primary-color)" />,
      path: ["Home Loan Eligibility", "EMI Calculator", "Insurance"]
    },
    {
      title: "Big Purchases",
      icon: <ShoppingCart size={40} color="var(--primary-color)" />,
      path: ["Credit Card", "EMI on Debit", "Personal Loan"]
    }
  ];

  return (
    <div className="page-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ChevronLeft size={32} />
        </button>
        <h2 style={{ margin: 0, fontSize: '2rem' }}>Explore Products</h2>
      </div>

      <p className="text-muted" style={{ marginBottom: '3rem', fontSize: '1.25rem', maxWidth: '600px' }}>
        Discover banking products tailored to your personal life goals and milestones, curated by AURA.
      </p>

      <div className="card-grid">
        {lifeGoals.map((goal, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
              <div style={{ backgroundColor: '#e0e7ff', padding: '16px', borderRadius: '16px' }}>
                {goal.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{goal.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
              {goal.path.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {index + 1}
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                    {item}
                  </span>
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
