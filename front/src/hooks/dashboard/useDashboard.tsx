import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';
import type { Dashboard } from '../../interface/dashboard';



async function fetchDashboard() {
  const { data } = await api.get<Dashboard>('/dashboard');
  return data;
}

export function useDashboard() {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboard,
  });
}
