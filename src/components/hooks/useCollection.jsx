import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";


function useCollection() {
    const [data,setData] = useState(null)
    useEffect(() =>{
     const newDoc = async () => {
            const querySnapshot = await getDocs(collection(db, "RecipiesAdd"));
            const allData = []
            querySnapshot.forEach((doc) => {
              allData.push({
                id: doc.id,
                ...doc.data()
              })
            });
            setData(allData)
            
     }
     newDoc()
    },[])
  return {data  };
}

export {useCollection};
