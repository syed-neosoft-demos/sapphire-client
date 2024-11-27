import { Link, useNavigate } from "react-router";
import AuthLayout from "../../components/layout/AuthLayout";
import { loginSchema } from "@/validations/auth-pages";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { userLogin } from "@/store/user/userApi";

const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      code: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const res = await dispatch(userLogin(values));
      if (res?.payload?.data) {
        sessionStorage.setItem("is_login", "true");
        sessionStorage.setItem("access_token", res?.payload?.data?.accessToken);
        navigate("/panel/home");
      } else {
        toast.error(res?.payload?.message);
      }
    },
  });
  console.log("formik :>> ", formik);
  console.log("user :>> ", user);
  return (
    <AuthLayout>
      <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
        <h1 className="mb-4 font-bold secondary-radiant">
          Login to your account
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <label className="block mb-3">
            <span className="block text-sm font-medium secondary-radiant">
              Employee Code
            </span>
            <input
              type="text"
              name="code"
              placeholder="Enter code"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.code}
            />
            {formik.touched.code && formik.errors.code && (
              <span className="error-message">{formik.errors.code}</span>
            )}
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium secondary-radiant">
              Password
            </span>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="error-message">{formik.errors.password}</span>
            )}
          </label>
          <label className="block mb-3">
            <Link
              to="/auth/forget"
              className="block text-sm font-medium text-blue-500 text-right cursor-pointer"
            >
              Forgot Password ?
            </Link>
          </label>
          <hr className="mb-3" />
          <label className="block mb-3">
            <input
              type="submit"
              value={user?.loading === true ? "Loading..." : "Log In"}
              className="btn-primary"
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-gray-500">
              New to ABC Cafe?{" "}
              <Link to="/auth/signup" className="text-blue-500 cursor-pointer">
                Create Account
              </Link>
            </span>
          </label>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
