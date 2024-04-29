import { useSignup } from "../hooks/useSignup";
import { ImGoogle } from "react-icons/im";
import { Link, Form, useActionData } from "react-router-dom";

import FormInput from "../FormInput";
import useLogin from "../hooks/useLOgin";
import { useEffect } from "react";

export const action = async ({request}) => {
  let formData = await request.formData()

  let  email = formData.get("Email")
  let password = formData.get("Password");
  return {email,password}
}

function Signin() {
  
  let userSignin = useActionData();
  const { useLoginOut } = useLogin();
  useEffect(() => {
    if (userSignin) {
      useLoginOut(userSignin.email, userSignin.password);
      
    }
  }, [userSignin]);
  const { singupWithGoggle } = useSignup();

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96 w-full">
        <Form method="post">
          <FormInput type="email" label=" Email:" name="Email" />
          <FormInput type="password" label=" Password:" name="Password" />
          <div>
            <button
              type="submit"
              className="btn btn-secondary w-full mb-3 text-lg"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={singupWithGoggle}
              className="btn btn-secondary w-full mb-5"
            >
              <ImGoogle className="text-2xl" />
              <span className="text-2xl">Google</span>
            </button>
            <p className="text-center">
              If you don't have account
              <Link className="link ml-1 text-cyan-600" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signin;
