import { z } from 'zod';

export const profileSchema = z.object({
  username: z.string().optional().nullable(),
  email: z.string().email().optional().nullable(),
  phone: z.string().min(10).optional().nullable(),
  desc: z.string().optional().nullable(),
});

export type ProfileInput = z.infer<typeof profileSchema>;
