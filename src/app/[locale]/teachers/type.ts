export interface ApiTeacherCategory {
  id: number;
  name: string;
  is_active: number;
  created_at: string;
}

export interface ApiTeacher {
  id: number;
  display_name: string;
  role: string;
  image: string | null;
  experience_years: number;
  is_verified: number;
  categories: ApiTeacherCategory[];
  rating_avg: number;
  reviews_count: number;
  students_count: number;
}

export interface TeachersPagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface TeachersApiResponse {
  status: string;
  message: string;
  data: {
    data: ApiTeacher[];
    pagination: TeachersPagination;
  };
}