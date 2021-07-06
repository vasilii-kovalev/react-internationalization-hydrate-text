import { Dictionary } from "i18n/types";

const errors: Dictionary["errors"] = {
  validation: {
    field: {
      is: {
        empty: "This field is required",
        incorrect: {
          password: "Password is incorrect",
        },
        invalid: {
          common: "Please enter a valid value",
          email: "Please enter a valid email address",
        },
      },
      length: {
        lessThan: "This field should contain at least {minLength} characters",
        moreThan: `This field should contain no more than {maxLength}
        characters`,
      },
    },
    fields: {
      are: {
        not: {
          equal: {
            password: "Passwords don't match",
          },
        },
      },
    },
  },
};

export { errors };
