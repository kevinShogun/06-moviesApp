export abstract class HttpAdapter {
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;
  // abstract get<T>(url: string, optins?: any): Promise<any>;
}
