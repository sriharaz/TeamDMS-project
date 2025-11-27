import React from 'react';
import './App.css';
import Header from './components/Header';
import Node from './components/Node';
import ScrollToTop from './components/ScrollToTop';
import { troubleshootingData } from './data/troubleshootingData';

function App() {
  return (
    <div className="app-wrapper">
      {/* Decorative floating emojis */}
      <div className="emoji-decoration">☎️</div>
      <div className="emoji-decoration">🎧</div>
      <div className="emoji-decoration">👤</div>
      <div className="emoji-decoration">📞</div>

      <div className="container">
        <Header />
        
        <div className="content-wrapper">
          <div className="mindmap">
            {troubleshootingData.map((node, index) => (
              <Node key={node.id} node={node} index={index} />
            ))}
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default App;
