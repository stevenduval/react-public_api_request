import React, { useState, useEffect } from "react";
import { User, UserModal } from "../components";

export const UserContainer = ({ results, getUsers }) => {
    
    useEffect(() => getUsers(), []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalUser, setModalUser] = useState(undefined);

    const onUserSelected = (id) => {
        setModalUser(id);
        setIsModalOpen(true);
    };

    const onModalClose = () => {
        setModalUser(undefined);
        setIsModalOpen(false);
    };

    const prevNextButton = (e, id) => {
        const userLength = results?.length - 1;
        if (e.target.id === "modal-prev") {
            setModalUser(id === 0 ? userLength : id - 1);
        }
        if (e.target.id === "modal-next") {
            setModalUser(id === userLength ? 0 : id + 1);
        }
    };

    return (
        <>
            <div id="gallery" className="gallery">
                {results?.map((user, i) =>
                    <User user={user} key={i} id={i} onUserSelected={onUserSelected} />
                )}
            </div>
            {isModalOpen &&
                <UserModal
                    user={results[modalUser]}
                    id={modalUser}
                    prevNextButton={prevNextButton}
                    onModalClose={onModalClose}
                />
            }
        </>
    );
};
