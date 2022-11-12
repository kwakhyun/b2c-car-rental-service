import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VehicleBasic, VehicleFuelType, VehicleSegment } from '../types';
import { api } from '../api';

type GetVehicleValues = {
  fuelType?: VehicleFuelType;
  segment?: VehicleSegment | '';
};

type ResponseValues = {
  data: { payload: VehicleBasic[] };
  status: number;
};

export const useGetVehicles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [vehicles, setVehicles] = useState<VehicleBasic[]>([]);
  const navigate = useNavigate();

  const getVehicles = async (params?: GetVehicleValues) => {
    setIsLoading(true);

    const {
      data: { payload },
      status,
    }: ResponseValues = await api.get('/cars', { params });

    if (status >= 200 && status < 300) {
      setVehicles(payload);
      setIsLoading(false);
    } else {
      navigate('/error', { state: { status } });
      setIsLoading(false);
    }
  };

  return { isLoading, vehicles, getVehicles };
};
