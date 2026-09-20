export interface ApiPackageFeature {
  id: number;
  description: string;
}

export interface ApiPackageDetail {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_price: string | null;
  currency: string;
  duration_in_days: number;
  sessions_count: number;
  is_active: number;
  features: ApiPackageFeature[];
  created_at: string;
}

export interface PackageDetailApiResponse {
  status: string;
  message: string;
  data: ApiPackageDetail;
}
