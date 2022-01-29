import http from "libs/http";

const url = "price-evolution-chart/";

export default function getPriceEvolution() {
  return http.get({ url });
}
