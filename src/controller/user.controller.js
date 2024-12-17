import httpStatus from "http-status";
import repositories from "../repository";

const { userRepository } = repositories;
export default {
  /**
   * User signup controller
   * @param {Object} req
   * @returns
   */
  async userSignup(req, res, next) {
    try {
      const {
        body: {
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          profileImage,
          isVerified,
        },
      } = req;
      const signupData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        profileImage,
        isVerified,
      };
      const result = await userRepository.userSignup(signupData);
      if(result._id){
        return res.status(httpStatus.OK).json({
            status:true,
            data:result,
            message:'USER_SIGNUP_SUCCESS'
        });
      }else{
        return res.status(httpStatus.BAD_REQUEST).json({
            status:false,
            data:result,
            message:'SOMETHING_WENT_WRONG'
        });
      }
    } catch (error) {
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        status: false,
        data: null,
        message: "INTERNAL_SERVER_ERROR",
        error,
      });
    }
  },
};
