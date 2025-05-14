import React, { useState } from 'react';
import './App.css';
import OptionComparator from './components/OptionComparator';
import IfOnlySimulator from './components/IfOnlySimulator';
import logoSvg from './assets/logo.svg';

function App() {
  const [activeTab, setActiveTab] = useState<'comparator' | 'simulator'>('comparator');

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logoSvg} alt="择优助手 Logo" className="app-logo" />
          <h1>择优助手</h1>
        </div>
        <p className="app-subtitle">帮助您做出更明智的决策</p>
        <nav>
          <button
            onClick={() => setActiveTab('comparator')}
            className={activeTab === 'comparator' ? 'active' : ''}
          >
            选项对比器
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={activeTab === 'simulator' ? 'active' : ''}
          >
            “如果当初”情景模拟
          </button>
        </nav>
      </header>
      <main>
        {activeTab === 'comparator' && <OptionComparator />}
        {activeTab === 'simulator' && <IfOnlySimulator />}
      </main>
    </div>
  );
}

export default App;
