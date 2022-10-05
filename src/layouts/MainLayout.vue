<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-black bg-info">
        <q-btn
          flat
          dense
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
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

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <q-btn-dropdown flat icon="person">
          <q-list>
            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "quasar.dev",
    icon: "mdi-home",
    routeName: "me",
  },
  {
    title: "Skills",
    caption: "quasar.dev",
    icon: "mdi-briefcase-check-outline",
    routeName: "skill",
  },
  // ,
  // {
  //   title: 'Colab',
  //   caption: 'quasar.dev',
  //   icon: 'mdi-account-multiple-check',
  //   routeName: 'mez'
  // }
];

import { defineComponent, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const $q = useQuasar();

    const router = useRouter();

    const { logout } = useAuthUser();

    const handleLogout = async () => {
      $q.dialog({
        title: "Logout",
        message: "Do you really want to leave ?",
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await logout();
        router.replace({ name: "login" });
      });
    };

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
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      handleLogout,
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
