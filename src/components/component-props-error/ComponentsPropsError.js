import React from 'react';

const ComponentPropsError = ({ header, message }) => {
    if(!header || !message) {
        return <div></div>;
    }

    return (
        <div className="search-bar-error">
                <div className="ui message">
                <div className="header">
                    {header}
                </div>
                <p>{message}</p>
                </div>
        </div>
    );
};

export default ComponentPropsError;