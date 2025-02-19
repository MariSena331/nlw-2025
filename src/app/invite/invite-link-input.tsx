import { Copy, Link } from "lucide-react";

import { InputField, InputIcon, InputRoot } from "@/components/input";
import { IconButton } from "@/components/icon-button";

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/298u128"
      />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
