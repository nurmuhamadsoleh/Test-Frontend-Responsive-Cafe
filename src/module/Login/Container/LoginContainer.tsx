import LoginComponent from "../Component/LoginComponent";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function LoginContainer() {
  const router = useRouter();
  const handleSubmit = () => {
    toast.success("Selamat, Berhasil Login");
    router.push("/dashboard");
  };
  return <LoginComponent handleSubmit={handleSubmit} />;
}
