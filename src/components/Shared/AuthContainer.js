import React from 'react'

const AuthContainer = ({children}) => {
    return (
            <div className="bg-container" data-testid="Login">
                <div className="container">
                    <div className="login__content">
                        <div className="content__part">
                            {children[0]}
                        </div>
                        <div className="content__part">
                            {children[1]}
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default AuthContainer;