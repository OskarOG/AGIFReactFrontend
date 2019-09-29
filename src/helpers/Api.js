import Axios from "axios";

export default {
    baseUrl: "http://localhost:57676/api",
    events() {
        return {
            getForWeek: (startDate, endDate) => Axios.get(`${this.baseUrl}/event?from=${startDate}&to=${endDate}`),
            postEvent: (data) => Axios.post(`${this.baseUrl}/event`, data)
        }
    },
    fields() {
        return {
            getFields: () => Axios.get(`${this.baseUrl}/field`),
            getFieldSizes: (fieldId, timeFrom, timeTo) => Axios.get(`${this.baseUrl}/fieldsize?fieldId=${fieldId}&from=${timeFrom}&to=${timeTo}`)
        }
    }
}