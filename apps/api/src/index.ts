import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.warn("Warning: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY should be set in env");
}

// Init supabase client with service role for server operations
export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
});

const app = express();
app.use(cors());
app.use(express.json());

// Health
app.get("/", (req, res) => res.json({ status: "ok", service: "learning-platform-api" }));

// Placeholder routes
app.post("/api/ai/*", (req, res) => {
    res.json({ message: "AI Wrapper Placeholder - Logic deferred to Phase 2" });
});

app.listen(PORT, () => {
    console.log(`API wrapper listening on port ${PORT}`);
});
