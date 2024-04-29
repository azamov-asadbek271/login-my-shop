import { useSignup } from "../hooks/useSignup";
import { ImGoogle } from "react-icons/im";
import { Link, Form, useActionData } from "react-router-dom";
import FormInput from "../FormInput";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let name = formData.get("Name");
  let email = formData.get("Email");
  let password = formData.get("Password");
  let photo = formData.get("Photo");

  return { name, email, password, photo };
};

function Signup() {
  const { singupWithGoggle, userPassword } = useSignup();
  let porject = useActionData();

  useEffect(() => {
    if (porject) {
      userPassword(
        porject.email,
        porject.password,
        porject.name,
        porject.photo
      );
    }
  }, [porject]);
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-96 w-full">
        <Form method="post">
          <FormInput type="text" label=" Name:" name="Name" />
          <FormInput type="url" label=" URl:" name="Photo" />
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
              Are you already registered ?
              <Link className="link text-cyan-600" to="/signin">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
