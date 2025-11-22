export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    full_name: string | null
                    role: string
                    created_at: string
                }
                Insert: {
                    id: string
                    full_name?: string | null
                    role?: string
                    created_at?: string
                }
                Update: {
                    id?: string
                    full_name?: string | null
                    role?: string
                    created_at?: string
                }
            }
        }
    }
}
