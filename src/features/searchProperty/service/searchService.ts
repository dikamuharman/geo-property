import { AxiosInstance } from "axios";
import axiosIntance from "../../../lib/axios";
import { ISearchResponse } from "../types/search-type";

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
}

const searchService = new SearchService();
export default searchService;
