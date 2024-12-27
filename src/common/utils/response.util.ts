export function formatResponse(
  success: boolean,
  message: string,
  data: any = null,
  statusCode = 200,
) {
  return {
    success,
    statusCode,
    message,
    data,
  };
}
