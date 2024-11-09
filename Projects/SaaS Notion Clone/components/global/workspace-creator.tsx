"use client";

import { useSupabaseUser } from "@/lib/providers/supabase-user-provider";
import { addCollaborators, createWorkspace } from "@/lib/supabase/queries";
import { User, workspace } from "@/types/supabase";
import { Lock, Plus, Share } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 } from "uuid";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CollaboratorSearch from "./collaborator-search";
import { useToast } from "../ui/use-toast";

type Props = {};

function WorkspaceCreator({}: Props) {
  const { user } = useSupabaseUser();
  const router = useRouter();
  const [permissions, setPermission] = useState("private");
  const [tittle, setTittle] = useState("");
  const [collaborators, setCollaborators] = useState<User[]>([
    /*     {
      id: "8a5efb5e-6f75-4a1b-a6bb-ebf2f1e2d8c3",
      full_name: "Alice Johnson",
      avatar_url: "https://example.com/avatar_alice.jpg",
      billing_address: {
        street: "456 Oak Avenue",
        city: "Los Angeles",
        state: "CA",
        postal_code: "90001",
        country: "USA",
      },
      updated_at: "2024-06-30T15:30:00Z",
      payment_method: {
        type: "paypal",
        account_email: "alice.johnson@example.com",
      },
      email: "alice.johnson@example.com",
    },
    {
      id: "f23bde4c-9a9e-4a56-bc5c-3faa9a687382",
      full_name: "Bob Smith",
      avatar_url: "https://example.com/avatar_bob.jpg",
      billing_address: {
        street: "789 Pine Street",
        city: "Chicago",
        state: "IL",
        postal_code: "60601",
        country: "USA",
      },
      updated_at: "2024-06-30T14:45:00Z",
      payment_method: {
        type: "credit_card",
        last_four_digits: "5678",
        expiration_date: "09/26",
      },
      email: "bob.smith@example.com",
    },
    {
      id: "c9cdeecb-2e5d-49aa-b9d6-4b3f18bfc8a5",
      full_name: "Emma Davis",
      avatar_url: "https://example.com/avatar_emma.jpg",
      billing_address: {
        street: "321 Cedar Lane",
        city: "Houston",
        state: "TX",
        postal_code: "77002",
        country: "USA",
      },
      updated_at: "2024-06-30T13:15:00Z",
      payment_method: {
        type: "bank_transfer",
        bank_name: "Bank of America",
        account_number: "9876543210",
      },
      email: "emma.davis@example.com",
    }, */
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const addCollaborator = (user: User) => {
    setCollaborators([...collaborators]);
  };
  const removeCollaborator = (user: User) => {
    setCollaborators(collaborators.filter((c) => c.id !== user.id));
  };

  const createItem = async () => {
    setIsLoading(true);

    const uuid = v4();

    if (user?.id) {
      const newWorkspaces: workspace = {
        id: uuid,
        data: null,
        created_at: new Date().toISOString(),
        workspace_owner: user.id,
        title: tittle,
        in_trash: "",
        logo: null,
        banner_url: "",
        icon_id: "🧑‍💻",
      };
      if (permissions === "private") {
        await createWorkspace(newWorkspaces);
        router.refresh();
      }

      if (permissions === "shared") {
        await createWorkspace(newWorkspaces);
        await addCollaborators(collaborators, uuid);
        toast({ title: "Success", description: "Created the workspace" });
        router.refresh();
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="flex gap-4 flex-col">
      <div>
        <Label htmlFor="name" className="text-sm text-muted-foreground">
          Name
        </Label>
        <div className="flex justify-center items-center gap-2">
          <Input
            name="name"
            value={tittle}
            placeholder="Workspace Name"
            onChange={(e) => setTittle(e.target.value)}
          />
        </div>
      </div>
      <>
        <Label htmlFor="name" className="text-sm text-muted-foreground">
          Permission
        </Label>
        <Select
          onValueChange={(val) => setPermission(val)}
          defaultValue={permissions}
        >
          <SelectTrigger className="w-full h-26 -mt-3">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="private">
                <div className="p-2 flex gap-4 justify-center items-center">
                  <Lock />
                  <article className="text-left flex flex-col">
                    <span>Private</span>
                    <p>
                      Your workspace is private to you. You can choose to share
                      it later.
                    </p>
                  </article>
                </div>
              </SelectItem>
              <SelectItem value="shared">
                <div className="p-2 flex gap-4 justify-center items-center">
                  <Share />
                  <article className="text-left flex flex-col">
                    <span>Shared</span>
                    <p>You can invite collaborators.</p>
                  </article>
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </>
      {permissions === "shared" && (
        <div>
          <CollaboratorSearch
            existingCollaborators={collaborators}
            getCollaborator={(user) => {
              addCollaborator(user);
            }}
          >
            <Button type="button" className="text-sm mt-4">
              <Plus />
              Add Collaborators
            </Button>
          </CollaboratorSearch>
          <div className="mt-4">
            <span className="text-sm text-muted-foreground">
              Collaborators {collaborators.length || ""}
            </span>
            <ScrollArea className="h-[120px] overflow-y-scroll w-full rounded-md border border-muted-foreground/20 scrollbar-hide">
              {collaborators.length ? (
                collaborators.map((c) => (
                  <div
                    className="p-4 flex justify-between items-center"
                    key={c.id}
                  >
                    <div className="flex gap-4 items-center">
                      <Avatar>
                        <AvatarImage src="/avatars/7.png" />
                        <AvatarFallback>PJ</AvatarFallback>
                      </Avatar>
                      <div className="text-sm gap-2 text-muted-foreground overflow-hidden overflow-ellipsis sm:w-[300px] w-[140px]">
                        {c.email}
                      </div>
                    </div>
                    <Button
                      variant={"secondary"}
                      onClick={() => removeCollaborator(c)}
                    >
                      Remove
                    </Button>
                  </div>
                ))
              ) : (
                <div className="absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center">
                  <span className="text-muted-foreground text-sm">
                    You have No Collaborators
                  </span>
                </div>
              )}
            </ScrollArea>
          </div>
        </div>
      )}
      <Button
        type="button"
        disabled={
          !tittle ||
          (permissions === "shared" && collaborators.length === 0) ||
          isLoading
        }
        variant={"secondary"}
        onClick={createItem}
      >
        Create
      </Button>
    </div>
  );
}

export default WorkspaceCreator;
