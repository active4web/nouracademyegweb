export interface ApiTeacherCategory {
  id: number;
  name: string;
  is_active: number;
  created_at: string;
}

export interface ApiTeacherQualification {
  id: number;
  title: string;
  year: string;
  institution: string;
  is_chain_connected: boolean;
  is_authenticated: boolean;
}

export interface ApiTeacherIjazah {
  id: number;
  title: string;
  is_chain_connected: boolean;
  is_authenticated: boolean;
}

export interface ApiTeacherReview {
  id: number;
  rating: number;
  comment: string;
  reviewer_name: string;
  reviewer_country: string | null;
  reviewer_role: string | null;
  reviewer_avatar: string | null;
  initial: string | null;
  is_manual: boolean;
  date: string;
  rateable_type: string;
  rateable_id: number;
  user: unknown | null;
  created_at: string;
}

export interface ApiTeacherSpecialty {
  id: number;
  name: string;
}

export interface ApiTeacherProfile {
  id: number;
  display_name: string;
  role: string;
  bio: string | null;
  description: string | null;
  image: string | null;
  experience_years: number;
  is_verified: number;
  is_active: number;
  categories: ApiTeacherCategory[];
  specialties: ApiTeacherSpecialty[];
  qualifications: ApiTeacherQualification[];
  ijazahs: ApiTeacherIjazah[];
  reviews: ApiTeacherReview[];
  rating_avg: number;
  reviews_count: number;
  students_count: number;
  created_at: string;
}

export interface TeacherProfileApiResponse {
  status: string;
  message: string;
  data: ApiTeacherProfile;
}
