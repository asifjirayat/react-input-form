import { useRef, useState } from "react";
import Input from "./Input.jsx";
import Dialog from "./Dialog.jsx";

export default function Form() {
  const [formValidity, setFormValidity] = useState({
    name: true,
    email: true,
    password: true,
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dialogRef = useRef();

  let formIsValid =
    formValidity.name && formValidity.email && formValidity.password;

  function handleSubmit(event) {
    event.preventDefault();

    const enteredName = nameRef.current.value.trim();
    const enteredEmail = emailRef.current.value.trim();
    const enteredPassword = passwordRef.current.value;

    const nameIsValid = enteredName !== "";
    const emailIsValid = enteredEmail.includes("@") && enteredEmail !== "";
    const passwordIsValid = enteredPassword.length >= 6;

    setFormValidity((prevValue) => {
      return {
        ...prevValue,
        name: nameIsValid,
        email: emailIsValid,
        password: passwordIsValid,
      };
    });

    formIsValid = nameIsValid && emailIsValid && passwordIsValid;

    if (!formIsValid) {
      return;
    }

    dialogRef.current.showModal();
  }
  console.log(formValidity);
  return (
    <>
      <Dialog ref={dialogRef}>
        <h2 className="text-xl font-semibold">Form submitted successfully.</h2>
        <p className="text-gray-700 mt-2">All fields passed validation.</p>
      </Dialog>
      <form
        onSubmit={handleSubmit}
        action=""
        className="max-w-md mx-auto m-4 p-6 bg-gray-100 rounded shadow"
      >
        {!formIsValid && (
          <p className="rounded background-color bg-red-600 text-white py-1 px-2 text-sm">
            Form has errors.
          </p>
        )}
        <Input
          ref={nameRef}
          id="name"
          label="Name"
          invalid={!formValidity.name}
          placeholder="John Doe"
        />
        <Input
          ref={emailRef}
          id="email"
          label="Email"
          type="email"
          invalid={!formValidity.email}
          placeholder="johndoe@abc.com"
        />
        <Input
          ref={passwordRef}
          id="password"
          label="Password"
          type="password"
          invalid={!formValidity.password}
          placeholder="••••••"
        />

        <div className="mt-4 text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
