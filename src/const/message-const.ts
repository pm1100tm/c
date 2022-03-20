export class MessageConstService {
  /** constant variable success message */
  public static SUCCESS_MSG = 'SUCCESS'

  /** constant variable error message */
  public static ERROR_MSG_INTERNAL_SERVER_ERROR = 'SERVER ERROR';

  public static ERROR_MSG_NO_USER_DATA = '회원정보가 없습니다.';
  public static ERROR_MSG_IS_ACTIVE_FALSE = '휴면계정입니다.';
  public static ERROR_MSG_WRONG_USER_INFO = '입력하신 정보가 일치하지 않습니다.';

  public static ERROR_MSG_ALREADY_EXIST_USER = '가입된 유저입니다.';
  public static ERROR_MSG_REQUIRED_INPUT = '필수입력 값이 없습니다.';
}
