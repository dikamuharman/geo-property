import { AxiosInstance } from 'axios';
import axiosIntance from '../../../lib/axios';
import {
  IPropertyListResponse,
  IPropertyResponse,
} from '../../../types/propertyType';
import useUserStore from '../../authentication/store/useUserStore';

class ListAddsService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }
  public async listAdds(): Promise<IPropertyListResponse> {
    const response = await this.axiosIntance.post<IPropertyListResponse>(
      'property/own'
    );

    return response.data;
  }

  public async listAddsById(id: string): Promise<IPropertyResponse> {
    const token = useUserStore.getState().token;
    const response = await this.axiosIntance.get<IPropertyResponse>(
      `property/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
}

const listAddsService = new ListAddsService();
export default listAddsService;
