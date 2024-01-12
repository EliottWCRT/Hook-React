import React, { useState, Fragment } from 'react'
import AjouterUser from './component/AjouterUser'
import User from './component/User'
import ModifierUser from './component/ModifierUser'

const App = () => {
	const usersData = [
		{ id: 1, name: 'Eliott', username: 'Eliott01' },
		{ id: 2, name: 'Yann', username: 'Yann02' },
		{ id: 3, name: 'Rafael', username: 'Raphael03' }
	]

	const initialFormState = { id: null, name: '', username: '' }
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const ajouterUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const supprimerUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (

    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Modifier Utilisateurs</h2>
              <ModifierUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Ajouter Utilisateurs</h2>
              <AjouterUser ajouterUser={ajouterUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>Visualisation des utilisateurs</h2>
          <User users={users} editRow={editRow} supprimerUser={supprimerUser} />
        </div>
      </div>
    </div>

	)
}

export default App
