export default function handleValidation(fields) {
  let errors = {};
  let formIsValid = true;

  // Name
  if (typeof fields.userName !== "undefined") {
    if (!fields.userName.match(/^[a-zA-Z ]+$/)) {
      formIsValid = false;
      errors["name"] = "Only Letters";
    }
  }
  if (!fields.userName) {
    formIsValid = false;
    errors["name"] = "Name cannot be empty";
  }

  // Email
  if (typeof fields["userEmail"] !== "undefined") {
    let lastAtPos = fields["userEmail"].lastIndexOf("@");
    let lastDotPos = fields["userEmail"].lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        fields["userEmail"].indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        fields["userEmail"].length - lastDotPos > 2
      )
    ) {
      formIsValid = false;
      errors["email"] = "Email is not valid";
    }
  }
  if (!fields.userEmail) {
    formIsValid = false;
    errors["email"] = "Email cannot be empty";
  }

  // Project Decription
  if (!fields["projectDesc"]) {
    formIsValid = false;
    errors["projectDesc"] = "Project Description cannot be empty.";
  }

  // Timeline
  if (!fields["timeline"]) {
    formIsValid = false;
    errors["timeline"] = "Project Timeline cannot be empty.";
  }

  // Budget
  if (!fields["budget"]) {
    formIsValid = false;
    errors["budget"] = "Please select a budget";
  }

  // Services
  if (!fields["serviceType"]) {
    formIsValid = false;
    errors["serviceType"] = "Please select a service type";
  }
  return [formIsValid, errors];
}
