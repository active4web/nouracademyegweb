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

export interface ApiCourse {
  id: number | string;
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
  features: ApiCourseFeature[];
  students_count: number;
  created_at: string;
}

export interface CoursesPagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface CoursesApiResponse {
  status: string;
  message: string;
  data: {
    data: ApiCourse[];
    pagination: CoursesPagination;
  };
}
