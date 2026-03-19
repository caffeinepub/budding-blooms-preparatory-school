import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.message,
      );
    },
  });
}

export function useSubmitAdmission() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      parentName: string;
      childName: string;
      childAge: number;
      programInterest: string;
      phone: string;
      email: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitAdmissionInquiry(
        data.parentName,
        data.childName,
        BigInt(data.childAge),
        data.programInterest,
        data.phone,
        data.email,
      );
    },
  });
}
