import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Components/ContextProvider/DataProvider";

const PaymentSecurity = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  const [{ user, basket }] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);

  return children;
};

export default PaymentSecurity;
