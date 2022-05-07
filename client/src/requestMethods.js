import axios from "axios";

const BASE_URL = "http://localhost:5001/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmM3YzBjMGZhMmMwMDBjMDc1MTdkMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTg4NTU2MywiZXhwIjoxNjUyMTQ0NzYzfQ.3L1VtgJ2ASEQtdSMMAGnKdzghRiyulbEFQUBSHpFDpY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
