import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { auth } from '../Firebase/Firebase.init';

export const AuthUse = createContext(null);

const AuthContext = ({ children }) => {
    const [cataItems, setCataItems] = useState([]);
    const [user, setUser] = useState(null);
    const [addtheme, setAddtheme] = useState(false);
    const [loading, setLoading] = useState(false);

    const provider = new GoogleAuthProvider();



    const authSignUp = (email, password, name, photoUrlAdd) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in
                const user = result.user;
                console.log(user);
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoUrlAdd
                })

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed Up successfully"
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode || errorMessage) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Something Wrong"
                    });
                }
            })
    }

    const authSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in
                const user = result.user;
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed In successfully"
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode || errorMessage) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "E-mail or password are not match !"
                    });
                }
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
        });
        return () => {
            unsubscribe()
        }
    }, [])


    const handelSingOut = () => {
        // Sign-out successful.
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Signed Out successfully"
        });

        return signOut(auth);
    }

    const forgetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "info",
                    title: "Password reset email sent successfully"
                });
            })
            .catch((error) => {
                // Handle errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.error(`Error: ${errorCode}, Message: ${errorMessage}`);
                if (errorCode || errorMessage) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top",
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Something is wrong"
                    });
                }
            });
    };

    const handelGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                // Password reset email sent!
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "info",
                    title: "Successfully Google login"
                });
            })
            .catch((error) => {
                // Handle errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.error(`Error: ${errorCode}, Message: ${errorMessage}`);
                if (errorCode || errorMessage) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top",
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Something Google sign in problem!"
                    });
                }
            });
    }




    const routing = {
        authSignUp,
        authSignIn,

        cataItems, setCataItems,

        user,

        handelSingOut,

        forgetPassword,

        addtheme, setAddtheme,

        handelGoogleSingIn,

        setLoading,loading
    }


    return (
        <div>
            <AuthUse.Provider value={routing}>
                {children}
            </AuthUse.Provider>
        </div>
    );
};

export default AuthContext;