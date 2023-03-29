<script setup>

</script>

<template>
    <div id='hero' class="md:h-screen grid place-content-center" data-aos="fade-up" data-aos-duration="1500">

      <div class="flex flex-col items-center">

        <h1 data-aos="fade-up" data-aos-duration="2000">Jennifer Payan</h1>
        <strong data-aod="fade-up" data-aos-duration="2500" class=" font-normal">Emerging Archivist and Art Professional</strong>
      </div>



    </div>
</template>

<style  scoped>

#hero {
  height: 95vh;
  background-image: url("/jenny_background_image.svg");
  background-repeat: no-repeat;
  background-position: center;
  font-family: Helvetica;
  font-kerning: initial;
  font-weight: bold;



}

h1 {
  font-size: min(4rem,10rem);
  text-align: center;

}

strong {
  font-size: min(1.3rem, 4rem)
}

@media screen and (max-width: 800px){
  #hero {
    height: 65vh;
  }
}


</style>