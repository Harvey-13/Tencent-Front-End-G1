// src/app.tsx
import React from 'react';
import './App.less';
import './assets/css/common.less';
import 'antd/dist/antd.css';
import Home from '@/view/Home/home';

const App: React.FC<any> = () => {
  return (
    <div className='app'>
      <Home />
    </div>
  );
};

export default App;
