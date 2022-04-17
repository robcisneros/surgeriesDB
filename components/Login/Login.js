import React, { useState, useEffect, useReducer, useContext, useRef } from "react"

import Card from "../UI/Card/Card"
import classes from "./Login.module.css"
import Button from "../UI/Button/Button"
import AuthContext from "../store/auth-context"
import Input from "../UI/Input/Input"

const usernameReducer = (state, action) => {
  if (action.type === "USERNAME_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 2 }
  }
  if (action.type === "USERNAME_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 2 }
  }
  return { value: "", isValid: false }
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_PASSWORD") {
    return { value: action.val, isValid: action.val.trim().length > 2 };
  }
  if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 2 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: usernameIsValid } = usernameState;
  const { isValid: passwordIsValid } = passwordState;

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Check form validity");
      setFormIsValid(usernameIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [usernameIsValid, passwordIsValid]);

  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: "USERNAME_INPUT", val: event.target.value });

    setFormIsValid(usernameState.value.trim().length > 2 && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_PASSWORD", val: event.target.value });

    setFormIsValid(usernameState.isValid && passwordState.value.trim().length > 6);
  };

  const validateUsernameHandler = () => {
    dispatchUsername({ type: "USERNAME_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid){
      ctx.onLogin(usernameState.value, passwordState.value);
    }
    else if (!usernameIsValid) {
      usernameInputRef.current.focus();
    }
    else if (!passwordIsValid) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={usernameInputRef}
          id="username"
          label="Username"
          type="text"
          isValid={usernameIsValid}
          value={usernameState.value}
          onChange={usernameChangeHandler}
          onBlur={validateUsernameHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
