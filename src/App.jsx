import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UpiDemo from './pages/UpiDemo';
import LearningHub from './pages/LearningHub';
import Explore from './pages/Explore';
import Graduation from './pages/Graduation';
import AppLayout from './components/AppLayout';

function App() {
  const [score, setScore] = useState(82);
  const [milestones, setMilestones] = useState({
    account: true,
    kyc: true,
    upi: true,
    firstPayment: true,
    internetBanking: false,
    billPay: false,
    savingsGoal: false,
  });

  const completeMilestone = (milestoneKey, points) => {
    if (!milestones[milestoneKey]) {
      setMilestones(prev => ({ ...prev, [milestoneKey]: true }));
      setScore(prev => Math.min(100, prev + points));
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
        <Route 
          path="/dashboard" 
          element={<AppLayout><Dashboard score={score} milestones={milestones} /></AppLayout>} 
        />
        <Route 
          path="/upi-demo" 
          element={<AppLayout><UpiDemo onComplete={() => completeMilestone('firstPayment', 0)} /></AppLayout>} 
        />
        <Route 
          path="/ib-demo" 
          element={<AppLayout><UpiDemo onComplete={() => completeMilestone('internetBanking', 18)} isIb={true} /></AppLayout>} 
        />
        <Route path="/learning" element={<AppLayout><LearningHub /></AppLayout>} />
        <Route path="/explore" element={<AppLayout><Explore /></AppLayout>} />
        <Route path="/graduation" element={<AppLayout><Graduation score={score} /></AppLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
