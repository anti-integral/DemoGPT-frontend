import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface User {
	user_id?: string;
	access_token?: string;
}

interface IAuthContext {
	login: (userData: User) => void;
	logout: () => void;
	user: User | null;
}

export const AuthContext = React.createContext<IAuthContext>({
	login: () => {},
	logout: () => {},
	user: null,
});

export const AuthContextProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loginState, setLoginState] = useState<boolean>(false);
	const router = useRouter();

	const validateUser = () => {
		const token = localStorage.getItem("token");

		if (token) {
			// If there's a token, consider the user as authenticated
			setLoginState(true);
			// Fetch user details or perform any necessary authentication checks
			// For simplicity, let's assume user details are stored in localStorage
			const storedUser = localStorage.getItem("user");
			if (storedUser) {
				setUser({ user_id: storedUser, access_token: token });
			}
		} else {
			// If there's no token, consider the user as not authenticated
			setLoginState(true);
			// Redirect to login page if the token is not present
			router.push("/dashboard/login");
		}
	};

	const login = (userData: User) => {
		setUser(userData);
		localStorage.setItem("user", userData.user_id || "");
		localStorage.setItem("token", userData.access_token || "");
		router.push("/dashboard");
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		router.push("/login");
	};

	// useEffect(() => {
	// 	validateUser();
	// }, []);

	// useEffect(() => {
	// 	if (
	// 		!loginState &&
	// 		router.pathname !== "/" &&
	// 		!router.pathname.startsWith("/dashboard/verify-email") &&
	// 		router.pathname !== "/dashboard/create-account"
	// 	) {
	// 		router.push("/dashboard/login");
	// 	}
	// }, [loginState, router.pathname]);

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
