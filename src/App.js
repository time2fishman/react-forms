import React, { useState } from 'react';

function App() {
  const initialState = { issueType: '', subject: '', message: '' }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    console.log(formState);
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState);
    setFormState(initialState)
  }

  return (
    <main>
      <h1>React Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='issueType'>Type of issue:</label><br />
        <select id='issueType' onChange={handleChange} value={formState.issueType}>
          <option>Choose an option</option>
          <option value='outage'>Service Outage</option>
          <option value='billing'>Billing</option>
          <option value='cancel'>Cancel Service</option>
        </select><br />
        <label htmlFor='subject'>Subject:</label><br />
        <input id='subject' type='text' onChange={handleChange} value={formState.subject} /><br />
        <label htmlFor='message'>Message:</label><br />
        <textarea id='message' cols='30' rows='10' onChange={handleChange} value={formState.message}></textarea><br />
        <button type='submit'>Send</button>
      </form>
    </main>
  );
}

export default App;
