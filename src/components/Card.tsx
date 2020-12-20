import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Card: React.FunctionComponent = () => {
  const [binaryNumber, setBinaryNumber] = useState("");
  const [finalOutput, setFinalOutput] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    const final = parseInt(binaryNumber, 2);
    setFinalOutput(final.toString());
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">Binary Number</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="1010101"
              value={binaryNumber}
              name="binaryNumber"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[01]+$/,
                  message: "Invalid binary number",
                },
              })}
              onChange={(e) => setBinaryNumber(e.target.value)}
            />
            {errors.binaryNumber && (
              <div className="has-text-danger">
                Please supply a valid binary number
              </div>
            )}
          </div>
        </div>
        <div className="control">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div>
        {finalOutput != "" ? (
          <div className="solution">Decimal value: {finalOutput}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
