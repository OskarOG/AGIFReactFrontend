export default {
    baseUrl: process.env.NODE_ENV === "development" ? "https://localhost:44387/api" : "/api",
    events() {
        return {
            getForWeek: (startDate, endDate) => `${this.baseUrl}/event?from=${startDate}&to=${endDate}`,
            postEvent: () => `${this.baseUrl}/event`,
            updateEvent: () => `${this.baseUrl}/event`,
            deleteEvent: (id, userKey) => `${this.baseUrl}/event?userKey=${userKey}&eventId=${id}`
        };
    },
    nonApprovedEvents() {
        return {
            get: (userKey) => `${this.baseUrl}/nonapprovedevent?userkey=${userKey}`,
            getCount: (userKey) => `${this.baseUrl}/nonapprovedevent/count?userKey=${userKey}`,
            approve: (userKey) => `${this.baseUrl}/nonapprovedevent?userKey=${userKey}`
        };
    },
    fields() {
        return {
            getFieldSizes: (fieldId, timeFrom, timeTo) => `${this.baseUrl}/fieldsize?fieldId=${fieldId}&from=${timeFrom}&to=${timeTo}`
        };
    },
    login() {
        return {
            signin: (username, password) => `${this.baseUrl}/login?email=${username}&password=${password}`,
            signout: (userkey) => `${this.baseUrl}/login?userkey=${userkey}`
        };
    },
    changingRooms() {
        return {
            getAll: () => `${this.baseUrl}/ChangingRoom`,
            get: (timeFrom, timeTo) => `${this.baseUrl}/ChangingRoom?from=${timeFrom}&to=${timeTo}`
        }
    }
}
