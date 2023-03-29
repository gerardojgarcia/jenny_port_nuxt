<script setup>

const images = ref([

  ///add image links here
  {
    id:1,
    src: '/Final Image 3.JPG',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 2,
    src: '/Final Photo 1.JPG',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 3,
    src: 'IMG-2241.jpg',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 4,
    src: '/MX 19000019.JPG',
    alt: 'Collage created by Jennifer Payan'
  },





])

</script>

<template>
  <div class="py-16 md:pb-16">
    <strong  class="art-title ">Photography</strong>

    <div class="image-container flex flex-col md:flex-row md:flex-wrap md:px-32 py-16  justify-center">


      <img :src="image.src" :alt="image.alt" v-for="image in images" :key="image.id" class="mt-16 md:mr-16 hover:shadow-2xl hover:scale-125" data-aos="fade-up" data-aos-duration="1000">





    </div>
  </div>
</template>

<style scoped>

.art-title {
  font-size: min(17rem, 4rem);
}

img {
  max-width: 45rem;

  transition: all 300ms;

}

</style>