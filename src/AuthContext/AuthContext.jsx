import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { auth } from '../Firebase/Firebase.init';
import axios from 'axios';
import AxiosSecure from './AxiosSecure';

export const AuthUse = createContext(null);

const AuthContext = ({ children }) => {
    const [cataItems, setCataItems] = useState([]);
    const [user, setUser] = useState(null);
    const [addtheme, setAddtheme] = useState(false);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const AxiosSecureUse = AxiosSecure();




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
                AxiosSecure.post("/jwt", { email: user?.email });
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


    // JWT setup

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setUser(null)
            }

            if (user?.email) {
                const currentUser = { email: user.email }
                console.log(currentUser);

                // console.log(currentUser);
                axios.post('http://localhost:5000/jwt', currentUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                        // localStorage.setItem("accessToken", res.data.token)
                    })
                    .catch(err => {
                        console.error("JWT fetch failed", err);
                    });
            }
            else {
                axios.post("http://localhost:5000/logout", {}, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                        // localStorage.removeItem("accessToken")
                    })
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
            icon: "warning",
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
            });2
    };

    const handelGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                // Signed in
                AxiosSecureUse.post("/jwt", { email: user?.email });
                // console.log(user?.email);
                // console.log(provider?.email);
                console.log(provider);
                console.log(auth,user);
                
                
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
                    icon: "success",
                    title: "Successfully Google login"
                });

                
            })
            .catch((error) => {
                // Handle errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // const email = error?.customData?.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);        
                // console.log('1',errorCode,'2', errorMessage,'3', email,'4', credential,'5',error);
                
                // console.error(`Error: ${errorCode}, Message: ${errorMessage}`);
                if (error.errorCode || error.errorMessage) {
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
                console.log("hi error",error);
                console.log(error);
                
            
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

        setLoading, loading
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