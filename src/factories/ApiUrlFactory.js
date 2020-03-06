export default {
    events: {
        getForWeek: (startDate, endDate) => `/event?from=${startDate}&to=${endDate}`,
        postEvent: () => `/event`,
        updateEvent: () => `/event`,
        deleteEvent: (id, userKey) => `/event?userKey=${userKey}&eventId=${id}`
    },
    nonApprovedEvents: {
        get: (userKey) => `/nonapprovedevent?userkey=${userKey}`,
        getCount: (userKey) => `/nonapprovedevent/count?userKey=${userKey}`,
        approve: (userKey) => `/nonapprovedevent?userKey=${userKey}`
    },
    fields: {
        getFieldSizes: (fieldId, timeFrom, timeTo) => `/fieldsize?fieldId=${fieldId}&from=${timeFrom}&to=${timeTo}`
    },
    login: {
        signin: (username, password) => `/login?email=${username}&password=${password}`,
        signout: (userkey) => `/login?userkey=${userkey}`
    },
    changingRooms: {
        getAll: () => `/ChangingRoom`,
        get: (timeFrom, timeTo) => `/ChangingRoom?from=${timeFrom}&to=${timeTo}`
    }
}