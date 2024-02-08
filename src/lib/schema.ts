export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      exercises: {
        Row: {
          title: string
          duration: string
          intensity: string
          type: string
          note: string
        }
        Insert: {
            title: string
            duration: string
            intensity: string
            type: string
            note: string
        }
        Update: {
            title: string
            duration: string
            intensity: string
            type: string
            note: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}