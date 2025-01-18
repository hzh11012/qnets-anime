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

const DAY_MAP: { [key: number]: string } = {
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六',
    0: '周日'
};

export {
    BAN_SCOPE,
    VISITOR_SCOPE,
    GENERAL_SCOPE,
    MEMBER_SCOPE,
    ADMIN_SCOPE,
    SCOPE_MAP,
    DAY_MAP
};
