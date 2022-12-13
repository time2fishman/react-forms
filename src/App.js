import React, { useState } from 'react';

function App() {
  const initialState = { issueType: '', subject: '', message: '' }
  const [formState, setFormState] = useState(initialState)

  return (
    <main>
      <h1>React Forms</h1>
      <form>
        <label htmlFor='issueType'>Type of issue:</label><br />
        <select id='issueType'>
          <option value='outage'>Service Outage</option>
          <option value='billing'>Billing</option>
          <option value='cancel'>Cancel Service</option>
        </select><br />
        <label htmlFor='subject'>Subject:</label><br />
        <input id='subject' type='text' /><br />
        <label htmlFor='message'>Message:</label><br />
        <textarea id='message' cols='30' rows='10'></textarea><br />
        <button type='submit'>Send</button>
      </form>
    </main>
  );
}

export default App;
