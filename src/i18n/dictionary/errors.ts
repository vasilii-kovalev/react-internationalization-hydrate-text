const errors = {
  validation: {
    field: {
      is: {
        empty: "errors.validation.field.is.empty",
        incorrect: {
          password: "errors.validation.field.is.incorrect.password",
        },
        invalid: {
          common: "errors.validation.field.is.invalid.common",
          email: "errors.validation.field.is.invalid.email",
        },
      },
      length: {
        lessThan: "errors.validation.field.length.lessThan",
        moreThan: "errors.validation.field.length.moreThan",
      },
    },
    fields: {
      are: {
        not: {
          equal: {
            password: "errors.validation.fields.are.not.equal.password",
          },
        },
      },
    },
  },
} as const;

export { errors };
