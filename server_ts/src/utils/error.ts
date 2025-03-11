import errorCode from "../constants/error_codes";
import { HttpStatusCode } from "../constants/http";

class AppError extends Error {
  constructor(
    public statusCode: HttpStatusCode,
    public message: string,
    public errorCode?: errorCode
  ) {
    super(message);
  }
}

export default AppError;
