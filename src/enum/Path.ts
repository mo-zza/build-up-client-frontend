export enum PAGE_PATH {
    LOGIN = '/login',
    HOME ='/',
    SIGN_UP = '/signup',
    MY_PAGE = '/mypage',
    CHANGE_PASSWORD = '/change-password',
}

export enum API_PATH {
    // 로그인
    SIGN_IN = '/auth/sign-in',
    // 회원가입
    SIGN_UP = '/members/sign-up',
    // 이메일 혹은 닉네임 중복 확인
    MEMBER_EXISTS = '/members/exists',
    // 이메일 인증 요청 (회원가입)
    VERIFY_SIGN_UP = '/auth/verify/sign-up',
    // 이메일 인증 요청 (비밀번호 변경)
    VERIFY_RESET_PASSWORD = '/auth/verify/reset-password',
    // 이메일 인증 확인
    VERIFY_CODE = '/auth/verify',
}