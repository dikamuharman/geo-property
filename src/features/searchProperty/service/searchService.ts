import { AxiosInstance } from 'axios';
import axiosIntance from '../../../lib/axios';
import { IGeojsonSearchResponse, ISearchResponse } from '../types/search-type';

class SearchService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }
  public async searchProperty(keyword: string): Promise<ISearchResponse> {
    const response = await this.axiosIntance.get<ISearchResponse>(
      `/search/${keyword}`
    );

    return response.data;
  }
  public async searchPropertyByLocation(
    location: number[]
  ): Promise<IGeojsonSearchResponse> {
    const response = await this.axiosIntance.post<IGeojsonSearchResponse>(
      `/property/point`,
      {
        center_point: location,
      }
    );

    return response.data;
  }
}

const searchService = new SearchService();
export default searchService;
