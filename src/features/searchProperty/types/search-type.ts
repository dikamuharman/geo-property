interface Search {
  name: string;
  center_point: number[];
}

interface IBaseResponse {
  status: number;
  message: string;
}

interface ISearchResponse extends IBaseResponse {
  data?: Search[];
}

export type { ISearchResponse, Search };
