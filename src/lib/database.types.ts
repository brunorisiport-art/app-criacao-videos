// Tipos TypeScript para o banco de dados

export type PlanType = 'free' | 'pro' | 'enterprise';
export type ProjectType = 'video' | 'audio' | 'both';
export type ProjectStatus = 'draft' | 'processing' | 'completed' | 'failed';
export type FileType = 'video' | 'audio' | 'image';
export type EffectCategory = 'visual' | 'transformation' | 'cinematic' | 'animation' | 'audio';
export type GenerationType = 'video' | 'audio' | 'effect';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  plan_type: PlanType;
  credits_remaining: number;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  type: ProjectType;
  status: ProjectStatus;
  thumbnail_url: string | null;
  duration_seconds: number | null;
  created_at: string;
  updated_at: string;
}

export interface MediaFile {
  id: string;
  project_id: string;
  file_url: string;
  file_type: FileType;
  file_size_mb: number | null;
  resolution: string | null;
  format: string | null;
  created_at: string;
}

export interface Effect {
  id: string;
  name: string;
  category: EffectCategory;
  description: string | null;
  thumbnail_url: string | null;
  is_premium: boolean;
  created_at: string;
}

export interface ProjectEffect {
  id: string;
  project_id: string;
  effect_id: string;
  parameters: Record<string, any> | null;
  applied_at: string;
}

export interface Prompt {
  id: string;
  project_id: string;
  prompt_text: string;
  style: string | null;
  duration: number | null;
  created_at: string;
}

export interface GenerationHistory {
  id: string;
  user_id: string;
  project_id: string | null;
  credits_used: number;
  generation_type: GenerationType;
  success: boolean;
  error_message: string | null;
  created_at: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price_monthly: number;
  credits_per_month: number;
  features: Record<string, any> | null;
  is_active: boolean;
  created_at: string;
}

export interface UserFavorite {
  id: string;
  user_id: string;
  project_id: string;
  created_at: string;
}

// Tipos para inserção (sem campos auto-gerados)
export type ProfileInsert = Omit<Profile, 'created_at' | 'updated_at'>;
export type ProjectInsert = Omit<Project, 'id' | 'created_at' | 'updated_at'>;
export type MediaFileInsert = Omit<MediaFile, 'id' | 'created_at'>;
export type PromptInsert = Omit<Prompt, 'id' | 'created_at'>;
export type GenerationHistoryInsert = Omit<GenerationHistory, 'id' | 'created_at'>;

// Tipos para atualização (todos os campos opcionais)
export type ProfileUpdate = Partial<Omit<Profile, 'id' | 'created_at'>>;
export type ProjectUpdate = Partial<Omit<Project, 'id' | 'user_id' | 'created_at'>>;

// Tipos para queries com joins
export interface ProjectWithMedia extends Project {
  media_files: MediaFile[];
  prompts: Prompt[];
}

export interface ProjectWithEffects extends Project {
  project_effects: (ProjectEffect & { effect: Effect })[];
}

export interface UserWithStats extends Profile {
  total_projects: number;
  total_generations: number;
  favorite_count: number;
}
