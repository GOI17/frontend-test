import http from "libs/http";

const url = "beer-products/";

export default function getTableProducts() {
  return http.get({ url });
}
