import React from "react";
import MUITextField from "./TextField/MUITextField";
import { useFormik } from "formik";
import MUIButton from "./Button/MUIButton";
import "../components/RegisterForm.css";
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas";

const RegisterForm = () => {
  const submit = (values, action) => {
    console.log(values);
    console.log(action);
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: false,
    },
    validationSchema: RegisterFormSchemas,
    onSubmit: submit,
  });
  return (
    <form className='register-form' onSubmit={handleSubmit}>
      <h1>Register Form</h1>
      <MUITextField
        id='email'
        type='email'
        label='Email'
        variant='filled'
        placeholder='Enter a email'
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}

      <MUITextField
        id='password'
        type='password'
        label='Password'
        variant='filled'
        placeholder='Enter password'
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}

      <MUITextField
        id='confirmPassword'
        type='password'
        label='Confirm Password'
        variant='filled'
        placeholder='Confirm password'
        value={values.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

      <MUITextField
        id='age'
        type='number'
        label='Age'
        variant='filled'
        placeholder='Enter your age'
        value={values.age}
        onChange={handleChange}
      />
      {errors.age && <p>{errors.age}</p>}

      <div className='checkbox-field'>
        <MUITextField
          id='term'
          type='checkbox'
          variant='filled'
          value={values.term}
          onChange={handleChange}
        />
        {errors.term && <p>{errors.term}</p>}
        <label htmlFor='term'>I agree to the terms and conditions </label>
      </div>
      <MUIButton type='submit' className='submit-button' text='Register' />
    </form>
  );
};

export default RegisterForm;
