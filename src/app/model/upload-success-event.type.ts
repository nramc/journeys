export interface CloudinaryUploadSuccessEvent {
  event: string,
  info: CloudinaryUploadSuccessInfo
}

export interface CloudinaryUploadSuccessInfo {
  asset_id: string;
  public_id: string;
  api_key: string;
  version: number;
  version_id: string;
  signature: string;
  format: string;
  resource_type: string;
  created_at: string;
  tags?: string[];
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  access_mode: string;
  original_filename: string;
}
