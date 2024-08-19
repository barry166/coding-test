import { z } from 'zod';

export const UserSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  description: z.string().optional(),
});

export const UserUpdateSchema = UserSchema.extend({
  id: z.number(),
}).partial(); // Allows partial updates
