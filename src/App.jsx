import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UpiDemo from './pages/UpiDemo';
import LearningHub from './pages/LearningHub';
import Explore from './pages/Explore';
import Graduation from './pages/Graduation';

function App() {
  const [score, setScore] = useState(30);
  const [milestones, setMilestones] = useState({
    account: true,
    kyc: true,
    upi: false,
    firstPayment: false,
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
        <Route path="/login" element={<Login milestones={milestones} />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard score={score} milestones={milestones} />} 
        />
        <Route 
          path="/upi-demo" 
          element={<UpiDemo onComplete={() => {
            completeMilestone('upi', 20);
            completeMilestone('firstPayment', 15);
          }} />} 
        />
        <Route 
          path="/ib-demo" 
          element={<UpiDemo onComplete={() => completeMilestone('internetBanking', 15)} isIb={true} />} 
        />
        <Route path="/learning" element={<LearningHub />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/graduation" element={<Graduation score={score} />} />
      </Routes>
    </Router>
  );
}

export default App;
