import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Funções auxiliares para operações comuns

// Perfil do usuário
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  return { data, error };
}

export async function updateUserProfile(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  
  return { data, error };
}

// Projetos
export async function getUserProjects(userId: string) {
  const { data, error } = await supabase
    .from('projects')
    .select(`
      *,
      media_files(*),
      prompts(*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  return { data, error };
}

export async function createProject(project: any) {
  const { data, error } = await supabase
    .from('projects')
    .insert(project)
    .select()
    .single();
  
  return { data, error };
}

export async function updateProject(projectId: string, updates: any) {
  const { data, error } = await supabase
    .from('projects')
    .update(updates)
    .eq('id', projectId)
    .select()
    .single();
  
  return { data, error };
}

export async function deleteProject(projectId: string) {
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', projectId);
  
  return { error };
}

// Efeitos
export async function getAllEffects() {
  const { data, error } = await supabase
    .from('effects')
    .select('*')
    .order('category', { ascending: true });
  
  return { data, error };
}

export async function getEffectsByCategory(category: string) {
  const { data, error } = await supabase
    .from('effects')
    .select('*')
    .eq('category', category);
  
  return { data, error };
}

export async function applyEffectToProject(projectId: string, effectId: string, parameters?: any) {
  const { data, error } = await supabase
    .from('project_effects')
    .insert({
      project_id: projectId,
      effect_id: effectId,
      parameters
    })
    .select()
    .single();
  
  return { data, error };
}

// Histórico de gerações
export async function addGenerationHistory(userId: string, generationData: any) {
  const { data, error } = await supabase
    .from('generation_history')
    .insert({
      user_id: userId,
      ...generationData
    })
    .select()
    .single();
  
  return { data, error };
}

export async function getUserGenerationHistory(userId: string, limit = 50) {
  const { data, error } = await supabase
    .from('generation_history')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);
  
  return { data, error };
}

// Planos de assinatura
export async function getSubscriptionPlans() {
  const { data, error } = await supabase
    .from('subscription_plans')
    .select('*')
    .eq('is_active', true)
    .order('price_monthly', { ascending: true });
  
  return { data, error };
}

// Favoritos
export async function addToFavorites(userId: string, projectId: string) {
  const { data, error } = await supabase
    .from('user_favorites')
    .insert({
      user_id: userId,
      project_id: projectId
    })
    .select()
    .single();
  
  return { data, error };
}

export async function removeFromFavorites(userId: string, projectId: string) {
  const { error } = await supabase
    .from('user_favorites')
    .delete()
    .eq('user_id', userId)
    .eq('project_id', projectId);
  
  return { error };
}

export async function getUserFavorites(userId: string) {
  const { data, error } = await supabase
    .from('user_favorites')
    .select(`
      *,
      projects(*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  return { data, error };
}

// Usar créditos
export async function useCredits(userId: string, creditsToUse: number) {
  const { data, error } = await supabase.rpc('use_credits', {
    user_uuid: userId,
    credits_to_use: creditsToUse
  });
  
  return { success: data, error };
}

// Adicionar mídia ao projeto
export async function addMediaToProject(projectId: string, mediaData: any) {
  const { data, error } = await supabase
    .from('media_files')
    .insert({
      project_id: projectId,
      ...mediaData
    })
    .select()
    .single();
  
  return { data, error };
}

// Adicionar prompt ao projeto
export async function addPromptToProject(projectId: string, promptData: any) {
  const { data, error } = await supabase
    .from('prompts')
    .insert({
      project_id: projectId,
      ...promptData
    })
    .select()
    .single();
  
  return { data, error };
}
