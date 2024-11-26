import { Link } from "react-router";
import AuthLayout from "../../components/layout/AuthLayout";

const Signup = () => {
  return (
    <AuthLayout>
      <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
        <h1 className="mb-4 font-bold text-gray-700">Create an account</h1>
        <form>
          <label className="block mb-3">
            <span className="form-lbl">Name</span>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="form-input"
            />
          </label>
          <label className="block mb-3">
            <span className="form-lbl">Email</span>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-input"
            />
          </label>
          <label className="block mb-3">
            <span className="form-lbl">Username</span>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-input"
            />
          </label>
          <label className="block mb-4">
            <span className="form-lbl">Password</span>
            <input
              type="text"
              className="form-input"
              placeholder="Enter Password"
            />
          </label>
          <div className="flex items-center mb-3 ">
            <input type="checkbox" className="h-4 w-4 mr-1" />
            <span className="block text-sm font-medium text-gray-500 ">
              Accept Terms & Conditions.
              <span className="text-blue-500 cursor-pointer"> Read Policy</span>
            </span>
          </div>
          <hr className="mb-3" />
          <label className="block mb-3 font-bold">
            <input
              type="button"
              value="Create account"
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
