import React, { createContext, useState } from "react";

module.exports = {
  validateLogin(email, password) {
    const valor = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valor.test(email) === false || password.length < 8) {
      return false;
    } else {
      return true;
    }
  },
  validateCellphone(number) {
    try {
      const cellphone = parseInt(number);
      if (number.length > 9 || number.length < 9) {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  },
  validateDDD(DDD) {
    try {
      const ddd = parseInt(DDD);
      if (DDD.length > 2 || DDD.length < 2) {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  },
  validateEmail(email) {
    const valor = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (valor.test(email) === false) {
      return false;
    } else {
      return true;
    }
  },
  validatePassword(password) {
    return password.length < 8 ? false : true;
  },
};
