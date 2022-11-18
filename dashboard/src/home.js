import React from 'react';
import Dashboard from './pages/dashboard';
import Site from './pages/site';
import Profile from './components/profile';
import Tasks from './components/tasksBox';
import { Sidebar } from './components/Sidebar/sidebar';
import Header from './components/header';
import CadastroGranja from './pages/cadastrarGranja';

export default function Home() {
  return (
    <div className="appContent">
      <Sidebar />
      <div className="row w-100">      
        <div className="col-md-8">
          <Header />
          {/* <Dashboard /> */}
          {/* <Site /> */}
          <CadastroGranja />
        </div>
        <div className="col-md-4">
          <div id="rightSidebar">
            <Profile />
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
}
