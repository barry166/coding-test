import { z } from 'zod';

export const profileSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().min(10).optional(),
  desc: z.string().optional(),
});

export type ProfileInput = z.infer<typeof profileSchema>;
