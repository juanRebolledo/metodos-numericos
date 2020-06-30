import React from 'react';

import '../styles/App.css';
import Header from './Header/Header';
import RouteComponent from './routes/RouteComponent';

function App() {
  return(
    <div className="App">
        <Header />
        <main>
            <RouteComponent />
        </main>
      </div>
  )
}

export default App;
