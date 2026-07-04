import type { Metadata } from "next";
import AdminLoginPage from "./login-page";

export const metadata: Metadata = {
  title: "Admin Login | KalamHub",
  description: "Secure sign-in experience for the KalamHub admin portal.",
};

export default function AdminLoginRoute() {
  return <AdminLoginPage />;
}
