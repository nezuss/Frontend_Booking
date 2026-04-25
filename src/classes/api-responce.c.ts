export class ApiResponse {
  success: boolean;
  content: string;

  constructor(data: { success: boolean; content: string }) {
    this.success = data.success;
    this.content = data.content;
  }
}
