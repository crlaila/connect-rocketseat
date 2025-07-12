"use client";

import { Button } from "@/components/button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { ArrowRight, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscriptionSchema = z.object({
  name: z.string().min(2, "O nome precisa ter pelo menos 2 caracteres"),
  email: z.email("O e-mail precisa ser valido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  });

  function onSubscribe(data: SubscriptionSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register("name")}
            />
          </InputRoot>
          {errors.name && (
            <span className="text-danger text-xs font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>

        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="mail" placeholder="E-mail" {...register("email")} />
        </InputRoot>
        {errors.email && (
          <span className="text-danger text-xs font-semibold">
            {errors.email.message}
          </span>
        )}
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight size={20} />
      </Button>
    </form>
  );
}
