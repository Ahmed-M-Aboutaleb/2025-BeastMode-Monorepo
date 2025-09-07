"use client"
import { LoginPayload, RegisterPayload } from "@/types/auth.types";
import axiosClient from "./axiosClient";

export const authService = {
  register: async (payload: RegisterPayload) => {
    const res = await axiosClient.post("/auth/signup", payload);
    return res.data;
  },
  
  login: async (payload: LoginPayload) => {
    const res = await axiosClient.post("/auth/signin", payload);
    return res.data;
  },

};