import { Dictionary } from "i18n/types";

const errors: Dictionary["errors"] = {
  validation: {
    field: {
      is: {
        empty: "Это поле является обязательным для заполнения",
        incorrect: {
          password: "Неверный пароль",
        },
        invalid: {
          common: "Пожалуйста, введите корректное значение",
          email: "Пожалуйста, введите корректный адрес электронной почты",
        },
      },
      length: {
        lessThan: "Это поле должно состоять минимум из {minLength} символов",
        moreThan: "Это поле должно состоять максимум из {maxLength} символов",
      },
    },
    fields: {
      are: {
        not: {
          equal: {
            password: "Пароли не совпадают",
          },
        },
      },
    },
  },
};

export { errors };
