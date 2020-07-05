import React, { Component, Fragment } from 'react';
import User from './User'
import UserModal from './UserModal';

class UserContainer extends Component {
    // state of modal window and which modal user to use
    state = {
        showModal: false,
        modalUser: null
    }
    // get users once mounted
    componentDidMount() {
        this.props.getUsers();
    }
    // set states for modal window
    toggleModal = (id) => {
        this.setState((this.state.showModal) ? {showModal: false, modalUser: null} : {showModal: true, modalUser: id});
    }
    // if previous or next buttons are clicked in modal window
    prevNextButton = (e, id) => {
        // get user count
        const userLength = this.props.results.length - 1;
        // if previous button is clicked decrement id by 1 
        if (e.target.id === 'modal-prev') { this.setState((id === 0 ) ? {modalUser: userLength} : {modalUser: id-1}); }
        // if next button is clicked increment id by 1
        if (e.target.id === 'modal-next') { this.setState((id === userLength ) ? {modalUser: 0} : {modalUser: id+1}); }
    }
    render() {
        // destructured props
        const { toggleModal, prevNextButton } = this;
        const { showModal, modalUser } = this.state;
        const { results, isLoading } = this.props;
        // map user to new array to generate user component to be rendered
        const user = results.map( (result, index) => <User user={result} key={result.login.salt} id={index} toggleModal={toggleModal} />);
        // return gallery div with each of the 'users' displayed
        return (
            <Fragment>
                <div id="gallery" className="gallery">
                    { (isLoading) ? <p>Loading...</p> : user }
                </div>
                {/* generate modal window */}
                { (showModal) ? <UserModal user={results[modalUser]} id={modalUser} toggleModal={toggleModal} prevNextButton={prevNextButton} /> : null }
            </Fragment>
        )
    }
}

export default UserContainer;