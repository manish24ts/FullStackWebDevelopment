import React, { useState } from 'react';
import './App.css';
function App() {
  const [voterName, setVoterName] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [votes, setVotes] = useState({
    Candidate1: 0,
    Candidate2: 0,
    Candidate3: 0,
  });
  const handleVote = (event) => {
    event.preventDefault();
    if (selectedCandidate && voterName) {
      setVotes({
        ...votes,
        [selectedCandidate]: votes[selectedCandidate] + 1,
      });
      alert(`Thank you for voting, ${voterName}!`);
      setVoterName('');
      setSelectedCandidate('');
    } else {
      alert('Please enter your name and select a candidate.');
    }
  };
  return (
    <div className="App">
      <h1>Voting Application</h1>
      <form onSubmit={handleVote}>
        <div>
          <label>
            Voter Name:
            <input
              type="text"
              value={voterName}
              onChange={(e) => setVoterName(e.target.value)}
              required
            />	          </label>
        </div>
        <div>
          <label>
            Choose a Candidate:
            <select
              value={selectedCandidate}
              onChange={(e) => setSelectedCandidate(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Candidate1">Candidate 1</option>
              <option value="Candidate2">Candidate 2</option>
              <option value="Candidate3">Candidate 3</option>
            </select>
          </label>
        </div>
        <button type="submit">Vote</button>
      </form>
      <h2>Voting Results</h2>
      <ul>
        <li>Candidate 1: {votes.Candidate1} votes</li>
        <li>Candidate 2: {votes.Candidate2} votes</li>
        <li>Candidate 3: {votes.Candidate3} votes</li>
      </ul>
    </div>
  );
}
export default App;
