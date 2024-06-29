"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Input } from "./ui/input";
import axios from "axios";

const contactFormSchema = z.object({
  username: z
    .string({
      required_error: "Preencha com o seu nome",
    })
    .min(3, {
      message: "O nome de usuário deve ter pelo menos 3 caracteres.",
    })
    .max(30, {
      message: "O nome de usuário não deve ter mais de 30 caracteres.",
    }),
  email: z
    .string({
      required_error: "Preencha com o seu email",
    })
    .email(),
  content: z
    .string({
      required_error: "Preencha com o conteúdo da mensagem",
    })
    .min(10, {
      message: "O conteúdo deve ter pelo menos 10 caracteres.",
    })
    .max(160, {
      message: "O conteúdo não deve ter mais de 30 caracteres.",
    }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Footer() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  async function onSubmit(data: ContactFormValues) {
    console.log(JSON.stringify(data, null, 2));

    try {
      await axios.post("/api/webhook", data);
      /* toast.success("Mensagem enviada com sucesso!");
      reset(); */
    } catch (error) {
      // toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <footer className="h-auto w-full flex flex-col items-center justify-center pb-16">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold">
                  Que tal trabalharmos juntos?
                  <br />
                  Entre em contato.
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
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
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Mesagem..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Envie uma mensagem e vamos nos conectar!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Enviar mensagem</Button>
        </form>
      </Form>

      <p className="text-sm pt-16">© Eduardo Mateus. All rights reserved.</p>
    </footer>
  );
}
