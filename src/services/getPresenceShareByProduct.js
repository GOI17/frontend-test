import http from "libs/http";

const url = "presence-share-chart/";

export default function getPresenceShareByProduct() {
  return http.get({ url });
}
