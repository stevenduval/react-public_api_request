import React from 'react';

const User = ({user, toggleModal, id}) => {
    // return 'card' for each user
    return (
        <div className="card" onClick={() => toggleModal(id)}>
            <div className="card-img-container">
                <img className="card-img" src={user.picture.large} alt={`${user.name.first}_${user.name.last}`} />
            </div>
            <div className="card-info-container">
                <h3 id="name" className="card-name cap">{user.name.first} {user.name.last}</h3>
                <p className="card-text">{user.email}</p>
                <p className="card-text cap">{user.location.city}</p>
            </div>
        </div>
    )
}

export default User;