<script setup>

const experiences = ref([

  ///add experience information here
  {
    id:1,
    title: 'Academy of Motion Picture Arts and Sciences',
    date: '2022',
    role: 'Awards Collection Archival Intern',
    description: [
      {item: 'Verified and described content in the Academy’s data management system, Axiell Collections'},
      {item: 'Viewed and compared files and videotapes using various standard-definition videotape decks.'},
      {item: 'Worked with Curator to address other cataloguing issues.'}

    ]
  },
  {
    id:2,
    title: 'Los Angeles County Museum of Art (LACMA)',
    date: '2020-2022',
    role: 'Registration and Collections Information Intern',
    description: [
      {item: 'Updated The Museum System (TMS) database with courier information, lender requirements, and crate information.'},
      {item: 'Created incoming/outgoing exhibition crate labels and install/deinstall object tags.'},
      {item: 'Created a prep checklist for future exhibitions.'},
      {item: 'Conducted gallery inventories and update gallery locations in TMS.'},
      {item: 'Shadowed and supported Exhibition Registrars during exhibition installations and deinstallations.'},


    ]
  },
  {
    id:3,
    title: 'Andrew W. Mellon Curatorial Summer Academy',
    date: '2019',
    role: 'Awards Collection Archival Intern',
    description: [
      {item: 'Co-curated a virtual photographic exhibition from the Majorie and Leonard Vernon collection.'},
      {item: 'Researched artists and artworks, wrote gallery text and object labels and planned public programs'},


    ]
  },
  {
    id:4,
    title: 'Resources Center of the Autry Museum of the American West ',
    date: '2022-Present',

    role: 'Library Page',
    description: [
      {item: 'Works with the Reference team to retrieve and shelve collection items related to internal and external research requests'},
      {item: 'Assists with the collections management responsibilities related to the tracking, preservation, barcoding, inventorying, condition inspecting and processing of library and archive materials.'},
      {item: 'Determine appropriate housing for collection materials, rehouse collections, and practice collection care principles'},
      {item: 'Assists in fulfilling internal and external reproduction and digitization requests.'}



    ]
  },
  {
    id:5,
    title: 'Women in Archives Workshops',
    date: '2020',
    role: 'Participant',
    description: [
      {item: 'Introduced to cataloguing, condition analysis of archival and historical material, conserving archival and historical material, interpreting archival material and working with primary source materials.'},
      {item: 'Completed a finding aide, learned how to handle works on paper, and contributed material that was included in the Women in the Archives exhibition at the Autry Museum of the American West.'},




    ]
  },
  {
    id:6,
    title: 'Visual Communications',
    date: '2020-2021',
    role: 'Archives Program Associate',
    description: [
      {item: 'Worked on the preservation and digitization of archival contents from the VC Archives particularly from the Japanese-American collection that reflects Asian Pacific histories, movements, and experiences.'},
      {item: 'Curated a virtual exhibition on Historypin, wrote exhibition summary and captions.'},




    ]
  },
  {
    id:7,
    title: 'Vincent Price Art Museum',
    date: '2021',
    role: 'Curatorial and Collections Intern',
    description: [
      {item: 'Worked on the preservation and digitization of archival contents from the VC Archives particularly from the Japanese-American collection that reflects Asian Pacific histories, movements, and experiences.'},
      {item: 'Curated a virtual exhibition on Historypin, wrote exhibition summary and captions.'},




    ]
  },
  {
    id:8,
    title: 'Vincent Price Art Museum',
    date: '2021-2022',
    role: 'Museum Guide',
    description: [
      {item: 'Led tours of the museum’s permanent collection and rotating exhibitions.'},
      {item: 'Monitored the museum’s seven gallery spaces, front desk, and lobby.'},
      {item: 'Engaged with students and the general public to answer questions and provide information about the objects on view.'},
      {item: 'Provided exceptional customer service by greeting visitors and ensured all guests had proper access.'},






    ]
  },
  {
    id:9,
    title: 'UCLA Chicano Studies Research Center',
    date: '2022',
    role: 'Undergraduate Student Researcher',
    description: [
      {item: 'Processed and condition inspected archival materials from cultural heritage collections.'},
      {item: 'Rehoused and relabeled folders from the Cyclona and Gronk archives.'},







    ]
  },
  {
    id:10,
    title: 'UCLA Chicano Studies Research Center',
    date: '2020',
    role: 'Archival Preservation and Research Intern',
    description: [
      {item: 'Introduced to archival principles and theory; processing art archives and cultural heritage collections; research and description for art objects; digital preservation and access; and other museum activities the CSRC performs to manage and provide access to their art collections.'},
      {item: 'Focused on the role research and preservation in developing access, outreach, and user engagement for exhibitions.'},
      {item: 'Researched objects in Gronk Paper archives and wrote descriptions in ArchivesSpace and Omeka.'},

    ]
  },
  {
    id:11,
    title: 'Self-Help Graphics & Arts',
    date: '2019-Present',
    role: 'Teaching Artist Assistant',
    description: [
      {item: 'Facilitate mobile workshops in areas of printmaking, such as silkscreening, linocut, drypoint and monotype, among others.'},
      {item: 'Setting up classroom/workshop space, materials and supplies for Teaching Artists; assisting Teaching Artists with supervision of children during classes; cleaning up classroom/workshop space at conclusion of class.'},
      {item: 'Trained on peer-to-peer workshop facilitation, professional development, and social entrepreneurship.'},

    ]
  },
  {
    id:11,
    title: 'Self-Help Graphics & Arts',
    date: '2018',
    role: 'Documentation and Archives Intern',
    description: [
      {item: 'Digitized, handled and organized Self Help Graphics & Art’s (SHG) serigraph collection.'},
      {item: 'Updated catalogue information to SHG’s inventory and archive database'},
      {item: 'Assisted staff with updating the website in preparation for Self Help Graphics & Art’s Annual Print Fair.'},
      {item: 'Gained skills in archiving, digitizing, and researching print inventory for database, website and Annual Print Fair.'},


    ]
  },



  ])

</script>

<template>
  <div id="experience" class="py-16 md:pb-16">
<h1 >Experience</h1>

    <div class="experience-container flex flex-col md:flex-row flex-wrap md:px-24  m-auto py-16  justify-center">


     <div v-for="experience in experiences" :key="experience.id " class="md:mr-8 mt-12 md:px-0 px-6 md:p-16 md:w-1/3  " data-aos="fade-up">


        <strong class="text-3xl ">{{experience.title}}</strong>
        <p class="text-2xl ">{{experience.role}}</p>
        <p class="text-xl text-gray-500 p-2 ">{{experience.date}}</p>

        <ul class="md:pr-6 pt-4 text-black " v-for="item in experience.description" :key="item.description">


          <li class="experience-description md:pr-16">{{item.item}}</li>


        </ul>








     </div>





    </div>
  </div>
</template>

<style  scoped>


h1 {
  font-size: min(3rem,20rem);
  font-weight: bold;
}


#experience {
  min-height: 95vh;
}

.experience-description {
  font-size: 1.1rem;
}



</style>