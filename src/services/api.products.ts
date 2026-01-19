import {z} from "zod";

const API_URL = import.meta.env.VITE_API;
const tenantId = import.meta.env.VITE_TENANT_ID;

export const productsSchema = z.object({
    id: z.coerce.number().int(),
    name: z.string().min(1, {error: "Name is required"}),
    slug: z.string().min(1, {error: "Slug is required"})
        .regex(/^[a-z0-9_-]+$/, {error: "only latin letters and numbers"}),
})