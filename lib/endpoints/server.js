import { db } from "../firebaseAdmin";

export async function getTeamMembers() {
  try {
    const snapshot = await db.collection("TeamMembers").get();
    const allMembers = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return allMembers;
  } catch (error) {
    console.error("Error fetching team members!", error);
    throw error;
  }
}

export async function getAgendaEvents() {
  try {
    const snapshot = await db.collection("Agenda").get();
    const events = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return events;
  } catch (error) {
    console.error("Error fetching agenda events!", error);
    throw error;
  }
}

export async function getBlogs() {
  const snapshot = await db
    .collection("Blogs")
    .orderBy("datePublished", "desc")
    .get();

  const blogs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return blogs;
}

export async function getBlogById(id) {
  try {
    const snapshot = await db.collection("Blogs").doc(id).get();

    if (!snapshot.exists) return null;

    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } catch (error) {
    console.error("Error fetching blog!", error);
    throw error;
  }
}
