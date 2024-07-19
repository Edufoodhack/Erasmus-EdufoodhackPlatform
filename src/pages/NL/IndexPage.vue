<template>
  <q-page class="row items-center justify-evenly max-container-width">
    <div :class="{ 'row': true, 'items-center': true, 'reverse': $q.screen.lt.sm }">
      <div class="col-12 col-md-4">
        <div class="text-h3 font-teko text-primary">{{ $t('hero.title') }}</div>
        <div class="text-body1 text-secondary q-py-lg">
          {{  $t('hero.description') }}
        </div>
        <div>
          <div v-if="false" class="text-caption">Curious about #EduFoodHack? Join our online inspiration session over
            lunch at 18th of
            March, between 12:00 - 12:45 CET.</div>
          <q-btn v-if="false" color="touchpoint" size="lg" no-caps @click="openInvite()">Learn More</q-btn>
        </div>
      </div>
      <div class="col-12 col-md-6 offset-md-2">
        <q-img src="../../assets/efh-hero-x2.png" />
      </div>
    </div>

  </q-page>
  <q-page class="max-container-width">
    <div class="row justify-center">
      <div class="col-12 col-sm-12">
        <div class="row justify-center" style="min-width:100%;min-height:100%;">
          <div class="col-12 text-center">
            <div class="text-h2 text-primary font-teko q-pb-lg">Learn how to run your own #edufoodhack</div>
          </div>

          <div class="col-12 col-sm-6 q-py-xl">
            <div class="text-h6 text-primary font-teko q-pt-sm q-pb-lg">Get inspiration over lunch on 18 March between
              12:00 and 13:00 CET</div>
            <div class="text-body1 text-primary q-pb-xl">Discover how to launch your own #EduFoodHack during our lunchtime
              event on March 18th. Gain exclusive access to our free playbook and learn from the inaugural event's
              successes to host a dynamic hybrid hackathon at your school.
            </div>
            <q-btn color="touchpoint" size="lg" no-caps @click="openInvite()"> Register for the Lunch Session</q-btn>
          </div>

          <div class="col-12 col-sm-6 q-pb-xl">
            <div class="q-px-lg q-py-md">
              <q-timeline color="secondary" class="font-teko">
                <q-timeline-entry title="Welcome & Introduction #EduFoodHack" subtitle="12:00 CET" icon="start">
                  <div></div>
                </q-timeline-entry>

                <q-timeline-entry title="Keynote - Why Everyone Should 'Hackathon'" subtitle="12:10 CET" icon="forum">
                  <div>Erwin Niedeveld from DOON shares the unmatched benefits of Hackathons, showcasing how Design
                    Thinking can address complex issues with creative solutions.</div>
                </q-timeline-entry>

                <q-timeline-entry title="Sharing Succes Stories" subtitle="12:20 CET" icon="campaign">
                  <div>
                    Listen to real live stories from students and teachers from Spain and the Netherlands, highlighting
                    the pro's and con's first hackathon experience.
                  </div>
                </q-timeline-entry>

                <q-timeline-entry title="Playbook & Website Launch" subtitle="12:40 CET" icon="book">
                  <div>
                    Discover our #EduFoodHack Playbook and dedicated website platform, comprehensive tools to hosting an
                    impactful Hackathon, filled with essential lesson materials, tools and tips.
                  </div>
                </q-timeline-entry>

                <q-timeline-entry title="Q&A Earn Your Badge" subtitle="12:55 CET" icon="badge">
                  <div>
                    Participate in our Q&A session and earn an Open Badge, showcasing your engagement and learning.
                  </div>
                </q-timeline-entry>


              </q-timeline>
            </div>
          </div>




        </div>
      </div>
    </div>



    <div class="row justify-center">
      <div class="col-12 col-sm-12">
        <div class="row items-center justify-center" style="min-width:100%;min-height:100%;">
          <div :class="{ 'col-12': true, 'col-sm-12': true, 'q-pl-xl': $q.screen.gt.sm, 'q-pb-xl': true }"
            style="min-height:100%;">
            <div class="row items-center bg-primary" style="min-height:100%;border-radius:20px;">
              <div class="col-12 q-pa-xl">
                <div class="text-h3 text-white font-teko q-pb-lg">Get Practical and Free Teaching Tools</div>
                <div class="text-body1 text-grey-3 ">
                  Your complete guide to organizing a hackathon, covering everything from planning to
                  execution.<br /><br />
                  <q-list bordered separator>
                    <q-item> <q-item-section avatar>
                        <q-icon color="text-grey-3" name="menu_book" />
                      </q-item-section><q-item-section><b>Playbook</b>A detailed manual for organizing your own hackathon,
                        offering
                        step-by-step guidance and best practices to ensure success.</q-item-section></q-item>
                    <q-item> <q-item-section avatar>
                        <q-icon color="text-grey-3" name="backpack" />
                      </q-item-section><q-item-section><b>Toolkits</b>Enhance your event with our interactive marketing
                        and
                        communication materials.</q-item-section></q-item>
                    <q-item> <q-item-section avatar>
                        <q-icon color="text-grey-3" name="menu_book" />
                      </q-item-section><q-item-section><b>Lesson Materials</b>Detailed design methods and procedures to
                        structure
                        your
                        hackathon effectively</q-item-section></q-item>
                    <q-item> <q-item-section avatar>
                        <q-icon color="text-grey-3" name="web" />
                      </q-item-section><q-item-section><b>Website</b>A platform to connect with educators, explore
                        challenges, and
                        showcase your students' innovative solutions.</q-item-section></q-item>
                  </q-list>

                  <br />These resources provide a comprehensive path for hosting impactful hackathons focused on
                  food-related
                  challenges, whether they're in-person, hybrid, or digital. Designed specifically for educators, they
                  equip you to embark on your own #edufoodhack journey with confidence.
                  <br /><br />
                  <b>Don't miss out:</b> Join our <b>Lunch Session event</b> to access these invaluable tools and start
                  planning your hackathon
                  today.
                  <q-btn class="q-mt-xl q-mb-md" color="touchpoint" size="lg" no-caps @click="openInvite()"> Register for
                    the Lunch Session</q-btn>

                </div>
              </div>
            </div>
          </div>
          <div class="col-8 col-sm-6 q-pb-xl">
            <q-card class="q-pa-xl bg-gradient1" :style="{ 'border-radius': '20px' }">
              <div>
                <q-img src="../../assets/efh-app.png"></q-img>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-sm-12">
        <div class="row items-center justify-center">
          <div class="col-10 col-sm-8 q-py-xl text-center">
            <div class="text-h3 text-primary font-teko q-pb-lg">This was the first #EduFoodHack</div>
            <div class="text-body1 text-secondary">Our first #EduFoodHack was a great success, with 100 young
              innovators from Origami (Spain) and Merlet College (the Netherlands) tackling food system challenges
              head-on. Their journey of discovery, innovation, and cross-cultural collaboration from December 11-14 has
              been captured in an inspiring aftermovie.<br /><br />Watch the aftermovie now to see these talented
              11-14-year-olds in action as they research, design, and develop solutions that culminate in a showcase of
              creativity and teamwork.
            </div>
            <div class="q-pt-xl">
              <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/ISHZWl3_M0w?si=R8ozRd29-awphsmC" />
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
          <q-card flat
            :class="{ 'col-6': true, 'col-sm-3': true, 'q-px-md': $q.screen.gt.sm, 'bg-dark': true, 'q-py-md': $q.screen.lt.sm }"
            v-for="point in benefits" :key="point.title">
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
import { useI18n } from "vue-i18n"
const { t } = useI18n()
import icon1 from '../../assets/icons/efh-challengebasedlearning.svg';
import icon2 from '../../assets/icons/efh-teachercommunity.svg';
import icon3 from '../../assets/icons/efh-teachinginnovation.svg';
import icon4 from '../../assets/icons/efh-professionaldevelopment.svg';

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



function openInvite() { window.open('https://us06web.zoom.us/j/87220926482?pwd=P7HHZGL4uK67biYO1QZg4HVewu1p3F.1', '_blank') };

</script>
