import AuthLayout from "../../components/layout/AuthLayout";

const Reset = () => {
  return (
    <AuthLayout>
      <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
        <h1 className="mb-4 font-bold secondary-radiant">
          Reset your password
        </h1>
        <form>
          <label className="block mb-4">
            <span className="block text-sm font-medium secondary-radiant">
              Password
            </span>
            <input
              type="text"
              className="form-input"
              placeholder="Enter Password"
            />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium secondary-radiant">
              Confirm password
            </span>
            <input
              type="text"
              className="form-input"
              placeholder="Enter confirm password"
            />
          </label>
          <hr className="mb-3" />
          <label className="block mb-3">
            <input type="button" value="Reset" className="btn-primary" />
          </label>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Reset;
