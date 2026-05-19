
import React from 'react';
import './App.css'
import AutocompleteUser from './components/AutocompleteUser.tsx'
import UserDetails from './components/UserDetails.tsx'
import type { User } from './types/user.tsx';

function App() {
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  return (
    <>
      <section id="center">
        <h1>Experient React Assessment</h1>
        <div id="center">
        <div>
          <AutocompleteUser onUserSelect={setSelectedUser} />
        </div>
        <div id='right'>
          <UserDetails user={selectedUser} />
        </div>
        </div>
      </section>

    </>
  )
}

export default App
