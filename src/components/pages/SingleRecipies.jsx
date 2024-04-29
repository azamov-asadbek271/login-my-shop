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
    
  return (
    <div>
      {data && (
        <div>
          {recipie && (
            <div>
              <img
                src={recipie.image}
                alt=""
                className="w-full h-96 rounded object-cover mb-5"
              />
              <h1 className="mb-5"> Nomi: {recipie.title}</h1>
              <p className="flex gap-5 mb-5">
                {" "}
                Mahsulotlar:
                {recipie.ingredients.map((item) => {
                  return <span key={item}>{item}</span>;
                })}
              </p>
              <p className="mb-5"> Vaqt: {recipie.cookingTime}</p>
              <p>{recipie.method}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SingleRecipies