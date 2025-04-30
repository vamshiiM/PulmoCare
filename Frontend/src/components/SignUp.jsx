import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../backend/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AuthPage() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setMessage({ type: "", text: "" });
        try {
            if (isSignIn) {
                await signInWithEmailAndPassword(auth, form.email, form.password);
                toast.success("Signed in successfully!");
                setMessage({ type: "success", text: "Signed in successfully!" });
                console.log("Signed in successfully");
            } else {
                await createUserWithEmailAndPassword(auth, form.email, form.password);
                toast.success("Account created successfully!");
                setMessage({ type: "success", text: "Account created successfully!" });
                console.log("Account created successfully");
            }
        } catch (error) {
            const errorMessage = error.message.includes("auth")
                ? "Invalid credentials or account already exists"
                : error.message;
            toast.error(errorMessage);
            setMessage({ type: "error", text: errorMessage });
            console.error("Auth error:", error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <ToastContainer />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-2xl rounded-lg p-8 w-96 text-center border border-gray-300"
            >
                <motion.h2
                    key={isSignIn ? "signin" : "signup"}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold text-gray-800 mb-6"
                >
                    {isSignIn ? "Welcome Back!" : "Create an Account"}
                </motion.h2>

                <form
                    key={isSignIn ? "signInForm" : "signUpForm"}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    className="space-y-4"
                >
                    {!isSignIn && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <div className="relative">
                                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-500" />
                                <input
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </motion.div>
                    )}
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                        <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-500" />
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </motion.button>
                </form>

                <AnimatePresence>
                    {message.text && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`mt-4 p-2 rounded text-sm border ${message.type === "success"
                                ? "bg-green-100 text-green-700 border-green-500"
                                : "bg-red-100 text-red-700 border-red-500"
                                }`}
                        >
                            {message.text}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-4 text-gray-600"
                >
                    {isSignIn ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => {
                            setIsSignIn(!isSignIn);
                            setMessage({ type: "", text: "" });
                        }}
                        className="text-blue-500 hover:underline ml-1"
                    >
                        {isSignIn ? "Sign Up" : "Sign In"}
                    </button>
                </motion.p>
            </motion.div>
        </div>
    );
}
