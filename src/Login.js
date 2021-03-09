import React from 'react'

function Login(props) {
    const {email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAcc,
        setHasAcc,
        emailError,
        passError} = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passError}</p>

                <div className="btnContainer">
                    {hasAcc ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>Don't have an account ? <span onClick={() => setHasAcc(!hasAcc)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account ? <span onClick={() => setHasAcc(!hasAcc)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
