import { useNavigate } from 'react-router-dom';
import { Bot, ShieldCheck, Target, Smartphone, ChevronRight, Brain, LineChart, Server } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: 'white' }}>SBI AURA</h1>
        <button 
          className="btn btn-secondary" 
          style={{ width: 'auto', padding: '0.5rem 1rem' }}
          onClick={() => navigate('/login')}
        >
          Launch Demo
        </button>
      </nav>

      {/* Hero Section */}
      <header className="landing-section" style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Transforming First-Time Customers into <br/><span style={{ color: 'var(--accent-color)' }}>Confident Digital Users</span></h1>
        <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          SBI AURA is an Agentic AI-powered Digital Adoption Coach focusing on the first 30 days of a customer's banking journey.
        </p>
        <button 
          className="btn btn-primary" 
          style={{ width: 'auto', fontSize: '1.25rem', padding: '1rem 2rem' }}
          onClick={() => navigate('/login')}
        >
          Start Interactive Demo <ChevronRight />
        </button>
      </header>

      {/* The Problem & Solution */}
      <section className="landing-section" style={{ backgroundColor: 'var(--card-bg)', borderRadius: '20px' }}>
        <div className="grid-2">
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Problem</h2>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              Despite significant investments in digital banking, many first-time customers stop engaging after opening an account. They struggle to navigate applications, understand financial products, and confidently use digital services.
            </p>
            <p style={{ lineHeight: '1.6' }}>
              Most first-time customers never activate UPI, register for Internet Banking, or explore beyond basic payments. The biggest drop-off occurs immediately after onboarding.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Solution</h2>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              <strong>SBI AURA</strong> acts as an autonomous Digital Adoption Coach embedded within YONO. Instead of promoting products or executing static CRM rules, AURA continuously plans and adapts to help the customer achieve meaningful digital banking milestones.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}><Brain color="var(--primary-color)"/> Persistent Customer Memory</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}><Target color="var(--primary-color)"/> Goal-Oriented AI Planning</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}><Smartphone color="var(--primary-color)"/> Personalized Dynamic Journeys</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Digital Adoption Score */}
      <section className="landing-section">
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>The Digital Adoption Score</h2>
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
          Instead of tracking isolated metrics, AURA optimizes a single adoption score. Every AI decision aims to improve this score within the critical first 30 days.
        </p>
        <div className="grid-3">
          {[{ title: "Account Opened", score: 10 }, { title: "KYC Completed", score: 20 }, { title: "UPI Activated", score: 35 }, { title: "First Digital Transaction", score: 50 }, { title: "Internet Banking Enabled", score: 65 }, { title: "Bill Payment", score: 80 }].map((item, idx) => (
            <div key={idx} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{item.score}</div>
              <div style={{ fontWeight: '500' }}>{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Details */}
      <section className="landing-section" style={{ backgroundColor: '#1e293b', color: 'white', borderRadius: '20px' }}>
        <h2 style={{ fontSize: '2rem', color: 'white', textAlign: 'center', marginBottom: '3rem' }}>Multi-Agent Architecture</h2>
        <div className="grid-2">
          <div>
            <h3 style={{ color: 'var(--accent-color)' }}>How it Works</h3>
            <p style={{ marginBottom: '1rem', color: '#cbd5e1' }}>AURA uses a tiered AI architecture to minimize inference costs while reserving advanced reasoning for high-value interactions.</p>
            <ul style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
              <li><strong>Experience Agent:</strong> Conversational interface.</li>
              <li><strong>Planning Agent:</strong> Determines next best goal.</li>
              <li><strong>Knowledge Agent:</strong> RAG with SBI-approved docs.</li>
              <li><strong>Recommendation Engine:</strong> Suggests actions.</li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: 'var(--accent-color)' }}>AI Security & Governance</h3>
            <p style={{ marginBottom: '1rem', color: '#cbd5e1' }}>Designed following RBI's FREE-AI principles. Hallucinations are prevented via strict retrieval pipelines.</p>
            <ul style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
              <li>Explicit customer consent & DPDP compliance</li>
              <li>Prompt injection protection</li>
              <li>Human-in-the-loop escalation</li>
              <li>No generative banking advice; only approved workflows.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workflows */}
      <section className="landing-section">
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>Sample Workflow</h2>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', border: '2px dashed var(--primary-color)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ padding: '1rem', backgroundColor: '#e0e7ff', borderRadius: '8px', width: '100%' }}>Account Opened but UPI Not Activated</div>
            <Server size={24} color="var(--text-secondary)" />
            <div style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '8px', width: '100%' }}>Agent detects drop-off & finds MPIN confusion</div>
            <Server size={24} color="var(--text-secondary)" />
            <div style={{ padding: '1rem', backgroundColor: '#e0e7ff', borderRadius: '8px', width: '100%' }}>Launches Guided Setup & ₹1 Demo</div>
            <Server size={24} color="var(--text-secondary)" />
            <div style={{ padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '8px', width: '100%', border: '2px solid var(--accent-color)', fontWeight: 'bold' }}>UPI Activated - Score Increases!</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer style={{ textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Experience the Prototype</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#e2e8f0' }}>Launch the interactive 5-minute demo to see how AURA guides a new user (Vidya) to complete her digital adoption journey.</p>
        <button 
          className="btn btn-secondary" 
          style={{ width: 'auto', fontSize: '1.25rem', padding: '1rem 2rem', color: 'var(--primary-color)' }}
          onClick={() => navigate('/login')}
        >
          Launch Interactive Demo
        </button>
      </footer>

    </div>
  );
};

export default Landing;
