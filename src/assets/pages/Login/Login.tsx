import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css"; 

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const LoginForm: React.FC = () => {
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <Field type="email" name="email" className="input-field" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="input-field" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-button">
              Log In
            </button>
          </Form>
        )}
      </Formik>

      <div className="links">
        <a href="#" className="link">Forgot your password?</a>
        <a href="/register" className="link">Create an account</a>
      </div>
    </div>
  );
};

export default LoginForm;
