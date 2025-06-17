import { z } from "zod";
import {
  MediaSchema,
  RecordResponseSchema,
  PaginatedResponseSchema,
} from "./fetchData";

export const EventSchema = z.object({
  title: z.string(),
  description: z.string().nullable().optional(),
  date: z.string(), // ISO date string
  location: z.string().nullable().optional(),
  image: MediaSchema.optional(),
});

export type Event = z.infer<typeof EventSchema>;

export const EventResponseSchema = RecordResponseSchema(EventSchema);
export type EventResponse = z.infer<typeof EventResponseSchema>;

export const PaginatedEventResponseSchema = PaginatedResponseSchema(EventSchema);
export type PaginatedEventResponse = z.infer<typeof PaginatedEventResponseSchema>;
