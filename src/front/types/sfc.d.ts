import Vue from 'vue';
import VurRouter from 'vue-router';
import { Route } from 'vue-router';
import { ChartData, ChartOptions } from 'chart.js';
declare module 'vue/types/vue' {
  interface Vue {
    $router: VurRouter;
    $route: Route;
    renderChart: (chartData: ChartData, options: ChartOptions) => void;
    chartData: ChartData;
  }
}
