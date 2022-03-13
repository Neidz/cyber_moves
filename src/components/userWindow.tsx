import "../styles/sections/userWindow.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { register } from "../api/auth/register";
import { login } from "../api/auth/login";
import { updateStorage } from "../utils/updateStorage";
import { changeIsAdmin, changeIsHacker, changeLoggedIn, changeToDefault, changeUsername } from "../store/features/userSlice";

export const UserWindow = () => {
    const [loginWindow, setLoginWindow] = useState<boolean>(false);
    const [userOptionsWindow, setUserOptionsWindow] = useState<boolean>(false);
    // if signupOption is true then button will show "signup" and api call will try to register user else it's login attempt
    const [signupOption, setSignupOption] = useState<boolean>(false);
    const [formLogin, setFormLogin] = useState<string>("");
    const [formPassword, setFormPassword] = useState<string>("");
    const [message, setMessage] = useState<boolean>(false);
    const [messageContent, setMessageContent] = useState<string>("");
    const { loggedIn, username } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (formLogin !== "" && formPassword !== "") {
            setMessage(true);
            setMessageContent("loading");
            // signup
            if (signupOption) {
                const res = await register(formLogin, formPassword);
                setMessage(false);
                if (!res) {
                    setMessage(true);
                    setMessageContent("username already taken");
                } else {
                    setMessage(false);
                    setSignupOption(false);
                }
                // login
            } else {
                const res = await login(formLogin, formPassword);
                setMessage(false);
                if (!res) {
                    setMessage(true);
                    setMessageContent("wrong credentials");
                } else {
                    setMessage(false);
                    setLoginWindow(false);
                    res && updateStorage("token", res.accessToken);

                    dispatch(changeLoggedIn(true));
                    dispatch(changeUsername(res.username));
                    dispatch(changeIsHacker(res.isHacker));
                    dispatch(changeIsAdmin(res.isAdmin));
                }
            }
        }
    };

    const handleLogout = () => {
        dispatch(changeToDefault());
        updateStorage("token", "");
        setUserOptionsWindow(false);
    };

    return (
        <div className="userWindow">
            {loggedIn ? (
                <button className="username" onClick={() => setUserOptionsWindow(!userOptionsWindow)}>
                    {username}
                </button>
            ) : (
                <button onClick={() => setLoginWindow(!loginWindow)}>log in</button>
            )}
            {loginWindow && (
                <form className="loginWindow">
                    <h4>login</h4>
                    <input type="text" onChange={(e) => setFormLogin(e.target.value)} />
                    <h4>password</h4>
                    <input type="password" onChange={(e) => setFormPassword(e.target.value)} />
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
            {!loginWindow && userOptionsWindow && (
                <div className="userOptionsWindow">
                    <button onClick={() => handleLogout()}>log out</button>
                </div>
            )}
        </div>
    );
};
