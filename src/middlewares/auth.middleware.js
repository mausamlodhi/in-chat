import httpStatus from "http-status";
import repositories from "../repository";
import { showConsole } from "../utility";
import jwt from "jsonwebtoken";

const { userRepository } = repositories;
export default {
  async userAuthentication(req, res, next) {
    try {
      if (req.headers && req.headers.authorization) {
        const tokenParts = req.headers.authorization?.split(" ");
        if (tokenParts.length === 2) {
          const scheme = tokenParts[0];
          const token = tokenParts[1];
          if (/^Bearer$/i.test(scheme)) {
            const decodedToken = await jwt.verify(token);
            if (decodedToken) {
                const user = await userRepository.checkUser({email:decodedToken?.email});
                if(user){
                    req.user = user;
                    next();
                }else{
                    const error = new Error("USER_NOT_EXISTS");
                    error.status = httpStatus.BAD_REQUEST;
                    error.message = "USER_NOT_EXISTS";
                    next(error);      
                }
            } else {
              const error = new Error("TOKEN_NOT_FOUND");
              error.status = httpStatus.BAD_REQUEST;
              error.message = "UNAUTHORIZED_ACCESS";
              next(error);
            }
          } else {
            const error = new Error("TOKEN_BAD_FORMAT");
            error.status = httpStatus.UNAUTHORIZED;
            error.message = "SESSION_EXPIRE";
            next(error);
          }
        } else {
          const error = new Error("TOKEN_BAD_FORMAT");
          error.status = httpStatus.UNAUTHORIZED;
          error.message = "UNAUTHORIZED_USER_ACCESS";
          next(error);
        }
      } else {
        const error = new Error("TOKEN_NOT_FOUND");
        error.status = httpStatus.BAD_REQUEST;
        error.message = "UNAUTHORIZED_ACCESS";
        next(error);
      }
    } catch (error) {
      error.status = httpStatus.UNAUTHORIZED;
      next(error);
    }
  },
  async checkUser(req, res, next) {
    try {
      const {
        body: { email },
      } = req;
      const user = await userRepository.checkUser({ email });
      if (user?._id) {
        return res.status(httpStatus.BAD_REQUEST).json({
          status: false,
          data: null,
          message: "USER_ALREADY_EXISTS",
        });
      } else {
        next();
      }
    } catch (error) {
      showConsole(error);
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: false,
        data: null,
        message: "INTERNAL_SERVER_ERROR",
        error,
      });
    }
  },
};
