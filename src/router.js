import Vue from "vue";
import VueRouter from "vue-router";
import inicio from "./components/inicio";
import principal from "./components/principal";
import contenido from "./components/contenidos";
import actividades from "./components/actividades";
import evaluacion from "./components/evaluacion";
import creditos from "./components/creditos";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: inicio,
  },
  {
    path: "/principal",
    name: "principal",
    component: principal,
    children: [
      {
        path: "/contenidos",
        name: "contenidos",
        component: contenido,
      },
      {
        path: "/actividades",
        name: "actividades",
        component: actividades, 
      },
      {
        path: "/evaluacion",
        name: "evaluacion",
        component: evaluacion,
      },
      {
        path: "/creditos",
        name: "creditos",
        component: creditos,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;