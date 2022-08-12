import { Axios } from "axios";

const axios = new Axios({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const CorrespondenceAPIService = {
    create: async ({data}) => {
        const response = await axios.post(
            "/correspondences",
            JSON.stringify({data:data})
        )
        return JSON.parse(response.data).data;
    }
}
export {CorrespondenceAPIService}