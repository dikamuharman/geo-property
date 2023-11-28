import { AxiosInstance } from "axios";
import axiosIntance from "../../../lib/axios";
import {
  IPropertyResponse,
  IPropertyListResponse,
} from "../../../types/propertyType";

class ListAddsService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }
  public async listAdds(): Promise<IPropertyListResponse> {
    const response = await this.axiosIntance.post<IPropertyListResponse>(
      "property/own"
    );

    return response.data;
  }

  public async listAddsById(id: number): Promise<IPropertyResponse> {
    const response = await this.axiosIntance.get<IPropertyResponse>(
      `property/${id}`
    );

    return response.data;
  }
}

const listAddsService = new ListAddsService();
export default listAddsService;
