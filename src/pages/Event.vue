<template>
  <q-page class="row items-center justify-evenly max-container-width">
    <div :class="{'row':true, 'items-center':true, 'reverse':$q.screen.lt.sm}">
      <div class="col-12 col-md-4">
        <div class="text-h3 font-teko text-primary">Get to know Edufoodhack</div>
        <div class="text-body1 text-secondary q-py-lg">
          We're mixing food waste challenges with digital learning at #edufoodhack. Here, teachers and students from
          across Europe come together in a hybrid learning experience to whip up creative solutions for real-life
          problems. Our plate includes effective hybrid hackathon practices, a pinch of innovative pedagogical strategies,
          and a spoonful of digital proficiency. This isn't your typical classroom lesson - it's a sustainable feast for
          the curious minds. Join us and add your unique flavor to the mix!
        </div>
      </div>
      <div class="col-12 col-md-6 offset-md-2">
        <q-img src="../assets/efh-hero-x2.png" />
      </div>
    </div>

  </q-page>
  <q-page class="max-container-width">
    <div class="row justify-center">
      <div class="col-12 col-sm-12">
        <div class="row items-center justify-center" style="min-width:100%;min-height:100%;">
          <div class="col-8 col-sm-4 q-pb-xl">
            <q-card class="q-pa-xl bg-gradient1" :style="{ 'border-radius': '20px' }">
              <div>
                <q-img src="../assets/efh-app.png"></q-img>
              </div>
            </q-card>
          </div>
          <div :class="{ 'col-12': true, 'col-sm-8': true, 'q-pl-xl': $q.screen.gt.sm, 'q-pb-xl': true }"
            style="min-height:100%;">
            <div class="row items-center bg-primary" style="min-height:100%;border-radius:20px;">
              <div class="col-12 q-pa-xl">
                <div class="text-h3 text-white font-teko q-pb-lg">Discover our first #edufoodhack</div>
                <div class="text-body1 text-grey-3 ">Join our first #edufoodhack, where 100 students from Origami
                  (Spain)
                  and Merlet College (the Netherlands) collaborate to address food system challenges. Witness these young
                  innovators, aged 11-14,
                  blend research, design, and development from December 11-14. Supported by our specialized web app, their
                  journey of cross-cultural problem-solving and innovation culminates in a display of creativity and
                  teamwork
                  at their final pitches.</div>

                <div class="text-body1 text-grey-3 q-py-lg ">Intrigued? Witness these young innovators in action!
                  Register for the exciting pitch ceremony and be a part of their solution-finding journey!</div>
                <q-btn color="touchpoint" size="lg" no-caps @click="openInvite()"> Register for the Pitch Ceremony</q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center text-center" style="padding-top:160px;padding-bottom: 160px;">
      <div class="col-12 col-sm-8">
        <div class="text-h3 font-teko text-primary">
          Shape Future Global Changemakers with #Edufoodhack in Your Classroom!
        </div>
        <div class="text-body1 text-secondary q-py-lg">
          As educators, we understand that you're constantly seeking fresh, engaging ways to inspire your students and
          make learning relevant to real-world problems. With #edufoodhack, your classroom becomes a changemaker lab,
          empowering students to work collaboratively and make a significant societal impact, all while developing their
          skills for the future.
        </div>
      </div>
      <div class="col-12 q-py-xl">
        <div class="row justify-center">
          <q-card flat :class="{'col-6':true, 'col-sm-3':true, 'q-px-md':$q.screen.gt.sm, 'bg-dark':true, 'q-py-md':$q.screen.lt.sm}" v-for="point in benefits" :key="point.title">
            <q-img :src="point.icon" :style="{ height: '90px', width: '90px' }" fit="contain"></q-img>
            <q-card-section>
              <div class="text-h6">{{ point.title }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none" v-if="$q.screen.gt.sm">
              {{ point.info }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import icon1 from '../assets/icons/efh-challengebasedlearning.svg';
import icon2 from '../assets/icons/efh-teachercommunity.svg';
import icon3 from '../assets/icons/efh-teachinginnovation.svg';
import icon4 from '../assets/icons/efh-professionaldevelopment.svg';

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

function openInvite() { window.open('https://forms.gle/paZHQwE7CQ4vcDPX9', '_blank') };

</script>
