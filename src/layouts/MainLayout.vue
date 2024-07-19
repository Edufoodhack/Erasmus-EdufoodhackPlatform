<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat>
      <q-toolbar class="bg-dark text-primary q-px-lg justify-between">

        <div class="col-2">
          <q-toolbar-title>
            <q-img src="../assets/efh-logo-full-primary-horizontal.svg" class="q-my-sm"
              :style="{ height: '64px', width: '151px' }" position="contain" />
          </q-toolbar-title>
        </div>

        <div class="col-8">
          <div class="row justify-around">
            <q-btn @click="$router.push('resources')" size="lg" color="primary" flat><span class="font-teko">Resources</span></q-btn>
            <q-btn-dropdown size="lg" color="primary" label="Resources" flat><q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Hackathon Playbook</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Step-By-Step Guide</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Other Resources</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list></q-btn-dropdown>
            <q-btn size="lg" color="primary" flat @click="$router.push('community')"><span class="font-teko">Community</span></q-btn>
            <q-btn size="lg" color="primary" flat><span class="font-teko">About</span></q-btn>
          </div>

        </div>


        <div class="col-2 text-right">
          <q-select v-model="locale" :options="localeOptions" label="Quasar Language" dense
            borderless emit-value map-options options-dense style="min-width: 150px" />
          <q-btn v-if="$q.screen.lt.sm" flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-primary">
      <q-toolbar-title class="q-ma-lg">
        <q-img src="../assets/efh-logo-full-white-horizontal.svg" height="64px" width="151px" position="contain" />
      </q-toolbar-title>
      <q-list>
        <EssentialLink dark v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-dark">
      <router-view />
    </q-page-container>

    <q-page-container style="padding-top:0px;">
      <q-page class="bg-primary" style="min-height:10vh;">
        <div class="row max-container-width">
          <div :class="{ 'col-12': true, 'q-pa-lg': $q.screen.lt.sm, 'q-pa-md': $q.screen.gt.sm }">
            <div class="row justify-between">
              <div class="col-12 col-sm-4 q-pt-lg">
                <q-img src="../assets/efh-logo-full-white-horizontal.svg" :style="{ height: '120px', width: '180px' }"
                  fit="contain"></q-img>
                <div class="row q-pt-lg">
                  <div class="col-12">
                    <div class="text-h6 text-white font-teko">
                      Contact Details Coordinator
                    </div>
                    <div class="text-body1 text-white q-pt-md">
                      Cooperative DOON U.A.
                    </div>
                    <div class="text-body1 text-white">
                      <q-btn flat no-caps @click="openDoon()"
                        class=" cursor-pointer text-body1 q-pa-none">www.doon.nu</q-btn>
                    </div>
                    <div class="text-body1 text-white q-pt-md q-pb-lg">
                      <q-btn flat no-caps @click="openMailJoos()"
                        class="cursor-pointer text-body1 q-pa-none">joos.vancauwenberghe@doon.nu</q-btn>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="text-h6 text-white q-pt-md font-teko">Made Possible By</div>
                <div class="row bg-white q-px-lg" style="border-radius:20px;">
                  <div class="col-4 q-pa-md" v-for="partner in partners" :key="partner.title">
                    <q-img :src="partner.img" height="60px" fit="contain"></q-img>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="q-py-lg">
                      <div class="row">
                        <div class="col-auto q-pt-md" style="width:150px">
                          <q-img src="../assets/logo/efh-logo-eu.png"></q-img>
                        </div>
                        <div class="col-auto">
                          <div class="text-caption text-white">This project has received funding from the European Union’s
                            Erasmus+
                            programme under project number 2022-2-NL01-KA210-SCH-000099271. The European Commission’s
                            support for the production of this publication does not constitute an endorsement of the
                            contents, which reflect the views
                            only of the authors, and the Commission cannot be held responsible for any use which may be
                            made of the information contained therein.</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
    <div class="row">

    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import logoDoon from '../assets/logo/efh-logo-doon.png';
import logoMerlet from '../assets/logo/efh-logo-merlet.png';
import logoOrigami from '../assets/logo/efh-logo-origami.png';

import { useI18n } from 'vue-i18n'

const locale = useI18n({ useScope: 'global' })

const localeOptions = [
        { value: 'en-US', label: 'English' },
        { value: 'nl-NL', label: 'Dutch' }
      ];


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

const partners = [
  {
    title: "DOON",
    img: logoDoon,
    link: "https://www.doon.nu"
  },
  {
    title: "Merlet College",
    img: logoMerlet,
    link: "https://www.merletcollege.nl"
  },
  {
    title: "Origami",
    img: logoOrigami,
    link: "https://www.origamiforchange.org"
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function openDoon() { window.open('https://www.doon.nu', '_blank') };

function openMailJoos() { window.open('mailto:joos.vancauwenberghe@doon.nu?subject=%23edufoodhack%20-%20contact%20website', '_blank') };


</script>
<style lang="css">
.q-btn .q-btn__content .block {
  font-family: 'Teko', sans-serif;
}
</style>
