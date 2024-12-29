/**
 * 封禁
 */
const BAN_SCOPE = -1;

/**
 * 游客
 */
const VISITOR_SCOPE = 0;

/**
 * 普通用户
 */
const GENERAL_SCOPE = 1;

/**
 * 正式会员
 */
const MEMBER_SCOPE = 2;

/**
 * 管理员
 */
const ADMIN_SCOPE = 3;

const SCOPE_MAP: { [key: number]: string } = {
    '-1': '封禁',
    0: '游客',
    1: '普通用户',
    2: '正式会员',
    3: '管理员'
};

export {
    BAN_SCOPE,
    VISITOR_SCOPE,
    GENERAL_SCOPE,
    MEMBER_SCOPE,
    ADMIN_SCOPE,
    SCOPE_MAP
};
