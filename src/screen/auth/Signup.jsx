import { Link } from "react-router";
import AuthLayout from "../../components/layout/AuthLayout";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { singupSchema } from "@/validations/auth-pages";
import {
  getDepartment,
  getDesignation,
  userSignup,
} from "@/store/user/userApi";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Signup = () => {
  const [department, setDepartment] = useState();
  const [designation, setDesignation] = useState();
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      code: "",
      department_id: "",
      designation_id: "",
      password: "",
    },
    validationSchema: singupSchema,
    onSubmit: async (values) => {
      const res = await dispatch(userSignup(values));
      if (res?.payload?.data) {
        toast.success(res?.payload?.message);
        formik.resetForm();
      } else {
        toast.error(res?.payload?.message);
      }
    },
  });

  const getDepartmentList = async () => {
    const res = await dispatch(getDepartment());
    setDepartment(res?.payload?.data?.department);
  };
  const getDesignationList = async () => {
    const res = await dispatch(getDesignation());
    setDesignation(res?.payload?.data?.designation);
  };

  useEffect(() => {
    getDepartmentList();
    getDesignationList();
  }, []);

  return (
    <AuthLayout>
      <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
        <h1 className="mb-4 font-bold text-gray-700">Create an account</h1>
        <form onSubmit={formik.handleSubmit}>
          <label className="block mb-3">
            <span className="form-lbl">Email</span>
            <input
              type="text"
              placeholder="Enter mail"
              className="form-input"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="error-message">{formik.errors.email}</span>
            )}
          </label>
          <label className="block mb-3">
            <span className="form-lbl">Full Name</span>
            <input
              type="text"
              placeholder="Enter name"
              className="form-input"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <span className="error-message">{formik.errors.name}</span>
            )}
          </label>
          <label className="block mb-3">
            <span className="form-lbl">Employee Code</span>
            <input
              type="text"
              placeholder="Enter employee code"
              className="form-input"
              name="code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.code}
            />
            {formik.touched.code && formik.errors.code && (
              <span className="error-message">{formik.errors.code}</span>
            )}
          </label>

          <div className="flex gap-2 justify-between mt-1 mb-1">
            <div className="flex flex-col space-y-1.5 flex-1">
              <Label htmlFor="framework" className="form-lbl">
                Department
              </Label>
              <Select
                name="department_id"
                onValueChange={(value) => {
                  formik.setFieldValue("department_id", value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.department_id}
              >
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {department?.rows?.map((el) => (
                    <SelectItem value={el?.id} key={el?.id}>
                      {el?.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formik.touched.department_id && formik.errors.department_id && (
                <span className="error-message">
                  {formik.errors.department_id}
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-1.5 flex-1">
              <Label htmlFor="framework" className="form-lbl">
                Designation
              </Label>
              <Select
                name="designation_id"
                onValueChange={(value) => {
                  formik.setFieldValue("designation_id", value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.designation_id}
              >
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {designation?.rows?.map((el) => {
                    return (
                      <SelectItem value={el?.id} key={el?.id}>
                        {el?.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              {formik.touched.designation_id &&
                formik.errors.designation_id && (
                  <span className="error-message">
                    {formik.errors.designation_id}
                  </span>
                )}
            </div>
          </div>
          <label className="block mb-4">
            <span className="form-lbl">Password</span>
            <input
              type="password"
              className="form-input"
              placeholder="Enter Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="error-message">{formik.errors.password}</span>
            )}
          </label>

          <hr className="mb-3" />
          <label className="block mb-3 font-bold">
            <input
              type="submit"
              value={user?.loading === true ? "Loading..." : "Create account"}
              className="btn-primary"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-500">
              <Link to="/login" className="text-blue-500 cursor-pointer">
                Login
              </Link>{" "}
              if you already have an account
            </span>
          </label>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
