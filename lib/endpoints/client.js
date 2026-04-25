import { db } from "../firebase";
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";

// export const getBlogById = async (id) => {
//   const ref = doc(db, "Blogs", id);
//   const snap = await getDoc(ref);
//   if (!snap.exists()) return null;
//   const blog = {
//     id: snap.id,
//     ...snap.data(),
//     datePublished: snap.data().datePublished
//       ? snap.data().datePublished.toDate().toLocaleDateString("en-GB", {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         })
//       : null,
//   };

//   return blog;
// };

// export const getBlogs = async () => {
//   const blogsRef = collection(db, "Blogs");

//   const q = query(blogsRef, orderBy("datePublished", "desc"));

//   const snapshot = await getDocs(q);

//   const blogs = snapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   return blogs;
// };
