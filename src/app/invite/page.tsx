import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from "lucide-react";
import Image from "next/image";
import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Ranking } from "./ranking";

import logo from "../../assets/logo.svg";

export default function Contato() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>
          <InputRoot>
            <InputIcon>
              <Link size={20} />
            </InputIcon>

            <InputField
              defaultValue={"http://localhost:3000/invet/382463246238"}
              readOnly
            />
            <IconButton className="">
              <Copy size={20} />
            </IconButton>
          </InputRoot>

          <div className="grid gap-3 grid-cols-3">
            <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl relative">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-gray-300 text-sm  leading-none text-center">
                Acessos ao link
              </span>
              <MousePointerClick
                size={20}
                className="text-purple absolute top-3 left-3"
              />
            </div>
            <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 relative rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-gray-300 text-sm  leading-none text-center">
                Inscrições feitas
              </span>
              <BadgeCheck
                size={20}
                className="text-purple absolute top-3 left-3"
              />
            </div>
            <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 relative rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                3°
              </span>
              <span className="text-gray-300 text-sm  leading-none text-center">
                Posição no ranking
              </span>
              <Medal size={20} className="text-purple absolute top-3 left-3" />
            </div>
          </div>
        </div>
      </div>

      <Ranking />
    </div>
  );
}
