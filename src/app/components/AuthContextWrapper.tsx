"use client";
import { AuthContextProvider } from "@/context/AuthContext";
import React, { PropsWithChildren } from "react";

function AuthContextWrapper({ children }: PropsWithChildren) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

export default AuthContextWrapper;
