import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";

const Login = () => {
  const loginSchema = z.object({
    username: z.string().min(3, { message: "username is too short" }),
    password: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: logIn, isPending } = useMutation({
    mutationFn: (data) => {
      return fetch("http://localhost:2025/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
  });

  const onSubmit = (data) => logIn(data);

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
          <Button className="w-full" disabled={isPending}>
            {isPending ? "Loading" : "Log In"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
