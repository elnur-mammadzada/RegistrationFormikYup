import { TextField } from "@mui/material";
import React from "react";

const MUITextField = ({ label, variant, placeholder, value, onChange, id, type }) => {
  return (
    <div>
      <TextField
        label={label}
        variant={variant}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
              id={id}
              type={type}
      />
    </div>
  );
};

export default MUITextField;
