import Axios from "axios";

export default {
    baseUrl: "http://localhost:8080/api",
    events() {
        return {
            getForWeek: (startDate, endDate) => Axios.get(`${this.baseUrl}/event?startDate=${startDate}&endDate=${endDate}`)
        }
    }
}