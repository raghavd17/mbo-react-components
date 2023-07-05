import React from "react";
import "./../_form.scss";
import style from "./_input-text.module.scss";

const Checkbox = () => {
  return (
    <main className="p-4">
      <h5 className="text-red-500 mb-4 text-5xl">Input Component </h5>
      <div className="grid grid-cols-2 grid-gap-sm">
        <sections className="grid">
          <div className={`${style.form_field}`}>
            <div className={`${style.form_field__control}`}>
              <div className={`${style.form_field__input_wrapper}`}>
                <input
                  id="inputField"
                  type="text"
                  className={`${style.form_field__input}`}
                  // value={value}
                  // onChange={onChange}
                  placeholder=" "
                  required
                  // {...(disabled ? { disabled } : {})}
                />
                {/* {dispRightIcon && rightIcon === "arrow" && (
                  <ArrowRight className="form_field__icon" fontSize={16} />
                )} */}
              </div>
              <label
                htmlFor="inputField"
                className={`${style.form_field__label}`}
              >
                Simple field
              </label>
            </div>
            {/* {errorMessage && ( */}
            <label className={`${style.form_field__error}`}>
              {/* {errorMessage} */}
            </label>
            {/* )} */}
          </div>
          {/* items */}
          <h2>Error example </h2>
          <div className={`${style.form_field}`}>
            <div className={`${style.form_field__control} ${style.error}`}>
              <div className={`${style.form_field__input_wrapper}`}>
                <input
                  id="inputField"
                  type="text"
                  className={`${style.form_field__input}`}
                  // value={value}
                  // onChange={onChange}
                  placeholder=" "
                  required
                  // {...(disabled ? { disabled } : {})}
                />
                {/* {dispRightIcon && rightIcon === "arrow" && (
                  <ArrowRight className="form_field__icon" fontSize={16} />
                )} */}
                <span className="form_field__icon"> @ </span>
              </div>
              <label
                htmlFor="inputField"
                className={`${style.form_field__label}`}
              >
                Simple field
              </label>
            </div>
            {/* {errorMessage && ( */}
            <label className={`${style.form_field__error}`}>
              {/* {errorMessage} */}
              Error message
            </label>
            {/* )} */}
          </div>
          {/* items */}
        </sections>
        {/* col 1 end  */}
        <sections className="grid">Colum two</sections>
      </div>
      {/* grid end  */}
    </main>
  );
};

export default Checkbox;
