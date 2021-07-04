import request from "../utils/reques";

export function article() {
  return request({
    url: "/test ",
    method: "get"
  });
}