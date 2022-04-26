import React, { useState } from "react";

const AuthContext = React.createContext({
  hospitalName: "",
  onChangeHospital: (name) => {},
});

export const AuthContextProvider = (props) => {
  const [hospitalName,setHospitalName] = useState("");

  const changeNameValue = (name) => {
    setHospitalName(name);
  };

  return (
    <AuthContext.Provider
      value={{
        hospitalName: hospitalName,
        onChangeHospital: changeNameValue,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
