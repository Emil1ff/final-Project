import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./register.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Confirm password is required"),
});

const RegisterForm: React.FC = () => {
  const initialValues = { email: "", password: "", confirmPassword: "" };

  const handleSubmit = (values: { email: string; password: string; confirmPassword: string }) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Create an Account</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="register-form">
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

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword"  className="input-field" />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-button">
              Register
            </button>
          </Form>
        )}
      </Formik>

      <div className="links">
        <a href="/login" className="link">Already have an account? Log in</a>
      </div>
    </div>
  );
};

export default RegisterForm;
