import { Vote } from "@prisma/client";

export type ChachedPost = {
  id: string;
  title: string;
  authorUsername: string;
  content: string;
  currentVote: Vote["type"];
  createdAt: Date;
};
