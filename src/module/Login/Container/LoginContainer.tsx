import LoginComponent from "../Component/LoginComponent";
import React from "react";
import { useRouter } from "next/router";

export default function LoginContainer() {
  const router = useRouter();
  const handleSubmit = () => {
    alert("sukses login");
    router.push("/dashboard");
  };
  return <LoginComponent handleSubmit={handleSubmit} />;
}
