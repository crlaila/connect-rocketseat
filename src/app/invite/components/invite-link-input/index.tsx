"use client";

import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }
  return (
    <InputRoot>
      <InputIcon>
        <Link size={20} />
      </InputIcon>

      <InputField defaultValue={inviteLink} readOnly />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy size={20} />
      </IconButton>
    </InputRoot>
  );
}
