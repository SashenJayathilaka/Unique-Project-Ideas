"use client";

import { useToast } from "@/components/ui/use-toast";
import { Subscription } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthUser } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserSubscriptionStatus } from "../supabase/queries";

type SupabaseUserContextType = {
  user: AuthUser | null;
  subscription: Subscription | null;
};

const SupabaseUserContext = createContext<SupabaseUserContextType>({
  user: null,
  subscription: null,
});

export const useSupabaseUser = () => {
  return useContext(SupabaseUserContext);
};

interface SuparbaseUserProvidersProps {
  children: React.ReactNode;
}

export const SupabaseUserProvider: React.FC<SuparbaseUserProvidersProps> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const supabase = createClientComponentClient();
  const { toast } = useToast();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        const { data, error } = await getUserSubscriptionStatus(user.id);

        if (data) setSubscription(data);

        if (error) {
          toast({
            title: "Unexpected Error",
            description:
              "Oppse! An unexpected error happened. Try again later.",
          });
        }
      }
    };
    getUser();
  }, [supabase, toast]);

  return (
    <SupabaseUserContext.Provider value={{ user, subscription }}>
      {children}
    </SupabaseUserContext.Provider>
  );
};
