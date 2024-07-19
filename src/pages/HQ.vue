<template>
  <q-page class="">
    <div :class="{ 'column': true, 'q-pa-md': $q.screen.gt.sm, 'bg-background': true }"
      :style="{ height: $q.screen.height - 174 + 'px' }">

      <q-card class="bg-white">

        <!--Step Title -->
        <q-card-section :style="{ height: $q.screen.lt.sm ? '112px' : '70px', width: '100%' }">

          <div :class="{ 'row': true, 'items-center': true, reverse: $q.screen.gt.sm, 'justify-between': true }">
            <div :class="{ 'col-auto': true }">
              <q-btn :class="{ 'q-pl-xs': $q.screen.lt.sm, 'q-pr-lg': $q.screen.lt.sm }" size="lg" flat
                :icon="$q.screen.gt.sm ? 'close' : 'arrow_back'" color="blue-grey-10"
                @click="hqux.changeToggleDrawer()"></q-btn>
            </div>
            <div class="col">
              <div class="text-h4 text-blue-grey-10"> {{ step.title }}</div>
            </div>
          </div>
        </q-card-section>


        <q-card-section class="bg-white" style="max-width:100%;">
          <div class="row">
            <div class="col-12">
              <q-scroll-area :thumb-style="thumbStyle" :content-style="contentStyle"
                :content-active-style="contentActiveStyle"
                :style="{ height: $q.screen.gt.sm ? $q.screen.height - 158 - 86 - 16 - 32 + 'px' : $q.screen.height - 86 - 16 - 32 - 10 + 'px', width: '100%' }">

                <!--Step Info What & Why -->
                <div class="" style="width:100%">
                  <div class="text-subtitle1 q-pt-md text-blue-grey-10">
                    <span class="">What You’ll Do:</span>
                    <span>
                      <ul class="q-ma-none q-pl-md text-body2 text-blue-grey-6">
                        <li v-for="w in step.what" :key="w">{{ w }}</li>
                      </ul>
                    </span>
                  </div>
                  <div class="text-subtitle1 q-py-md text-blue-grey-10">
                    <span class="">Why We’re Doing This:</span>
                    <span>
                      <ul class="q-ma-none q-pl-md text-body2 text-blue-grey-6">
                        <li v-for="w in step.why" :key="w">{{ w }}</li>

                      </ul>
                    </span>
                  </div>
                </div>

                <!--Step Instructions -->
                <div class="q-pt-md">
                  <q-separator />
                  <div class="row instruction-panel-container">
                    <div class="col-12 q-pt-md" v-for="(st, index) in step.steps" :key="st.title">
                      <div class="row">
                        <div class="col-12">
                          <div class="text-subtitle1 text-blue-grey-10">Step {{ index + 1 }} - {{ st.title }}</div>
                          <div class="text-body2 text-blue-grey-6">
                            <ul>
                              <li v-for="instr in st.instructions" :key="instr"><span v-html="instr"></span></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-12" style="width:100%">
                          <div class="row q-pb-lg" v-if="st.annex.length >= 1">
                            <div class="col-auto  q-pl-md q-pt-md" v-for="an in st.annex" :key="an.label">
                              <q-card v-ripple class="step-annex cursor-pointer q-hoverable" @click="openUrl(an.url)">
                                <span class="q-focus-helper"></span>
                                <q-icon class="absolute" style="z-index:10;top:6px;left:6px;" size="lg"
                                  :name="setAnnexIcon(an.type)" color="positive"></q-icon>
                                <q-img :src="an.img" style="height:50px;width:50px;" fit="contain"></q-img>
                                <q-tooltip>
                                  {{an.label}}
                                </q-tooltip>
                              </q-card>
                            </div>
                          </div>
                          <q-separator />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </q-scroll-area>
            </div>
          </div>
        </q-card-section>




      </q-card>


    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useHqUx } from '../stores/hq-ux';
import { useHq } from '../stores/hq-content';


const hqux = useHqUx()
const hq = useHq()
const route = useRoute()
let id = ref('')
let step = {};

onMounted(() => {
  console.log('component and route are mounted: ' + route.params.id);
  step = computed(() => hq.getSteps.find((s) => { return s.id === route.params.id }));
})

onUpdated(() => {
  console.log('component and route are updated: ' + route.params.id);
  step = computed(() => hq.getSteps.find((s) => { return s.id === route.params.id }));
})

function setAnnexIcon(type) {
  if (type === 'file') {
    return 'download_for_offline'
  } else if (type === 'url') {
    return 'link'
  } else if (type === 'video') {
    return 'movie'
  }
  else {
    return 'download'
  }
}

function openUrl(url) {
  window.open(url, '_blank')
}

const contentStyle = {

}

const contentActiveStyle = {
}

const thumbStyle = {
  width: '0px',
  opacity: '0'
}



</script>
<style lang="scss" scoped>
.instruction-panel-container {
  border-radius: 2px;
}

.step-annex {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: grey;
}

.step-annex:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
