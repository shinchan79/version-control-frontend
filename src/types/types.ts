// Interface cho Tag
export interface Tag {
    id: string;
    name: string;
  }
  
  // Interface cho Version
  export interface Version {
    id: string;
    content: string;
    createdAt: string;
    tags: Tag[];
  }
  
  // Interface cho API Response
  export interface ApiResponse<T> {
    data: T;
    message?: string;
    error?: string;
  }
  
  // Interface cho Create Version Request
  export interface CreateVersionRequest {
    content: string;
    tags?: string[];
  }