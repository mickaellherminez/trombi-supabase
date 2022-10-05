<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-black bg-info">
        <q-toolbar-title>
          <q-btn
            v-if="$q.screen.lt.xs || $q.screen.lt.sm"
            :to="{ name: 'register' }"
            flat
          >
            <img
              alt="One Resources logo"
              src="~assets/One-resources-logo-short.svg"
              style="height: 32px"
            />
          </q-btn>
          <q-btn v-else :to="{ name: 'register' }" flat>
            <img
              alt="One Resources logo"
              src="~assets/One-resources-logo.svg"
              style="width: 200px"
            />
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="text-black bg-info" style="height: 40px">
      <q-toolbar>
        <q-toolbar-title
          v-if="!sizeXs && !sizeSm && !sizeMd"
          class="text-subtitle1 text-left col-md-2 col-lg-2 col-xl-1 q-mb-md"
          >V{{ version }}</q-toolbar-title
        >
        <q-toolbar-title
          class="text-center col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-10 q-mb-md"
        >
          <q-btn
            flat
            round
            @click="goTo('https://www.objectware.fr/')"
            icon="mdi-adjust"
          >
            <q-tooltip
              class="bg-accent text-black shadow-4 text-body2"
              size="2rem"
              :offset="[200, 20]"
              transition-show="scale"
              transition-hide="scale"
            >
              Website Objectware
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            @click="goTo('https://training.objectware.fr/')"
            icon="mdi-school"
          >
            <q-tooltip
              class="bg-accent text-black shadow-4 text-body2"
              size="2rem"
              :offset="[200, 20]"
              transition-show="scale"
              transition-hide="scale"
            >
              Website Objectware Training
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            @click="
              goTo(
                'https://www.linkedin.com/company/objectware/mycompany/verification/'
              )
            "
            icon="mdi-linkedin"
          >
            <q-tooltip
              class="bg-accent text-black shadow-4 text-body2"
              size="2rem"
              :offset="[200, 20]"
              transition-show="scale"
              transition-hide="scale"
            >
              Objectware on Linkedin
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            @click="goTo('https://www.facebook.com/Objectware-486743308145905')"
            icon="mdi-facebook"
          >
            <q-tooltip
              class="bg-accent text-black shadow-4 text-body2"
              size="2rem"
              :offset="[200, 20]"
              transition-show="scale"
              transition-hide="scale"
            >
              Objectware on Facebook
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            @click="goTo('https://twitter.com/Objectware1')"
            icon="mdi-twitter"
          >
            <q-tooltip
              class="bg-accent text-black shadow-4 text-body2"
              size="2rem"
              :offset="[200, 20]"
              transition-show="scale"
              transition-hide="scale"
            >
              Objectware on Twitter
            </q-tooltip>
          </q-btn>
          <q-btn
            flat
            round
            @click="goTo('https://objectware-fr.workplace.com/')"
            icon="mdi-facebook-workplace"
          >
            <q-tooltip
              class="bg-accent text-black shadow-4 text-body2"
              size="2rem"
              :offset="[200, 20]"
              transition-show="scale"
              transition-hide="scale"
            >
              Objectware on Workplace
            </q-tooltip>
          </q-btn>
          <q-btn
            v-if="!sizeXs"
            flat
            round
            @click="goTo('https://www.instagram.com/objectware/')"
            icon="mdi-instagram"
          >
            <q-tooltip
              class="bg-accent text-black shadow-4 text-body2"
              size="2rem"
              :offset="[200, 20]"
              transition-show="scale"
              transition-hide="scale"
            >
              Objectware on Instagram
            </q-tooltip>
          </q-btn>
          <q-btn
            v-if="!sizeXs"
            flat
            round
            @click="
              goTo('https://www.youtube.com/channel/UCZRfp0p4vC8WxbQVAymuZjw')
            "
            icon="mdi-youtube"
          >
            <q-tooltip
              class="bg-accent text-black shadow-4 text-body2"
              size="2rem"
              :offset="[200, 20]"
              transition-show="scale"
              transition-hide="scale"
            >
              Objectware on Youtube
            </q-tooltip>
          </q-btn>
        </q-toolbar-title>
        <q-toolbar-title
          v-if="!sizeXs && !sizeSm && !sizeMd"
          class="text-subtitle1 text-right col-md-2 col-lg-2 col-xl-1 q-mb-md"
          >TeamJS©{{ year }}</q-toolbar-title
        >
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "LoginLayout",

  setup() {
    const $q = useQuasar();

    return {
      // TODO: Code to share
      version: JSON.stringify(require("../../package.json").version).replaceAll(
        '"',
        ""
      ),
      year: new Date().getFullYear(),
      goTo(url) {
        window.open(url, "_blank");
      },
    };
  },
  computed: {
    sizeXs() {
      return this.$q.screen.name === "xs";
    },
    sizeSm() {
      return this.$q.screen.name === "sm";
    },
    sizeMd() {
      return this.$q.screen === "md";
    },
    sizeLg() {
      return this.$q.screen === "lg";
    },
    sizeXl() {
      return this.$q.screen === "xl";
    },
  },
});
</script>
