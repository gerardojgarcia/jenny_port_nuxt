<script setup>

const images = ref([

    ///add image links here
  {
    id:1,
    src: '/JennyP%20collage.JPG',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 2,
    src: '/collage jpeg003.jpg',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 3,
    src: '/-DSC0033.JPG',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 4,
    src: '/-DSC0052.JPG',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 5,
    src: '/-DSC0056.JPG',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 6,
    src: '/2DDesig2019.jpg',
    alt: 'Collage created by Jennifer Payan'
  },
  {
    id: 7,
    src: '/From CAFO to dinner table.JPG',
    alt: 'Collage created by Jennifer Payan'
  },




])

</script>

<template>
  <div class="py-16 md:pb-16">
<strong  class="art-title text-6xl">Art</strong>

    <div class="image-container flex flex-wrap md:px-32 py-6 md:py-16  justify-center">


      <img :src="image.src" :alt="image.alt" v-for="image in images" :key="image.id" class="mt-16 mr-16 hover:shadow-2xl hover:scale-125" data-aos="fade-up" data-aos-duration="1000">

      
      
      
      
    </div>
  </div>
</template>

<style scoped>

.art-title {
  font-size: min(5rem, 25rem);
}

img {
  max-width: 35rem;

  transition: all 300ms;

}

</style>