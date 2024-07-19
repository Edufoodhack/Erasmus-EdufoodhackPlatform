<template>
  <q-page class="max-container-width">

    <div class="max-container-width bg-dark" style="position:fixed; width:100%;z-index:10;">
      <div class="row justify-center bg-dark q-pb-md q-pt-md">
        <div class="col-12 col-sm-8 text-center">
          <q-btn-group spread>
            <q-btn outline color="primary" text-color="primary" label="Community" icon="people"
              @click="goto(section1)" />
            <q-btn outline color="primary" text-color="primary" label="Challenges" icon="extension"
              @click="goto(section2)" />
            <q-btn outline color="orange" text-color="primary" label="Solutions" icon="collections"
              @click="goto(section3)" />
          </q-btn-group>
        </div>
      </div>
    </div>

    <div class="q-pb-xl" ref="section1"><span><br /></span></div>
    <div class="row justify-center q-pt-xl" style="padding-top:200px;">
      <div class="col-12 col-sm-8 text-center">
        <div class="text-h3 font-teko q-pb-lg">The #edufoodhack Collaborative Network</div>
        <div class="text-body1">
          Welcome to our vibrant community of schools participating in the #edufoodhack initiative! Here, we showcase a
          growing list of educational institutions that are actively engaging with challenge-based learning and
          sustainability in education. This section serves as a hub to find like-minded teachers and schools eager to
          explore innovative learning methods and make a positive impact on environmental sustainability. Join our
          network to share experiences, gain insights, and collaborate on future #edufoodhack events!
        </div>
      </div>
      <div class="col-12 q-py-xl">
        <q-list bordered class="bg-white">
          <q-item v-for="school in schools" :key="school.name">
            <q-item-section avatar>
              <q-avatar square>
                <q-img :src="school.logo" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-weight-bold" lines="1">{{ school.name }}</q-item-label>
            </q-item-section>
            <q-item-section>
              <q-item-label caption lines="2">
                {{ school.info }}
              </q-item-label>
            </q-item-section>


            <q-item-section centre>
              <span class=" text-caption">{{ school.location }} </span>
            </q-item-section>
            <q-item-section side centre>
              <q-icon name="web" color="primary" @click="openUrl(school.website)"></q-icon>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-12 q-pa-md">
        <q-card class="bg-primary q-pa-xl text-dark" style="border-radius:20px;">
          <div class="text-h4 font-teko">Join Our Community</div>
          <div class="text-body1 q-py-xl">
            Interested in adding your school to our network? Simply email our community manager, and we'll be happy to
            include your school in our list. <br /><br />As our community expands, we continue to partner with Dutch
            initiatives like <a class="text-white" href="https://www.mbo-challenge.nl/">MBO Challenge</a> and the <a
              class="text-white" href="https://foodinnovationacademy.nl/3-daagse-hackathon-in-de-fia">Food Innovation
              Academy</a>. Together, we are finding synergies to create enhanced platforms and communities dedicated to
            advancing challenge-based learning and combating food waste. Join us in this dynamic and growing initiative!
          </div>
          <q-btn class="font-teko" size="lg" color="dark" text-color="primary"
            label="Mail to Join the School Community" @click="openUrl('mailto:berry.groenendijk@doon.nu?subject=%23Edufoodhack:%20Request%20to%20join%20the%20community')"></q-btn>
        </q-card>
      </div>
    </div>
    <div class="q-pb-xl q-mb-xl" ref="section2"><span><br /> <br /> <br /> </span></div>


    <div class="row justify-center q-pt-xl">
      <div class="col-12 col-sm-8 text-center">
        <div class="text-h3 font-teko q-pb-lg">Pick an #edufoodhack Challenge</div>
        <div class="text-body1">
          Dive into our collection of seven unique challenges centered around the theme of food. From promoting healthy
          eating to eco-friendly food delivery solutions and encouraging urban poultry farming, there's a challenge to
          engage every student. Each challenge includes a video brief and a completed Impact Gaps Canvas, providing a
          rich context for deeper learning and a robust starting point for students.
        </div>
      </div>
      <div class="col-12">
        <div class="q-pa-md row items-start q-gutter-md q-py-xl">
          <q-card class="my-card" v-for="challenge in challenges" :key="challenge.title">
            <q-card-section>
              <div class="text-h6 text-primary">{{ challenge.title }}</div>
              <div class="text-subtitle2 text-primary">by {{ challenge.owner }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-primary" style="min-height:163px;">
              {{ challenge.description }}
            </q-card-section>

            <q-card-actions class="item-end">
              <q-btn flat no-caps color="primary" icon="assessment" label="Canvas" @click="openUrl(challenge.canvasUrl)">
              </q-btn>
              <q-btn flat no-caps color="primary" icon="videocam" label="Video" @click="openUrl(challenge.videoUrl)">
              </q-btn>
            </q-card-actions>

          </q-card>
        </div>
      </div>
    </div>
    <div class="q-pb-xl q-mb-xl" ref="section3"><span><br /> <br /> <br /> </span></div>


    <div class="row justify-center q-py-xl">
      <div class="col-12 col-sm-8 text-center">
        <div class="text-h3 font-teko q-pb-lg">Student Innovations Showcase</div>
        <div class="text-body1">
          The Solutions section celebrates the creative spirit of students who have participated in the #edufoodhack.
          Here, young innovators get the stage to present their solutions to the challenges they have tackled. This
          platform not only highlights their achievements but also inspires others in the community by sharing
          practical, impactful solutions that make a difference. Browse through to see how students are turning their
          ideas into action and contributing to a more sustainable world.
        </div>
      </div>
      <div class="col-12">
        <div class="q-pa-md row items-start q-gutter-md q-py-xl">
          <q-card class="my-card" v-for="s in solutions" :key="s.title">
            <q-card-section>
              <div class="text-h6 text-primary">{{ s.title }}</div>
              <div class="text-subtitle2 text-primary">by {{ s.owner }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none text-primary" style="min-height:163px;">
              {{ s.description }}
            </q-card-section>

            <q-card-actions class="item-end">
              <q-btn flat no-caps color="primary" icon="record_voice_over" label="Pitch" @click="openUrl(s.pitchUrl)">
              </q-btn>
            </q-card-actions>

          </q-card>
        </div>
      </div>
    </div>


  </q-page>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import icon1 from '../../assets/icons/efh-challengebasedlearning.svg';
import icon2 from '../../assets/icons/efh-teachercommunity.svg';
import icon3 from '../../assets/icons/efh-teachinginnovation.svg';
import icon4 from '../../assets/icons/efh-professionaldevelopment.svg';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import logoDoon from '../../assets/logo/EFH-doon.png';
import logoOrigami from '../../assets/logo/EFH-origami.png';
import logoLovv from '../../assets/logo/EFH-Lovv.png'
import logoLappeio from '../../assets/logo/EFH-Lappeio.png';
import logoMerlet from '../../assets/logo/efh-logo-merlet.png';


import { onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  // Use nextTick to ensure DOM is updated before trying to scroll
  nextTick(() => {
    if (route.hash) {
      const element = document.querySelector(route.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })
})

const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)

const goto = (elementRef) => {
  console.log('this is the element ' + elementRef + ' . This is the value: ' + elementRef.value);
  const element = elementRef;
  element.scrollIntoView({ behavior: 'smooth' });
}


const benefits = [
  {
    icon: icon1,
    title: 'Challenge-Based Learning',
    info: 'Experience interdisciplinary learning and skill development in a real-world context. Engage deeply with 21st-century challenges.',
  },
  {
    icon: icon2,
    title: 'European Teacher Community',
    info: 'Join a network of teachers and students across Europe, collaborating to solve food waste issues and promote global citizenship.'
  },
  {
    icon: icon3,
    title: 'Practical Teaching Innovation',
    info: 'Transform classroom practices with technology and effective pedagogy. Embrace design thinking and hybrid learning for tangible results.'
  },
  {
    icon: icon4,
    title: 'Professional Development',
    info: "Be part of a progressive educators' community, access extensive resources, and effortlessly implement new teaching strategies."
  }
]

const challenges = [
  {
    title: 'O-Live-You',
    owner: 'Duynie',
    description: 'How might we use olive pulp, the leftover from making olive oil, to create something valuable and exciting for our school, local community or broader society?',
    videoUrl: 'https://drive.google.com/file/d/1qkkbWEOeStedUgs5jArkT0K5SKgvmT1u/view?usp=sharing',
    canvasUrl: 'https://drive.google.com/file/d/1hamONf7IBDW5xZ4z1YkElsBqIudFZdzu/view?usp=sharing'
  },
  {
    title: 'Chickens for All',
    owner: 'Stad Kortrijk',
    description: 'How might we encourage people to keep their own chickens?',
    videoUrl: 'https://drive.google.com/file/d/10uWoZ4Kdvcxrm_q7NC2xQPGajxTkEYpI/view?usp=sharing',
    canvasUrl: 'https://drive.google.com/file/d/1UDldPm3OFaR2YAGgLisz7rn1DMGNij5M/view?usp=sharing'
  },
  {
    title: 'Goodbye Trash',
    owner: 'Jolan',
    description: 'How might we reduce the amount of packaging waste in a delivery meal box, like Foodbag, Hello Fresh?',
    videoUrl: 'https://drive.google.com/file/d/1SJIo6N4Elz-zlcH3FzEgj4YAGjvOpntW/view?usp=sharing',
    canvasUrl: 'https://drive.google.com/file/d/1pCpU9qGjLCEeEzAMtxf5da2N2c6AOfUP/view?usp=sharing'
  },
  {
    title: 'The Bees',
    owner: 'Lokalen Hoeksche Waard',
    description: 'How might we promote a better living environment for bees?',
    videoUrl: 'https://drive.google.com/file/d/1WK9aXvrnBQmv2-IMXrZkntW4LGarSWDh/view?usp=sharing',
    canvasUrl: 'https://drive.google.com/file/d/1KE0bQJuDoVN0BQ2ZF6g5Hm1gwRFWYQWa/view?usp=sharing'
  },
  {
    title: 'Our Tree',
    owner: 'Pomko',
    description: 'How might we help more people plant fruit trees in public spaces and make sure everyone knows how to take care of them?',
    videoUrl: 'https://drive.google.com/file/d/1CP2aJphDCoymXhGwAHqZV1XZM7unYgpL/view?usp=sharing',
    canvasUrl: 'https://drive.google.com/file/d/1JwJiqAB03M_vSVRiNZZmz_ob1FeiZKEu/view?usp=sharing'
  },
  {
    title: 'Kitchen Smart',
    owner: 'Lara Garcilan',
    description: "How can we help everyone in our homes to be really smart in the kitchen, so we don't waste any food and come up with good ideas to change the way we use food?",
    videoUrl: 'https://drive.google.com/file/d/1GGSGfheZr555urqNVyRXxhnMbZvH4as0/view?usp=sharing',
    canvasUrl: 'https://drive.google.com/file/d/1SOxFdyyZVpD2ds3ST9MonQVmcgdMijIB/view?usp=sharing'
  },
  {
    title: 'Food Against Cancer',
    owner: 'UZ Brussel',
    description: 'How might we create and support accessible dietary plans for cancer patients undergoing immunotherapy that boost their microbiome, making it easier for them to follow these diets during treatment?',
    videoUrl: 'https://drive.google.com/file/d/1Ygm2lzz7hSdIxvfsmqAQ2-beZsjCTCRZ/view?usp=sharing',
    canvasUrl: 'https://drive.google.com/file/d/1ytrGQij4J_v6LAs1wPQXJ3lJACzg1wqj/view?usp=sharing'
  },
]

const solutions = [
  {
    title: 'Operation QR Code',
    owner: 'EFH Team ES 1',
    description: 'Our mission is to free up fruits from their plastic packaging by making QR codes with information and videos.',
    pitchUrl: 'https://docs.google.com/presentation/d/1-g2-W6d3eu00bES-2ZqWjIPgnaQbd_5Z/edit?usp=drive_link&ouid=102376823408430561765&rtpof=true&sd=true'
  },
  {
    title: 'Pollinator Shelter',
    owner: 'EFH Team ES 2',
    description: 'We create havens where pollinators can come to feed on diverse flowers and plants.',
    pitchUrl: 'https://docs.google.com/presentation/d/11cAcoF8Kzp0eWE2DpeapRgMVRWtW5mWB/edit?usp=drive_link&ouid=102376823408430561765&rtpof=true&sd=true'
  },
  {
    title: 'Rap What You Eat',
    owner: 'EFH Team ES 3',
    description: 'We created a rap song to promote healthy eating.',
    pitchUrl: 'https://drive.google.com/file/d/1WOFNOCe7BnS4G-CNK8Xjf7QWEjl8rlC1/view?usp=drive_link'
  },
  {
    title: 'Fruit Track',
    owner: 'EFH Team ES 4',
    description: 'We present Fruit Track, greenhouse trucks that bring food forests to cities just as bookmobiles bring books where there are no libraries.',
    pitchUrl: 'https://drive.google.com/file/d/1JuCsucnSlz_Oaou8frzUmVwJinluVBri/view?usp=drive_link'
  },
  {
    title: 'Chicken Coops',
    owner: 'EFH Team ES 5 - Badín Team',
    description: 'We are working on a project to ask the City Council for a common space to look after hens collectively.',
    pitchUrl: 'https://docs.google.com/presentation/d/1C36CzQbB5hDSRif9Mo_UFk8Ywa8MSqO3/edit?usp=drive_link&ouid=102376823408430561765&rtpof=true&sd=true'
  },
  {
    title: 'Plant App',
    owner: 'EFH Team NL1 ',
    description: 'Our solution is an app called “Our tree’’ That gives you everything to know about taking care of your fruit trees without having to look up everything separately.',
    pitchUrl: 'https://drive.google.com/file/d/1hQODuX0C13MDwpgFGndjgw1e1Oa0Iuhy/view?usp=drive_link'
  },
  {
    title: 'City Chick',
    owner: 'EFH Team NL2',
    description: 'there can be houses with small chicken cages, a small garden and the chickens can be fed leftovers like peels and crumbs',
    pitchUrl: 'https://docs.google.com/presentation/d/1ImGc0i7CnOSdvVIPj_IcOeW8ebwiihJ5/edit?usp=drive_link&ouid=102376823408430561765&rtpof=true&sd=true'
  },
  {
    title: 'Save the beezzz',
    owner: 'EFH Team NL3',
    description: 'Free seed bags for citizens and social media on beekeeping techniques and busting myths about bees.',
    pitchUrl: 'https://docs.google.com/presentation/d/1nRT27LAJeafICS4k0dveh2H1v1KPIeZy/edit?usp=drive_link&ouid=102376823408430561765&rtpof=true&sd=true'
  },
  {
    title: 'O-love Face Mask',
    owner: 'EFH Team NL4',
    description: 'We wanted to make a face masker to use up the about to be thrown away olives.',
    pitchUrl: ''
  },
  {
    title: 'Packaging for climate',
    owner: 'EFH Team NL6',
    description: 'Packaging from reusable materials, we made a prototype how it can work.',
    pitchUrl: 'https://docs.google.com/presentation/d/1Cd_nSvEDjE1m6eCakhktmm2Hcx7HmRo4/edit?usp=drive_link&ouid=102376823408430561765&rtpof=true&sd=true'
  },
  {
    title: 'Free Chickens',
    owner: 'EFH Team NL8',
    description: 'Chickens for free, for all families. We think the government can safe money by giving chickens for free.',
    pitchUrl: 'https://docs.google.com/presentation/d/152vKm8WbgoMssxk6-DZwJO7ltt9URnWEcCByzL_bKtA/edit?usp=drive_link'
  },
  {
    title: 'Bodyscrub',
    owner: 'EFH Team NL9',
    description: 'We made a bodyscrub out of olive waste.',
    pitchUrl: 'https://docs.google.com/presentation/d/12mBDGNe-k_pJaNIjnbcs9e9AFyTdU8zp/edit?usp=drive_link&ouid=102376823408430561765&rtpof=true&sd=true'
  },
  {
    title: 'Food Box',
    owner: 'EFH Team NL11',
    description: 'Reduce plastic from food delivery companies by use reusable containers that have compartments and you can easily wash.',
    pitchUrl: 'https://docs.google.com/presentation/d/1L_bRJ3AjO_JsweQg4tO7nWZDj-bDTepC/edit?usp=drive_link&ouid=102376823408430561765&rtpof=true&sd=true'
  },
]

const schools = [
  {
    name: 'Merlet College',
    location: 'Cuijk, The Netherlands',
    website: 'https://www.merletcollege.nl/',
    logo: logoMerlet,
    info: 'Participated in the first #edufoodhack',
    type: 'secondary school'
  },
  {
    name: 'DOON',
    location: 'Utrecht, The Netherlands',
    website: 'https://doon.nu/',
    logo: logoDoon,
    info: 'Organiser of hackathons for learning and cofounder of the #edufoodhack movement.'
  },
  {
    name: 'Origami',
    location: 'El Boalo, Madrid, Spain',
    website: 'https://origamiforchange.org/',
    logo: logoOrigami,
    info: 'A self-directed learning community and cofounder of the #edufoodhack movement.'
  },
  {
    name: '1st Lappeion Junior High School of Naousa',
    location: 'Naousa, Greece',
    website: 'https://1gym-naous.ima.sch.gr/',
    logo: logoLappeio,
    info: 'Committed to sustainability projects and interested in running an #edufoodhack.'
  },
  {
    name: 'RHIZO Lyceum OLV Vlaanderen',
    location: 'Kortrijk Belgium',
    website: 'https://www.rhizo.be',
    logo: logoLovv,
    info: 'Particiapted in several hackathons with students in the past, interested in running a yearly #edufoodhack.',
    type: 'secondary school'
  },
]



function openInvite() { window.open('https://forms.gle/paZHQwE7CQ4vcDPX9', '_blank') };

function openUrl(url) { window.open(url, '_blank') };

</script>

<style scoped lang="css">
.my-card {
  width: 100%;
  max-width: 250px;
  min-height: 302px;
  border-radius: 20px;
}
</style>
