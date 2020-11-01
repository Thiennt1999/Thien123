import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import * as EmailValidator from 'email-validator';
EmailValidator.validate("test@email.com");

const ValidatedRegisterForm = () => (
  <Formik
   initialValues={{ name:"",email: "", password: "", confirmpassword:"",telephone:"",address:""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Register in", values);
        setSubmitting(true);
      }, 5000);
    }}
    validationSchema={Yup.object().shape({
    email: Yup.string()
        .email()
        .required("Không được để trống"),
    password: Yup.string()
        .required("Chưa nhập mật khẩu.")
        .min(8, "Mật khẩu quá ngắn - ít nhất phải 8 ký tự.")
        .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa nhất một số."),
    confirmpassword:Yup.string()
        .required("Nhập lại mật khẩu.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name && "error"}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <label htmlFor="email">ConfirmPassword</label>
          <input
            name="confirmpassword"
            type="password"
            placeholder="Enter your confirmpassword"
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmpassword && touched.confirmpassword && "error"}
          />
          {errors.confirmpassword && touched.confirmpassword && (
            <div className="input-feedback">{errors.confirmpassword}</div>
          )}
          <label htmlFor="email">Telephone</label>
          <input
            name="telephone"
            type="text"
            placeholder="Enter your telephone"
            value={values.telephone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.telephone && touched.telephone && "error"}
          />
          {errors.telephone && touched.telephone && (
            <div className="input-feedback">{errors.telephone}</div>
          )}
          <label htmlFor="email">Address</label>
          <input
            name="address"
            type="text"
            placeholder="Enter your address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.address && touched.address && "error"}
          />
          {errors.address && touched.address && (
            <div className="input-feedback">{errors.address}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Registers
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedRegisterForm;
