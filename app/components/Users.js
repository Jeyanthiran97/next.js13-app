import React, { useState } from 'react'

const Users = ({users}) => {
    return (
        <div className="users">
          {users.map((user) => (
            <div key={user.id} className="card">
              <h2>{user.name}</h2>
              <small> Username: {user.username}</small>
              <p>{user.website}</p>
              <p>{user.phone}</p>
              <a href={`mailto:${user.email}`} target="_blank" className="btn">
                Email Me
              </a>
            </div>
          ))}
        </div>
    );
}

export default Users