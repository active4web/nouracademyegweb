export interface ApiCourseCategory {
  id: number;
  name: string;
  is_active: number;
  created_at: string;
}

export interface ApiCourseFeature {
  id: number;
  title: string;
  description: string;
}

export interface ApiCourseOutcome {
  id: number;
  description: string;
}

export interface ApiCourseRequirement {
  id: number;
  name: string;
}

export interface ApiCourseDetail {
  id: number;
  title: string;
  description: string;
  video: string | null;
  thumbnail: string | null;
  image: string | null;
  target_level: string;
  total_hours: string;
  certificate_type: string;
  teaching_language: string;
  is_active: number;
  category: ApiCourseCategory | null;
  outcomes: ApiCourseOutcome[];
  requirements: ApiCourseRequirement[];
  features: ApiCourseFeature[];
  students_count: number;
  created_at: string;
}

export interface CourseDetailApiResponse {
  status: string;
  message: string;
  data: ApiCourseDetail;
}
