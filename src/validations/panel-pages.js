import * as Yup from "yup";

export const claimSchema = Yup.object().shape({
  claim_amount: Yup.number().required("claim_amount is required"),
  expense_date: Yup.string().required("expense_date is required"),
  expense_location_id: Yup.number().required("expense_location_id is required"),
  bill_url: Yup.string().optional(),
  remark: Yup.string().required("remark is required"),
  expense_sub_category_id: Yup.array()
    .of(Yup.string().required("Item is required"))
    .min(1, "You must select at least one item")
    .required("expense_sub_category_id is required"),
});
