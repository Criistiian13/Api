<template>
  <div class="fondo">
    <v-parallax
      dark
      src="https://englishparaprincipiantes.com/wp-content/uploads/2021/04/los-numeros-en-ingles.jpg"
      height="600"
      class="fondo1"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-container
            responsive
            style="height: 30%; max-width: 930px; width: 720%"
          >
            <v-row>
              <v-col>
               <h1> <p>NUMEROS EN INGLES</p> </h1>
               <h3><b> CRISTIAN BUILES - JHOANA DÍAZ - NATALIA ARIZA</b> </h3>
                
                <div class="text-center">
                  <router-link
                    :to="{ name: 'principal' }"
                    style="text-decoration: none; color: inherit"
                  >
                    <v-btn
                      class="letraB"
                      width="190"
                      rounded
                      color="#2196F3"
                      dark
                      ><b>SIGUIENTE</b></v-btn
                    >
                  </router-link>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
   
  }),
};
</script>

<style>
p {
  font-size: 50px;
  color: transparent;
  font-family: "Lobster", cursive;
  background: linear-gradient(rgb(19, 86, 187), rgb(0, 0, 0));
  -webkit-background-clip: text;
  position: relative;
}

p::after {
  position: absolute;
  width: 100%;
  top: 3px;
  left: 3px;
  color: #000;
  z-index: -1;
}
h3 {
   font-size: 17px;
  color: black;
  -webkit-background-clip: text;
  position: relative;
   width: 100%;
  top: 3px;
  left: 3px;
}
</style>