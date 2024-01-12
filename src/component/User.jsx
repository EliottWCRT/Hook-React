import React from 'react'

const User = props => (
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
              >
                Modifier
              </button>
              <button
                onClick={() => props.supprimerUser(user.id)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Pas d'utilisateurs</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default User
