export interface Resdata {
    id: number;
    name: string;
    categories: string[];
    profile_image_url: string;
    images: string[];
    operation_time: Operationtime[];
    address: string;
    rating: number;
  }
  
  export interface Operationtime {
    day: string;
    time_open: string;
    time_close: string;
  }