import firebase from "firebase"

const FirebaseConfig = {
	apiKey: "AIzaSyDIlzuBVQSxYokP85CngB0GZe4_MvvWTDQ",
	authDomain: "proyectoprueba-b61d3.firebaseio.com",
	databaseURL: "https://proyectoprueba-b61d3.firebaseio.com",
	projectId: "proyectoprueba-b61d3"
}

firebase.initializeApp(FirebaseConfig)
export default firebase