import React from 'react';

const UserModal = ({user, id, toggleModal, prevNextButton}) => {
    // change date of birth format so it is MM/DD/YYYY
    const dob = new Date(user.dob.date);
    const dobNewFormat = (dob.getMonth() + 1) + '/' + dob.getDate() + '/' +  dob.getFullYear();
    // return modal window
    return (
        <div className="modal-container">
            <div className="modal">
                <button type="button" id="modal-close-btn" className="modal-close-btn" onClick={() => toggleModal(id)}><strong>X</strong></button>
                <div className="modal-info-container">
                    <img className="modal-img" src={user.picture.large} alt={`${user.name.first}_${user.name.last}`} />
                    <h3 id="name" className="modal-name cap">{user.name.first} {user.name.last}</h3>
                    <p className="modal-text">{user.email}</p>
                    <p className="modal-text cap">{user.location.city}</p>
                    <hr />
                    <p className="modal-text">{user.phone}</p>
                    <p className="modal-text">
                        {user.location.street.number} {user.location.street.name}., {user.location.city}, {user.location.state} {user.location.postcode}
                    </p>
                    <p className="modal-text">Birthday: {dobNewFormat}</p>
                </div>
            </div>
            <div className="modal-btn-container">
                <button type="button" id="modal-prev" className="modal-prev btn" onClick={(e) => prevNextButton(e, id)}>Prev</button>
                <button type="button" id="modal-next" className="modal-next btn" onClick={(e) => prevNextButton(e, id)}>Next</button>
            </div>
        </div>
    )
}

export default UserModal;