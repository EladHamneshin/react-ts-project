const ROUTES = {
    HOME: '/',
    TRIPS: '/trips',
    TRIP_DETAILS: '/trip/:id',
    LOGIN: '/login',
    REGISTER: '/register',
    CREATE: 'trip/create',
    UPDATE: '/trip/update/:id',
    NOT_FOUND: '/404',
    SERVER_ERROR: '/500',
    FORBIDDEN: '/403',
    UNAUTHORIZED: '/401',
    REDIRECT: '/redirect',
    REDIRECT_TO: '/redirect/:url',
    DEFAULT: '*'
};

export default ROUTES;