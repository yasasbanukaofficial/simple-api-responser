export function success(data = null, message = "Request successful", status = 200) {
  return {
    success: true,
    status,
    message,
    data,
  };
}

export function error(message = "Request failed", status = 400) {
  return {
    success: false,
    status,
    message,
  };
}
