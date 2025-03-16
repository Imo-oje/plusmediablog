import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormMessage,
  FormControl,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import z from "zod";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const registerSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();
  const redirecUrl = location.state?.redirectUrl || "/";

  const { mutate: register, isPending } = useMutation({
    mutationFn: (data) => {
      return fetch("http://localhost:2025/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: (data) => {
      form.reset();
      navigate(redirecUrl);
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    return register(data);
  };

  return (
    <div className="flex items-center h-screen border justify-center p-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            type="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="confirn password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={isPending}>
            {isPending ? "Loading..." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
