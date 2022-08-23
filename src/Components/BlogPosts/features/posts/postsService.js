import axios from "axios";
import { firbase } from "../../firebase";
import {
	collection,
	getDocs,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
} from "firebase/firestore";
const postCollectionRef = collection(firbase, "posts");
const postsService = {
	get: async () => {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/posts"
		);
		return response.data;
	},
	getFormFirabase: async () => {
		const response = await getDocs(postCollectionRef);
		console.log(response);
		return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	},
	post: async (post) => {
		const response = await axios.post(
			"https://jsonplaceholder.typicode.com/posts",
			post
		);
		return response.data;
	},
	postTofireBase: async (post) => {
		const response = await addDoc(postCollectionRef, post);
		// return response.data;
		return { ...post, id: response.id };
	},
	delete: async (id) => {
		const response = await axios.delete(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		if (response.status === 200) {
			// status OK
			return id;
		}
	},
  deletefirebase: async (id) => {
    console.log("id",id);
		const postRef = doc(firbase, "posts", id);
		const response = await deleteDoc(postRef);
    return id;
	},
	update: async (post) => {
		console.log("post", post);
		const response = await axios.put(
			`https://jsonplaceholder.typicode.com/posts/${post.id}`
		);
		console.log("data", response);
		return post;
	},
	updateFirebase: async (post) => {
		console.log("post", post);
		const postRef = doc(firbase, "posts", post.id);
		const response = await updateDoc(postRef, {
			body: post.body,
			title: post.title,
		});
		// sole.log("data", response);
		return post;
	},
};

export default postsService;
