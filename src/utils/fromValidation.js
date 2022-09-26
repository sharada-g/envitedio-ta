import * as Yup from "yup";

export const createFromValidation = Yup.object().shape({
  name: Yup.string().required("Event Name is required"),
  by: Yup.string().required("Hosted By is required"),
  startDate: Yup.date().required("Start Date is required"),
  endDate: Yup.date().required("End Date is required"),
  streetName: Yup.string().required("Street Name is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  link: Yup.string().url("Link is not valid").required("Link is required"),
});
