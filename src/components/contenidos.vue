<template>
  <div class="contenedor">
       <center><h4>Por favor activar los subtitulos del video (puedes hacerlo con la tecla "C")</h4></center>
    <div
      justific="center"
      aling="left"
      class="pantalla embed-container"
      border="20px"
    >
     <iframe width="985" height="450" 
     src="https://www.youtube.com/embed/xBcZ7LFwqWQ" 
     title="YouTube video player" frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
     </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.degrade {
  background: radial-gradient(200px top, ellipse, white, #1162ac, black);
}

.pantalla {
  overflow: hidden;
  height: 500px;
  width: auto;
  display: flex;
  align-items: center;
  margin-left: 40px;
}
</style>