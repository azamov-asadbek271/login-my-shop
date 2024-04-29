import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";


export const loader = async ({params}) => {
const docRef = doc(db, "RecipiesAdd",params.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
 return null
}


function SingleRecipies() {
    const data = useLoaderData()
    console.log(data)
    
  return (
    <div>
      {data && (
        <div>
          {data && (
            <div>
              <img
                src={data.image}
                alt=""
                className="w-full h-96 rounded object-cover mb-5"
              />
              <h1 className="mb-5"> Nomi: {data.title}</h1>
              <p className="flex gap-5 mb-5">
                {" "}
                Mahsulotlar:
                {data.ingredients.map((item) => {
                  return <span key={item}>{item}</span>;
                })}
              </p>
              <p className="mb-5"> Vaqt: {data.cookingTime}</p>
              <p>{data.method}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleRecipies