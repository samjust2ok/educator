import { themed } from "./theme"

export const DASHBOARD_ROUTES = {
    MANAGE_RESULT: {
        path: '/',
        name: 'Manage Result',
        icon: 'grade'
    },
    ADMIN_SETTINGS: {
        path: '/admin-settings',
        name: 'Admin Settings',
        icon: 'settings'
    },
    MANAGE_STAFF: {
        path:'/manage-staff',
        name: 'Manage Staff',
        icon: 'verified_user'
    },
    MANAGE_STUDENTS: {
        path: '/manage-students',
        name: 'Manage Students',
        icon: 'group'
    },
    SCHOOL_CALENDAR: {
        path: '/school-calendar',
        name: 'School Calendar',
        icon: 'calendar_today'
    },
}

export const DASHBOARD_ROUTE_ORDER = [
    "MANAGE_RESULT",
    "ADMIN_SETTINGS",
    "MANAGE_STAFF",
    "MANAGE_STUDENTS",
    "SCHOOL_CALENDAR"
]


export const MANAGEMENT_DASHBOARD_ROUTES = {
    MANAGE_STAFF: {
        path: '/',
        name: 'Manage Staff',
        icon: 'perm_identity',
        color1: themed.iconB1,
        color2: themed.iconC1,
        desc: 'staffs'
    },
    MANAGE_STUDENTS: {
        path: '/manage-students',
        name: 'Manage Students',
        icon: 'group',
        color1: themed.iconB2,
        color2: themed.iconC2,
        desc: 'students'
    },
    MANAGE_CLASSES: {
        path:'/manage-classes',
        name: 'Manage Classes',
        icon: 'group_work',
        color1: themed.iconB3,
        color2: themed.iconC3,
        desc: 'classes'
    },
    MANAGE_SUBJECTS: {
        path: '/manage-subjects',
        name: 'Manage Subjects',
        icon: 'local_library',
        color1: themed.iconB4,
        color2: themed.iconC4,
        desc: 'subjects'
    },
}

export const MANAGEMENT_DASHBOARD_ROUTE_ORDER = [
    "MANAGE_STAFF",
    "MANAGE_STUDENTS",
    "MANAGE_CLASSES",
    "MANAGE_SUBJECTS"
]