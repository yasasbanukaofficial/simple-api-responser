function success(data = null, message = "Request successful", status = 200) {
  return {
    success: true,
    status,
    message,
    data,
  };
}

function error(message = "Request failed", status = 400) {
  return {
    success: false,
    status,
    message,
  };
}
