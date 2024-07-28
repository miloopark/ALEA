import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import CSGOMatch from './components/CSGOMatch';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/csgo-match">CSGO Match</Link>
        </div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/csgo-match" element={<CSGOMatch />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
