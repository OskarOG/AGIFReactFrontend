export default {
    events: {
        getForWeek: (startDate, endDate) => `/event?from=${startDate.getUnixTimestamp()}&to=${endDate.getUnixTimestamp()}`,
        postEvent: () => `/event`,
        updateEvent: () => `/event`,
        deleteEvent: (id) => `/event?eventId=${id}`
    },
    nonApprovedEvents: {
        get: () => `/nonapprovedevent`,
        getCount: () => `/nonapprovedevent/count`,
        approve: () => `/nonapprovedevent`
    },
    fields: {
        getFieldSizes: (fieldId, timeFrom, timeTo) => `/fieldsize?fieldId=${fieldId}&from=${timeFrom.getUnixTimestamp()}&to=${timeTo.getUnixTimestamp()}`
    },
    login: {
        signin: (username, password) => `/login?email=${username}&password=${password}`,
        signout: () => `/login`
    },
    changingRooms: {
        getAll: () => `/ChangingRoom`,
        get: (timeFrom, timeTo) => `/ChangingRoom?from=${timeFrom.getUnixTimestamp()}&to=${timeTo.getUnixTimestamp()}`
    }
}
