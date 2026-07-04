import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UpiDemo from './pages/UpiDemo';
import LearningHub from './pages/LearningHub';
import Explore from './pages/Explore';
import Graduation from './pages/Graduation';
import DemoLayout from './components/DemoLayout';

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
        <Route path="/login" element={<DemoLayout><Login milestones={milestones} /></DemoLayout>} />
        <Route 
          path="/dashboard" 
          element={<DemoLayout><Dashboard score={score} milestones={milestones} /></DemoLayout>} 
        />
        <Route 
          path="/upi-demo" 
          element={<DemoLayout><UpiDemo onComplete={() => {
            completeMilestone('upi', 20);
            completeMilestone('firstPayment', 15);
          }} /></DemoLayout>} 
        />
        <Route 
          path="/ib-demo" 
          element={<DemoLayout><UpiDemo onComplete={() => completeMilestone('internetBanking', 15)} isIb={true} /></DemoLayout>} 
        />
        <Route path="/learning" element={<DemoLayout><LearningHub /></DemoLayout>} />
        <Route path="/explore" element={<DemoLayout><Explore /></DemoLayout>} />
        <Route path="/graduation" element={<DemoLayout><Graduation score={score} /></DemoLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
