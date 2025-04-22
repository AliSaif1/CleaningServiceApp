const handleGoogleSignUp = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        // Sign in with Google
        const result = await firebase.auth().signInWithPopup(provider);
        
        // Get the ID token
        const user = result.user;
        const idToken = await user.getIdToken();

        // Send the ID token to your backend
        const response = await fetch('/api/auth/google-signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idToken }),
        });

        const data = await response.json();
        console.log(data); // Handle the response from the backend

    } catch (error) {
        console.error('Google Sign-Up error:', error);
    }
};
