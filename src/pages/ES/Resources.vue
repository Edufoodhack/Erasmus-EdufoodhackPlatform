<template>
  <q-page class="max-container-width">


    <div class="max-container-width bg-dark" style="position:fixed; width:100%;z-index:10;" v-if="$q.screen.gt.sm">
      <div class="row justify-center bg-dark q-pb-md q-pt-md">
        <div class="col-12 col-sm-8 text-center">
          <q-btn-group spread>
            <q-btn style="line-height:1.45em;" stack outline color="primary" text-color="primary" label="Playbook" icon="menu_book"
              @click="goto(section1)" />
            <q-btn style="line-height:1.1em;" stack outline color="primary" text-color="primary" label="Facilitation App" icon="app_registration"
              @click="goto(section2)" />
            <q-btn style="line-height:1.45em;" stack outline color="orange" text-color="primary" label="Design Toolkit" icon="construction"
              @click="goto(section3)" />
              <q-btn style="line-height:1.1em;" stack outline color="orange" text-color="primary" label="Challenge Framing" icon="dashboard"
              @click="goto(section4)" />
            <q-btn style="line-height:1.1em;" stack outline color="orange" text-color="primary" label="Training Materials" icon="school"
              @click="goto(section5)" />
              <q-btn style="line-height:1.1em;" stack outline color="orange" text-color="primary" label="Evaluation Report" icon="bar_chart"
              @click="goto(section6)" />
              <q-btn style="line-height:1.1em;" stack outline color="orange" text-color="primary" label="Final Webinar" icon="video_library"
              @click="goto(section7)" />
          </q-btn-group>
        </div>
      </div>
    </div>

    <div class="q-pb-xl" ref="section1"><span><br /></span></div>
    <div :class="{ 'row': true, 'items-center': true, 'reverse': $q.screen.lt.sm, 'q-pb-xl': true }" :style="{'padding-top': '200px'}">
      <div class="col-12 col-md-6">
        <div class="text-h3 font-teko text-primary">Learn how to conduct a hackathon with our practical and complete
          playbook for
          educators</div>
        <div class="text-body1 text-secondary q-py-lg">
          Dive into the world of hybrid, online or in-person hackathons with our essential playbook, tailored for
          educators eager to merge in-person and online environments. This guide ensures a thorough design for your
          learning experience for all participants, preparing you to run a hackathon with confidence.
        </div>
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-avatar rounded color="primary" text-color="white" icon="calendar_view_day" />
            </q-item-section>

            <q-item-section><b>Comprehensive Coverage</b>From initial planning to post-event activities, learn
              everything essential to organizing a hackathon.</q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-avatar rounded color="primary" text-color="white" icon="list_alt" />
            </q-item-section>

            <q-item-section><b>Step-by-step Guidance</b>Detailed explanations simplify the process, ensuring you know
              exactly what to do at each stage.</q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-avatar rounded color="primary" text-color="white" icon="dashboard_customize" />
            </q-item-section>

            <q-item-section><b>Practical Templates</b> Use our canvas templates to collaboratively design your hackathon
              with ease.</q-item-section>
          </q-item>


          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded color="primary" text-color="white" icon="construction" />
            </q-item-section>

            <q-item-section><b>Helpful Toolkits</b> Access additional toolkits to streamline communications and reduce
              the workload for your team.</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar rounded color="primary" text-color="white" icon="school" />
            </q-item-section>

            <q-item-section><b>Educator-Approved</b> Developed and field-tested by teachers, for teachers, ensuring
              relevance and practicality.</q-item-section>
          </q-item>
        </q-list>

        <div class="text-h6 font-teko text-primary q-mt-xl">Read the online and latest version of the Playbook</div>
        <q-btn-group spread class="q-mb-xl">
          <q-btn size="lg" color="purple" label="Dutch" />
          <q-btn size="lg" color="purple" label="English" />
          <q-btn size="lg" color="purple" label="Spanish" />
        </q-btn-group>

      </div>
      <div class="col-12 col-md-6">
        <q-img src="../../assets/img/EFH-mockup-ebook.png" />
      </div>
    </div>
    <div class="q-pb-xl q-mb-xl" ref="section2"><span><br /> <br /> <br /> </span></div>



    <div class="row justify-center q-py-xl q-my-xl">
      <div class="col-12 col-sm-12">
        <div class="row items-center justify-center" style="min-width:100%;min-height:100%;">
          <div class="col-8 col-sm-6 q-pb-xl">
            <q-card class="q-pa-xl bg-gradient1" :style="{ 'border-radius': '20px' }">
              <div>
                <q-img src="../../assets/efh-app.png"></q-img>
              </div>
            </q-card>
          </div>
          <div :class="{ 'col-12': true, 'col-sm-6': true, 'q-pl-xl': $q.screen.gt.sm, 'q-pb-xl': true }">
            <div class="row items-center">
              <div class="col-12">
                <div class="text-h3 font-teko q-pb-lg">Start a Hackathon Tomorrow with our Digital Facilitation Webapp
                </div>
                <div class="text-body1">Eager to learn hackathons by doing? Dive into our Digital Facilitation App,
                  where we've meticulously set up our two-day #Edufoodhack program from start to finish. The app
                  provides step-by-step guidance, direct links to tutorial videos, and all necessary documentation for
                  each exercise. It's designed for seamless use, accessible on both mobile and desktop, allowing you to
                  share links with students and follow the timed program effortlessly.</div>

                <q-btn class="q-mt-lg font-teko" color="touchpoint" size="lg" no-caps @click="openInvite()"
                  label="Access Webapp"></q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </q-page>
  <q-page class="max-container-width">
    <div class="q-pb-xl q-mb-xl" ref="section3"><span><br /> <br /> <br /> </span></div>
    <div class="row just-center q-py-xl">
      <div class="col-12 col-sm-6 bg-primary text-dark q-pa-xl"
        style="min-width:100%;border-radius:20px;min-height:100%">
        <div class="row items-center">
          <div class="col-12 col-sm-6">
            <div class="text-h3 font-teko">Download our Hackathon Design Toolkit</div>
            <div class="text-body1 q-py-xl">
              Maximize the effectiveness of your hackathon with our specially designed toolkit. This resource includes a
              series of canvas templates that simplify the planning process, offer clear guidance, and facilitate the
              overall design of your event.
            </div>
            <div class="text-body1 text-bold q-pb-md">
              Key features of the toolkit:
            </div>

            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-avatar round color="dark" text-color="primary" icon="fact_check" />
                </q-item-section>

                <q-item-section><b>Objective Clarity</b> Define clear learning objectives for the hackathon to ensure
                  all participants understand the goals.</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar round color="dark" text-color="primary" icon="group_add" />
                </q-item-section>

                <q-item-section><b>Team Assembly</b> Guidelines for putting together a dynamic organizing team capable
                  of leading a successful event.</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar round color="dark" text-color="primary" icon="thumbs_up_down" />
                </q-item-section>

                <q-item-section><b>Stakeholder Alignment</b> Tools to gather and incorporate feedback from students and
                  stakeholders, refining your hackathon's design.</q-item-section>
              </q-item>
            </q-list>

            <div class="text-body1 q-pt-xl">
              This toolkit is designed to not only ease the logistical challenges of organizing a hackathon but also to
              enhance the educational impact and engagement of participants.
            </div>
          </div>
          <div class="col-12 col-sm-6 q-pa-lg">
            <q-img src="../../assets/img/EFH-canvas.png" />
          </div>
        </div>
        <div class="row text-center">
          <div class="col-12 text-center q-pt-xl"> <q-btn class="font-teko" size="lg" no-caps color="dark"
              text-color="primary" label="Download Toolkit"></q-btn></div>
        </div>
      </div>
    </div>

    <div class="q-pb-xl q-mb-xl" ref="section4"><span><br /> <br /> <br /> </span></div>


    <div class="row justify-center q-py-xl q-mt-xl">
      <div class="col-12 col-sm-12">
        <div class="row items-center justify-center" style="min-width:100%;min-height:100%;">
          <div :class="{ 'col-12': true, 'col-sm-6': true, 'q-pr-xl': $q.screen.gt.sm, 'q-pb-xl': true }">
            <div class="row items-center">
              <div class="col-12">
                <div class="text-h3 font-teko q-pb-lg">Empower Students' Self-direction with the Challenge Framing Canvas
                </div>
                <div class="text-body1">Utilize our Challenge Framing Canvas to guide your students in defining and structuring their own challenges within the #edufoodhack framework. This tool promotes creativity, boosts learning motivation, and encourages self-direction right from the start.</div>

                <q-btn class="q-mt-lg font-teko" color="touchpoint" size="lg" no-caps @click="openInvite()"
                  label="Use the Canvas"></q-btn>
              </div>
            </div>
          </div>
          <div class="col-8 col-sm-6 q-pb-xl">
            <q-card class="q-pa-xl bg-gradient1" :style="{ 'border-radius': '20px' }">
              <div>
                <q-img src="../../assets/img/EFH-framingCanvas.jpg"></q-img>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>


    <div class="q-pb-xl q-mb-xl" ref="section5"><span><br /> <br /> <br /> </span></div>

    <div class="row justify-center q-py-xl q-my-xl">
      <div class="col-12 col-sm-12">
        <div class="row items-center justify-center" style="min-width:100%;min-height:100%;">
          <div :class="{ 'col-12': true, 'col-sm-6': true, 'q-pr-xl': $q.screen.gt.sm, 'q-pb-xl': true }">
            <div class="row items-center">
              <div class="col-12">
                <div class="text-h3 font-teko q-pb-lg">Gain Expertise as a Hackathon Coach
                </div>
                <div class="text-body1">Ready to lead as a facilitator? Enhance your skills with our comprehensive
                  training slides designed to align with the hackathon program. These materials complement the playbook,
                  ensuring that teachers are fully equipped to coach effectively during the hackathon.</div>

                <q-btn class="q-mt-lg font-teko" color="touchpoint" size="lg" no-caps @click="openInvite()"
                  label="Access Training Materials"></q-btn>
              </div>
            </div>
          </div>
          <div class="col-8 col-sm-6 q-pb-xl">
            <q-card class="q-pa-xl bg-gradient1" :style="{ 'border-radius': '20px' }">
              <div>
                <q-img src="../../assets/img/EFH-training.png"></q-img>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <div class="q-pb-xl q-mb-xl" ref="section6"><span><br /> <br /> <br /> </span></div>



    <div class="row justify-center q-py-xl q-my-xl">
      <div class="col-12 col-sm-12">
        <div class="row items-center justify-center" style="min-width:100%;min-height:100%;">
          <div class="col-8 col-sm-6 q-pb-xl">
            <q-card class="q-pa-xl bg-gradient1" :style="{ 'border-radius': '20px' }">
              <div>
                <q-img src="../../assets/img/EFH-evaluation.png"></q-img>
              </div>
            </q-card>
          </div>
          <div :class="{ 'col-12': true, 'col-sm-6': true, 'q-pl-xl': $q.screen.gt.sm, 'q-pb-xl': true }">
            <div class="row items-center">
              <div class="col-12">
                <div class="text-h3 font-teko q-pb-lg">Evaluation Report
                </div>
                <div class="text-body1">Explore the findings from our first #edufoodhack held at Merlet College in The Netherlands and Origami in Spain, where over 100 students engaged in a dynamic two-day event. Our easy-to-read evaluation report captures key learnings to enhance your future hackathons.</div>

                <q-btn class="q-mt-lg font-teko" color="touchpoint" size="lg" no-caps @click="openInvite()"
                  label="Read the Evaluation Report"></q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="q-pb-xl q-mb-xl" ref="section7"><span><br /> <br /> <br /> </span></div>

<div class="row justify-center q-py-xl q-mt-xl">
  <div class="col-12 col-sm-12">
    <div class="row items-center justify-center" style="min-width:100%;min-height:100%;">
      <div :class="{ 'col-12': true, 'col-sm-6': true, 'q-pr-xl': $q.screen.gt.sm, 'q-pb-xl': true }">
        <div class="row items-center">
          <div class="col-12">
            <div class="text-h3 font-teko q-pb-lg">Insights for Educators: #edufoodhack Webinar Replay
            </div>
            <div class="text-body1">Missed our webinar? No problem! Rewatch our session designed for educators and hackathon enthusiasts to discover insights and strategies from the #edufoodhack initiative.</div>
          </div>
        </div>
      </div>
      <div class="col-8 col-sm-6 q-pb-xl">
        <q-video
      :ratio="16/9"
      src="https://www.youtube.com/embed/Zkj0GbQGZg0?si=r3Rve-101R862EaG"
    />
      </div>
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
import { openURL } from 'quasar';

const section1 = ref(null)
const section2 = ref(null)
const section3 = ref(null)
const section4 = ref(null)
const section5 = ref(null)
const section6 = ref(null)
const section7 = ref(null)

const goto = (elementRef) => {
  const element = elementRef;
  element.scrollIntoView({ behavior: 'smooth' });
}



const center = { lat: 51.093048, lng: 6.84212 };

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

function openInvite() { window.open('https://forms.gle/paZHQwE7CQ4vcDPX9', '_blank') };

</script>
<style scoped lang="css">
.my-card {
  width: 100%;
  max-width: 250px;
  min-height: 302px;
  border-radius: 20px;
}
</style>
