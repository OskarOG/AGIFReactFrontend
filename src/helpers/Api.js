import Axios from "axios";

export default {
    baseUrl: "https://localhost:44387/api",
    events() {
        return {
            getForWeek: (startDate, endDate) => Axios.get(`${this.baseUrl}/event?from=${startDate}&to=${endDate}`),
            postEvent: (data) => Axios.post(`${this.baseUrl}/event`, data),
            updateEvent: (data) => Axios.put(`${this.baseUrl}/event`, data)
        };
    },
    nonApprovedEvents() {
        return {
            get: (userKey) => Axios.get(`${this.baseUrl}/nonapprovedevent?userkey=${userKey}`),
            getCount: (userKey) => Axios.get(`${this.baseUrl}/nonapprovedevent/count?userKey=${userKey}`),
            approve: (userKey, events) => Axios.put(`${this.baseUrl}/nonapprovedevent?userKey=${userKey}`, events)
        };
    },
    eventTypes() {
        return {
            getAll: () => Axios.get(`${this.baseUrl}/eventtype`)
        };
    },
    fields() {
        return {
            getFields: () => Axios.get(`${this.baseUrl}/field`),
            getFieldSizes: (fieldId, timeFrom, timeTo) => Axios.get(`${this.baseUrl}/fieldsize?fieldId=${fieldId}&from=${timeFrom}&to=${timeTo}`)
        };
    },
    login() {
        return {
            signin: (username, password) => Axios.get(`${this.baseUrl}/login?email=${username}&password=${password}`),
            signout: (userkey) => Axios.delete(`${this.baseUrl}/login?userkey=${userkey}`)
        };
    }
}
