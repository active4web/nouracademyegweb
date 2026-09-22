export interface ApiSubscription {
  id: number;
  user_id?: number;
  course_id?: number | null;
  package_id?: number | null;
  name?: string;
  package_name?: string;
  status?: string;
  start_date?: string;
  end_date?: string;
  paid_amount?: string;
  currency?: string;
  notes?: string | null;
  created_at?: string;
  updated_at?: string;
  [key: string]: unknown;
}

export interface ApiUserProfile {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  code: string;
  whatsapp: string | null;
  parent_email: string | null;
  parent_phone: string | null;
  parent_whatsapp: string | null;
  country: string;
  email_verified_at: string | null;
  image: string | null;
  role: string;
  created_at: string;
  updated_at: string;
  subscriptions: ApiSubscription[];
}

export interface UserProfileApiResponse {
  status: string;
  message?: string;
  data: ApiUserProfile;
}