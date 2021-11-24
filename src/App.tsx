// src/app.tsx
import React from 'react';
import './App.less';
import 'antd/dist/antd.css';
import Comment from '@comp/Comment/Comment';
const App: React.FC<any> = () => {
  return (
    <div className='app'>
      <Comment />
    </div>
  );
};

export default App;
