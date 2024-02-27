import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { defaultLoginValue, loginSchema } from "../utils/formSchema";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { useState } from "react";

const Login = () => {
  const [togglePassword, setPassword] = useState(false);

  const handleShowpassword = (e) => {
    console.log(e.target.checked);
    setPassword(!togglePassword);
  };
  return (
    <main className="w-full bg-white my-6">
      <section className="mx-4 md:mx-auto flex justify-center items-center">
        <div className="w-2/3 md:w-2/5 bg-zinc-100 rounded-md overflow-hidden">
          <h1 className="uppercase text-center text-4xl font-semibold py-4 bg-[#212121] text-white ">
            Login
          </h1>
          <div className="py-6 px-4">
            <Formik
              initialValues={defaultLoginValue}
              validationSchema={loginSchema}
              onSubmit={(values, action) => {
                console.log(values);
                action.resetForm();
                console.log("Form submitted");
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                handleBlur,
              }) => {
                console.log(values);
                console.log("Form changed");
                return (
                  <Form onSubmit={handleSubmit}>
                    <Input
                      placeholder="Username"
                      name="username"
                      value={values.username}
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.username && touched.username ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.username}
                      </div>
                    ) : null}
                    <Input
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.email}
                      </div>
                    ) : null}
                    <Input
                      placeholder="Password"
                      type={!togglePassword ? "password" : "text"}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.password && touched.password ? (
                      <div className="text-red-500 font-semibold px-2">
                        {errors.password}
                      </div>
                    ) : null}
                    <div className="flex gap-2 p-1">
                      <input
                        className="cursor-pointer"
                        type="checkbox"
                        id="passwordToggle"
                        onChange={handleShowpassword}
                      />
                      <label
                        htmlFor="passwordToggle"
                        className="cursor-pointer"
                      >
                        Show password
                      </label>
                    </div>

                    <Button
                      onClick={handleSubmit}
                      title="Login"
                      type="submit"
                    />
                  </Form>
                );
              }}
            </Formik>
            <Link
              to="/signup"
              className="underline underline-offset-2 text-blue-600 my-2 text-center"
            >
              Not registered yet ?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
