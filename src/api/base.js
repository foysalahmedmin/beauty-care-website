import axios from "axios";

const base = axios.create({
    baseURL: "https://admin.arkangelclinic.org",
});
export default base;