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

const Signup = () => {
  return (
    <AuthLayout>
      <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
        <h1 className="mb-4 font-bold text-gray-700">Create an account</h1>
        <form>
          <label className="block mb-3">
            <span className="form-lbl">Full Name</span>
            <input
              type="text"
              placeholder="Enter name"
              className="form-input"
            />
          </label>
          <label className="block mb-3">
            <span className="form-lbl">Email</span>
            <input
              type="text"
              placeholder="Enter mail"
              className="form-input"
            />
          </label>
          <div className="flex gap-2 justify-between mt-1 mb-1">
            <div className="flex flex-col space-y-1.5 flex-1">
              <Label htmlFor="framework" className="form-lbl">
                Department
              </Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>{" "}
            <div className="flex flex-col space-y-1.5 flex-1">
              <Label htmlFor="framework" className="form-lbl">
                Designation
              </Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
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

          {/* <div className="flex items-center mb-3 ">
            <input type="checkbox" className="h-4 w-4 mr-1" />
            <span className="block text-sm font-medium text-gray-500 ">
              Accept Terms & Conditions.
              <span className="text-blue-500 cursor-pointer"> Read Policy</span>
            </span>
          </div> */}
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
