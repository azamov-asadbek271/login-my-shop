import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
function useCreateRecipieAdd() {
    const [data,setData] = useState(null)
    const addNewDoc = async (recipie) => {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "RecipiesAdd"), recipie);
      setData(docRef.id);
    };
  return {data,addNewDoc};
}

export { useCreateRecipieAdd };
