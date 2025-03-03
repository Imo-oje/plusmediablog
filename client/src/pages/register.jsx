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

const Register = () => {
  const registerSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3, { message: "username is too short" }),
    password: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: register } = useMutation({
    mutationFn: (data) => {
      return fetch("http://localhost:8000/auth/register", {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(data),
      });
    },
  });

  const onSubmit = (data) => register(data);

  return (
    <div className="flex items-center h-screen border justify-center p-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
          <Button className="w-full">Log In</Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
