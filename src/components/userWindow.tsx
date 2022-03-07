import "../styles/sections/userWindow.scss";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { register } from "../api/auth/register";
import { login } from "../api/auth/login";

export const UserWindow = () => {
    const [loginWindow, setLoginWindow] = useState<boolean>(false);
    // if signupOption is true then button will show "signup" and api call will try to register user else it's login attempt
    const [signupOption, setSignupOption] = useState<boolean>(false);
    const [formLogin, setFormLogin] = useState<string>("");
    const [formPassword, setFormPassword] = useState<string>("");
    const [message, setMessage] = useState<boolean>(false);
    const [messageContent, setMessageContent] = useState<string>("");
    const { loggedIn, username } = useSelector((state: RootState) => state.user);

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (formLogin !== "" && formPassword !== "") {
            setMessage(true);
            setMessageContent("loading");
            if (signupOption) {
                const res = await register(formLogin, formPassword);
                setMessage(false);
                // temp
                console.log(res);
                if (res === undefined) {
                    setMessage(true);
                    setMessageContent("username already taken");
                } else {
                    setMessage(false);
                }
            } else {
                const res = await login(formLogin, formPassword);
                setMessage(false);
                // temp
                console.log(res);
                if (res === undefined) {
                    setMessage(true);
                    setMessageContent("wrong credentials");
                } else {
                    setMessage(false);
                }
            }
        }
    };

    return (
        <div className="userWindow">
            {loggedIn ? <h4>{username}</h4> : <button onClick={() => setLoginWindow(!loginWindow)}>log in</button>}
            {loginWindow && (
                <form className="loginWindow">
                    <h4>login</h4>
                    <input type="text" onChange={(e) => setFormLogin(e.target.value)} />
                    <h4>password</h4>
                    <input type="text" onChange={(e) => setFormPassword(e.target.value)} />
                    <input
                        onClick={(e) => handleSubmit(e)}
                        className="loginSubmitButton"
                        type="submit"
                        value={signupOption ? "sign up" : "log in"}
                    />
                    {message && <p className="loginWindowMessage">{messageContent}</p>}
                    <p onClick={() => setSignupOption(!signupOption)}>{signupOption ? "log in?" : "sign up?"}</p>
                </form>
            )}
        </div>
    );
};
