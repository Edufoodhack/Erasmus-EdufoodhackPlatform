<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat>
      <div class="row q-pa-lg">
        <div class="col-8">
          <div class="text-h5 font-teko">
            Hello 👋, this is your schedule, enjoy the hackathon!
            <div class="row">
              <div class="col-12">
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 text-right">

          <q-btn class="q-px-sm" dense rounded icon="group" aria-label="Group" color="orange" :label="dutchTeam ? 'Team Dutch': 'Team Spain'" @click="toggleDutchTeam" />

        </div>
      </div>
      <q-scroll-area :thumb-style="thumbStyle" :content-style="contentStyle" :content-active-style="contentActiveStyle"
        :style="{ height: '76px', 'max-width': $q.screen.width + 'px' }">
        <div class="q-pa-md q-gutter-md" style="width:500px;">

          <q-btn class="text-lato" no-caps aria-label="Schedule Overview" label="Schedule Overview" color="dark" text-color="primary" rounded
            size="md" @click="openUrl('https://firebasestorage.googleapis.com/v0/b/edufoodhack-611da.appspot.com/o/%23EFH%20-%20Schedule.pdf?alt=media&token=a5d4a1d3-50ad-4e9d-8eef-3b3e6e787ff3')" />

          <q-btn v-if="false" class="text-lato" no-caps aria-label="Workspace" label="Workspace" icon="workspaces" color="dark"
            text-color="primary" rounded size="md" @click="toggleLeftDrawer" />
          <q-btn v-if="false" class="text-lato" no-caps aria-label="Meetings" label="Meetings" icon="meeting_room" color="dark"
            text-color="primary" rounded size="md" @click="toggleLeftDrawer" />

        </div>
      </q-scroll-area>
    </q-header>

    <q-drawer side="right" v-model="hqux.toggleDrawer" :width="sidePanelWidth"
      @update:model-value="(value) => console.log('update-model-value: ' + value)">
      <q-page-container class="bg-dark" style="padding-top:0px; padding-right:0px;">
        <router-view />
      </q-page-container>
    </q-drawer>



    <q-page-container class="bg-dark">
      <q-scroll-area :thumb-style="thumbStyle" :content-style="contentStyle" :content-active-style="contentActiveStyle"
        :style="{ height: $q.screen.height - 158 + 'px', width: '100%' }">

        <!--Team Spain-->
        <div class="row justify-center" v-if="dutchTeam">

          <div :class="{ 'col-12': true, 'schedule-item-container': true }">
            <div class="row">
              <div class="col-12 q-py-lg" v-for="step in hq.overview" :key="step.id">
                <div class="row justify-center">
                  <div class="col-12">
                    <div class="row" v-if="step.title === 'Kick-off Meeting'">
                      <div class="col-12 text-h5 q-pl-lg q-ml-md q-pb-sm">
                        Day 1
                      </div>
                    </div>
                    <div class="row" v-if="step.title === 'Welcome Meeting'">
                      <div class="col-12 text-h5 q-pl-lg q-ml-md q-pb-sm">
                        Day 2
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <div class="row justify-center">
                          <div class="time-indicator q-pt-sm" v-if="step.active">
                            <svg style="transform: translateY(-8px); margin-left:6px;" width="22" height="22"
                              xmlns="http://www.w3.org/2000/svg">
                              <circle cx="10" cy="10" r="8" stroke="#FF6C11" fill="#F8F1E5" stroke-width="4" />
                            </svg>
                          </div>
                          <q-card
                            :class="{ 'schedule-item': true, 'col-10': true, 'cursor-pointer': true, 'clickable': true, 'schedule-item-active': step.id === hqux.activeStep }"
                            clickable :style="{ 'background-color': step.color }" @click="stepClicked(step.id)">
                            <div class="column justify-between schedyle-item-content">
                              <div class="col">
                                <q-card-section>
                                  <div class="row items-center">
                                    <div class="col-5">
                                      <div class="text-body2 text-time">{{ step.start }} - {{ step.end }}</div>
                                    </div>
                                    <div class="col-7 text-right">
                                      <q-img class="q-pl-sm" v-for="tool in step.tools" :key="tool.icon" :src="tool.icon"
                                        :style="{ height: '20px', width: '80px', 'object-position': '50% 50%' }"
                                        fit="contain"></q-img>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-12 q-py-sm">
                                      <div class="text-h6 text-dark">{{ step.title }}</div>
                                      <div class="q-mt-sm">
                                        <span :style="{ 'background-color': step.label.color }"><span class="q-px-xs"
                                            :style="{ color: step.color }"> {{ step.label.label }} </span></span>
                                      </div>
                                    </div>
                                  </div>
                                </q-card-section>
                              </div>
                              <div class="col">
                                <q-card-actions class="justify-between self-end">
                                  <q-btn v-for="btn in step.btns" :key="btn.label" no-caps rounded dense color="positive"
                                    :text-color="step.color" @click="openUrl(btn.url)"><span class="q-px-sm">{{ btn.label }}</span></q-btn>
                                </q-card-actions>
                              </div>
                            </div>
                          </q-card>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

<!--Team Spain-->
        <div class="row justify-center" v-else>

<div :class="{ 'col-12': true, 'schedule-item-container': true }">
  <div class="row">
    <div class="col-12 q-py-lg" v-for="step in hq.overviewSpain" :key="step.id">
      <div class="row justify-center">
        <div class="col-12">
          <div class="row" v-if="step.title === 'Kick-off Meeting'">
            <div class="col-12 text-h5 q-pl-lg q-ml-md q-pb-sm">
              Day 1
            </div>
          </div>
          <div class="row" v-if="step.title === 'Welcome Meeting'">
            <div class="col-12 text-h5 q-pl-lg q-ml-md q-pb-sm">
              Day 2
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div class="row justify-center">
                <div class="time-indicator q-pt-sm" v-if="step.active">
                  <svg style="transform: translateY(-8px); margin-left:6px;" width="22" height="22"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8" stroke="#FF6C11" fill="#F8F1E5" stroke-width="4" />
                  </svg>
                </div>
                <q-card
                  :class="{ 'schedule-item': true, 'col-10': true, 'cursor-pointer': true, 'clickable': true, 'schedule-item-active': step.id === hqux.activeStep }"
                  clickable :style="{ 'background-color': step.color }" @click="stepClicked(step.id)">
                  <div class="column justify-between schedyle-item-content">
                    <div class="col">
                      <q-card-section>
                        <div class="row items-center">
                          <div class="col-5">
                            <div class="text-body2 text-time">{{ step.start }} - {{ step.end }}</div>
                          </div>
                          <div class="col-7 text-right">
                            <q-img class="q-pl-sm" v-for="tool in step.tools" :key="tool.icon" :src="tool.icon"
                              :style="{ height: '20px', width: '80px', 'object-position': '50% 50%' }"
                              fit="contain"></q-img>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12 q-py-sm">
                            <div class="text-h6 text-dark">{{ step.title }}</div>
                            <div class="q-mt-sm">
                              <span :style="{ 'background-color': step.label.color }"><span class="q-px-xs"
                                  :style="{ color: step.color }"> {{ step.label.label }} </span></span>
                            </div>
                          </div>
                        </div>
                      </q-card-section>
                    </div>
                    <div class="col">
                      <q-card-actions class="justify-between self-end">
                        <q-btn v-for="btn in step.btns" :key="btn.label" no-caps rounded dense color="positive"
                          :text-color="step.color" @click="openUrl(btn.url)"><span class="q-px-sm">{{ btn.label }}</span></q-btn>
                      </q-card-actions>
                    </div>
                  </div>
                </q-card>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      </q-scroll-area>
    </q-page-container>


  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { computed } from 'vue'
import { useHqUx } from '../stores/hq-ux'
import { useHq } from '../stores/hq-content'
import { useRoute, useRouter } from 'vue-router'

import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
const router = useRouter()

const hqux = useHqUx()
const hq = useHq()

const contentStyle = {

}

const contentActiveStyle = {
}

const thumbStyle = {
  width: '0',
  opacity: '0'
}

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Concept',
    caption: 'What is #edufoodhack',
    icon: 'tag',
    link: '/concept'
  },
  {
    title: 'Resources',
    caption: 'Download all free resources',
    icon: 'school',
    link: '/resources'
  },
  {
    title: 'Community',
    caption: 'Connect with partner schools',
    icon: 'public',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'About',
    caption: 'About this project',
    icon: 'chat',
    link: 'https://forum.quasar.dev'
  },
];

let valueMounted = ref(Boolean)
const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function openUrl(url) {
  window.open(url, '_blank')
}

function stepClicked(id) {
  if (hqux.toggleDrawer === true) {

    hqux.$patch((state) => {
      state.activeStep = id
    })

    router.push(id)
  } else {
    console.log('drawer not visible, so change that: ' + hqux.toggleDrawer)
    hqux.$patch((state) => {
      state.activeStep = id
    })
    router.push(id)
    console.log('new id pushed: ' + hqux.toggleDrawer)
    hqux.changeToggleDrawer()
    console.log('changed: ' + hqux.toggleDrawer)
  }
}

let dutchTeam = ref(true)

function toggleDutchTeam() {
  dutchTeam.value = !dutchTeam.value
}


let allTheSteps = computed(() => {
  if(dutchTeam) {
    return hq.overview
  } else {
    return hq.overviewSpain
  }
})

const $q = useQuasar()
const sidePanelWidth = computed(() => {
  let panelWidth = 100
  if ($q.screen.lt.sm) {
    panelWidth = $q.screen.width
  } else if ($q.screen.width > 1400) {
    panelWidth = 700
  } else {
    panelWidth = $q.screen.width - 750
  }
  return panelWidth
})


</script>
<style scoped lang="css">
.q-btn .q-btn__content .block {
  font-family: 'Teko', sans-serif;
}

.schedule-item-container {
  max-width: 650px;
}

.schedule-item:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.schedule-item {
  border-radius: 10px;
}

.schedule-item-active {
  border: 4px solid #98FF98;
}

.schedule-item-content {
  min-height: 156px;
}

.time-indicator {
  border-bottom: 4px #FF6C11 solid;
  height: 1px;
  content: " ";
  width: 100%;
  position: absolute;
  margin-top: 60px;
}
</style>
