const ROUTES = {
    HOME: '/',
    TRIPS: '/trips',
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    ADMIN: '/admin',
    MODERATOR: '/mod',
    CREATE: '/create',
    UPDATE: '/update/:id',
    DELETE: '/delete/:id',
    DETAILS: '/details/:id',
    SEARCH: '/search',
    SEARCH_RESULT: '/search/:query',
    NOT_FOUND: '/404',
    SERVER_ERROR: '/500',
    FORBIDDEN: '/403',
    UNAUTHORIZED: '/401',
    REDIRECT: '/redirect',
    REDIRECT_TO: '/redirect/:url'
};

export default ROUTES;