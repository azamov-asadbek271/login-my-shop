import { useEffect } from "react";
import { useState } from "react";
import { Form, useActionData,useNavigate } from "react-router-dom";
import FormInput from "../FormInput";
import { useCreateRecipieAdd } from "../hooks/useCreateRecipieAdd";


// action
export const action = async ({request}) => {
 let formData = await request.formData();
 let title = formData.get("title");
 let cookingTime = formData.get("cookingTime");
 let method = formData.get("method");
 let image = formData.get("image");
 return{title,cookingTime,method,image}
}

function Create() {
    const naviget = useNavigate()
    const {data,addNewDoc} = useCreateRecipieAdd()
    const createData = useActionData()
    const [ingredients,setIngredients] = useState([])
    const [ingredient,setIngredient] = useState("")
    const addIngredient = (e) => {
      e.preventDefault()
      if(!ingredients.includes(ingredient)) {
       setIngredients((prev) => {
        return [...prev,ingredient]
       })
      }

      setIngredient("")
    }
    useEffect(() => {
       if(createData && !data) {
         const newCreateData = {
           ...createData,
           ingredients,
         };
         addNewDoc(newCreateData)
       }
       if(data) {
        naviget("/")
       }
    },[createData,data])

  return (
    <div className=" grid place-items-center">
      <div className="max-w-96 w-full"> 
        <h1 className="text-3xl text-center font-bold">Create New Recipie</h1>
        <Form method="post">
          <FormInput type="text" label="Title:" name="title" />
          <div className="flex justify-center flex-col">
            <div className="flex items-center w-full gap-5">
              <label className="form-control w-full mb-3">
                <div className="label">
                  <span className="label-text">Ingredient</span>
                </div>
                <input
                  onChange={(e) => setIngredient(e.target.value)}
                  type="text"
                  name="ingredient"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  value={ingredient}
                />
              </label>
              <button
                onClick={addIngredient}
                className="btn btn-secondary flex"
              >
                Add
              </button>
            </div>
            <p className="-mt-2 mb-3">
              Ingredients: {ingredients.map((ing) => {
                return (
                    <span key={ing}> {ing},</span>
                )
              })}
            </p>
          </div>
          <FormInput type="number" label="Cooking Time:" name="cookingTime" />
          <FormInput type="text" label="Method:" name="method" />
          <FormInput type="url" label="Image:" name="image" />
          <div>
            <button
              type="submit"
              className="btn btn-secondary w-full mb-3 text-lg"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Create