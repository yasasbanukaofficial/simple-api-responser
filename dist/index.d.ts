export function success(
  data?: any,
  message?: string,
  status?: number
): {
  success: true;
  status: number;
  message: string;
  data: any;
};

export function error(
  message?: string,
  status?: number
): {
  success: false;
  status: number;
  message: string;
};
