export interface ApiPackageFeature {
  id: number;
  description: string;
}

export interface ApiPackage {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_price: string | null;
  duration_in_days: number;
  sessions_count: number;
  is_active: number;
  features: ApiPackageFeature[];
  created_at: string;
}

export interface PackagesPagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface PackagesApiResponse {
  status: string;
  message: string;
  data: {
    data: ApiPackage[];
    pagination: PackagesPagination;
  };
}

export interface ApiCurrency {
  id: number;
  name: string;
  code: string;
  rate: number;
  is_active: boolean;
  created_at: string;
}

export interface CurrenciesPagination {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface CurrenciesApiResponse {
  status: string;
  message: string;
  data: {
    data: ApiCurrency[];
    pagination: CurrenciesPagination;
  };
}
