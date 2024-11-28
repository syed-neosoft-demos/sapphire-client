import PanelLayout from "@/components/layout/PanelLayout";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  createClaim,
  getCategory,
  getLocation,
  getSubCategory,
  uploadBill,
} from "@/store/claims/claimApi";
import { jwtDecode } from "jwt-decode";
import { claimSchema } from "@/validations/panel-pages";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const ClaimForm = () => {
  const { claim } = useSelector((store) => store);
  const dispatch = useDispatch();

  const [Location, setLocation] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState([]);
  const [url, setUrl] = useState(null);

  const getLocationList = async () => {
    const res = await dispatch(getLocation());
    setLocation(res?.payload?.data?.location);
  };
  const getCategoryList = async () => {
    const res = await dispatch(getCategory());
    setCategory(res?.payload?.data?.category);
  };
  const getSubCategoryList = async (id) => {
    try {
      formik.setFieldValue("expense_sub_category_id", []);
      const res = await dispatch(getSubCategory(id));
      setSubCategory(res?.payload?.data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const formdata = new FormData();
      formdata.append("file", file);

      const res = await dispatch(uploadBill(formdata));
      if (res.payload?.data?.result?.url) {
        toast.success("file successfully uploaded");
        setUrl(res.payload?.data?.result?.url);
      } else {
        toast.error("file not uploaded");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      claim_amount: "",
      expense_date: "",
      expense_location_id: "",
      bill_url: "",
      remark: "",
      expense_sub_category_id: [],
    },
    validationSchema: claimSchema,
    onSubmit: async (values) => {
      if (url === null) {
        toast.error("Please upload bill");
        return;
      }
      const decoded = await jwtDecode(sessionStorage.getItem("access_token"));
      console.log("decoded :>> ", decoded);
      const res = await dispatch(
        createClaim({ ...values, bill_url: url, employee_id: decoded?.id })
      );
      if (res?.payload?.data) {
        toast.success(res?.payload?.message);
        formik.resetForm();
      } else {
        toast.error(res?.payload?.message);
      }
    },
  });

  useEffect(() => {
    getLocationList();
    getCategoryList();
  }, []);

  return (
    <PanelLayout>
      <div className="">
        <h1 className="text-3xl font-bold secondary-radiant">Claim</h1>
        <p className="text-lg secondary-radiant">Fill claim your form</p>
        <div className="rounded mt-5 mb-5 p-5 flex justify-center bg-gray-50">
          <div className="flex gap-5 flex-wrap justify-between">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form
                className="space-y-6 w-[680px]"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label className="block mb-3">
                    <span className="block text-sm font-medium secondary-radiant">
                      Claim Amount
                    </span>
                    <input
                      type="text"
                      placeholder="Enter claim amount"
                      className="form-input"
                      name="claim_amount"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.claim_amount}
                    />
                    {formik.touched.claim_amount &&
                      formik.errors.claim_amount && (
                        <span className="error-message">
                          {formik.errors.claim_amount}
                        </span>
                      )}
                  </label>
                </div>

                <div>
                  <label className="block mb-3">
                    <span className="block text-sm font-medium secondary-radiant">
                      Expense Date
                    </span>
                    <input
                      type="date"
                      placeholder="Enter code"
                      className="form-input"
                      min={new Date().toISOString().split("T")[0]}
                      name="expense_date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.expense_date}
                    />
                    {formik.touched.expense_date &&
                      formik.errors.expense_date && (
                        <span className="error-message">
                          {formik.errors.expense_date}
                        </span>
                      )}
                  </label>
                </div>

                <div className="flex flex-col space-y-1.5 flex-1">
                  <Label htmlFor="framework" className="form-lbl">
                    Location
                  </Label>
                  <Select
                    name="expense_location_id"
                    onValueChange={(value) => {
                      formik.setFieldValue("expense_location_id", value);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.expense_location_id}
                  >
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {Location?.rows?.map((el) => (
                        <SelectItem value={el?.id} key={el?.id}>
                          {el?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formik.touched.expense_location_id &&
                    formik.errors.expense_location_id && (
                      <span className="error-message">
                        {formik.errors.expense_location_id}
                      </span>
                    )}
                </div>

                <div className="flex gap-2 justify-between mt-1 mb-1">
                  <div className="flex flex-col space-y-1.5 flex-1">
                    <Label htmlFor="framework" className="form-lbl">
                      Category
                    </Label>
                    <Select
                      name="category_id"
                      onValueChange={(value) => {
                        // formik.setFieldValue("category_id", value);
                        getSubCategoryList(value);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values.category_id}
                    >
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {category?.rows?.map((el) => (
                          <SelectItem value={el?.id} key={el?.id}>
                            {el?.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col space-y-1.5 flex-1">
                    <Label htmlFor="framework" className="form-lbl">
                      Sub Category
                    </Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue
                          placeholder={
                            formik.values.expense_sub_category_id.length > 0
                              ? formik.values.expense_sub_category_id
                                  .map((id) => {
                                    const selectedItem = subCategory.rows.find(
                                      (el) => el.id === id
                                    );
                                    return selectedItem?.name || "";
                                  })
                                  .join(", ")
                              : "Select"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {subCategory?.rows?.map((el) => {
                          const isChecked =
                            formik.values.expense_sub_category_id.includes(
                              el.id
                            );
                          return (
                            <div
                              key={el.id}
                              className="flex items-center space-x-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                const currentValues =
                                  formik.values.expense_sub_category_id;
                                let updatedValues;
                                if (isChecked) {
                                  updatedValues = currentValues.filter(
                                    (id) => id !== el.id
                                  );
                                } else {
                                  updatedValues = [...currentValues, el.id];
                                }
                                formik.setFieldValue(
                                  "expense_sub_category_id",
                                  updatedValues
                                );
                              }}
                            >
                              <Checkbox checked={isChecked} />
                              <span>{el.name}</span>
                            </div>
                          );
                        })}
                      </SelectContent>
                    </Select>
                    {formik.touched.expense_sub_category_id &&
                      formik.errors.expense_sub_category_id && (
                        <span className="error-message">
                          {formik.errors.expense_sub_category_id}
                        </span>
                      )}
                  </div>
                </div>

                <div>
                  <label className="block mb-3">
                    <span className="block text-sm font-medium secondary-radiant">
                      Bill
                    </span>
                    <input
                      type="file"
                      placeholder="Enter code"
                      className="form-input"
                      name="bill_url"
                      onChange={handleFileUpload}
                      onBlur={formik.handleBlur}
                      value={formik.values.bill_url}
                    />
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Remark
                  </label>
                  <textarea
                    rows="4"
                    className="form-input !h-24"
                    placeholder="Provide a brief description of your claim"
                    name="remark"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.remark}
                  ></textarea>
                  {formik.touched.remark && formik.errors.remark && (
                    <span className="error-message">
                      {formik.errors.remark}
                    </span>
                  )}
                </div>

                <label className="block mb-3 font-bold">
                  <input
                    type="submit"
                    value={claim?.loading ? "Loading..." : "Submit"}
                    className="btn-primary"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PanelLayout>
  );
};

export default ClaimForm;
