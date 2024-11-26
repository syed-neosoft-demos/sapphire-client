import { useNavigate } from "react-router";
import AuthLayout from "../../components/layout/AuthLayout";

const Forget = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
        <h1 className="mb-4 font-bold secondary-radiant">
          Enter your email-id to receive password reset link
        </h1>
        <form>
          <label className="block mb-3">
            <span className="block text-sm font-medium secondary-radiant">
              Email
            </span>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-input"
            />
          </label>
          <hr className="mb-3" />
          <label className="block mb-3">
            <input
              type="button"
              value="Get rest link"
              className="btn-primary"
              onClick={() => navigate("/auth/reset")}
            />
          </label>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Forget;
