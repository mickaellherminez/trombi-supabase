<template>
  <q-page padding>
    <transition
      appear
      enter-active-class="animated backInUp"
      leave-active-class="animated backOutUp"
      v-show="loader"
    >
      <div class="frame">
        <div class="circle"></div>
        <div class="line left"></div>
        <div class="line right"></div>
        <div class="bracket left"></div>
        <div class="bracket right"></div>
        <div class="small top">Wellcome to</div>
        <div class="big">One Resources</div>
        <div class="small bottom">ObjectWare</div>
        <div class="hide top"></div>
        <div class="hide bottom"></div>
      </div>
    </transition>
    <transition enter-active-class="animated backInUp" v-show="!loader">
      <q-form class="row justify-center" @submit.prevent="handleLogin">
        <p class="col-12 text-h5 text-center">Login</p>
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-input
            label="Email"
            v-model="form.email"
            lazy-rules
            :rules="[(val) => validateEmail(val)]"
          />

          <q-input
            v-model="form.password"
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length >= 6) ||
                'Password required with minimum 6 characters',
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="full-width q-pt-md">
            <q-btn
              label="Login"
              color="primary"
              class="full-width"
              outline
              rounded
              type="submit"
            />
          </div>

          <div class="full-width q-gutter-y-sm">
            <q-btn
              label="Register"
              color="primary"
              class="full-width"
              rounded
              flat
              to="/register"
              size="sm"
            />
            <q-btn
              label="Forgot Password ?"
              color="primary"
              class="full-width"
              rounded
              flat
              :to="{ name: 'forgot-password' }"
              size="sm"
            />
          </div>
        </div>
      </q-form>
    </transition>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import useNotify from "src/composables/UseNotify";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",

  setup() {
    const router = useRouter();

    const { login, isLoggedIn } = useAuthUser();

    const { notifyError, notifySuccess } = useNotify();

    const form = ref({
      email: "",
      password: "",
    });

    onMounted(() => {
      if (isLoggedIn) {
        router.push({ name: "me" });
      }
    });

    const handleLogin = async () => {
      try {
        await login(form.value);
        notifySuccess("Login successfully!");
        router.push({ name: "me" });
      } catch (error) {
        notifyError(error.message);
        // alert (error. message)
      }
    };

    return {
      loader: ref(true),
      isPwd: ref(true),
      form,
      handleLogin,
    };
  },
  methods: {
    validateEmail(email) {
      if (email) {
        return /[a-z0-9]+@objectware.fr/.test(email)
          ? true
          : "Objectware email required";
      } else {
        return "Email is required";
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 3500);
  },
});
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);

.frame {
  position: relative;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 400px;
  margin-top: -100px;
  margin-left: -300px;
  border-radius: 2px;
  overflow: hidden;
  color: #ff8401;
  font-family: "Open Sans", Helvetica, sans-serif;
}

.circle {
  position: relative;
  z-index: 10;
  height: 50px;
  width: 50px;
  top: 175px;
  left: 275px;
  background: #ff8401;
  border-radius: 50%;
  animation: circle 1s ease-in-out;
  animation-fill-mode: forwards;
}

.line {
  position: absolute;
  z-index: 10;
  width: 150px;
  height: 4px;
  top: 198px;
  background: #ff8401;
  transform: scaleX(0);
}

.line.left {
  left: 50px;
  transform-origin: 100% 50%;
  animation: lines 1s ease-in-out 0.8s, line-left 1s steps(1) 0.8s;
}

.line.right {
  right: 50px;
  transform-origin: 0% 50%;
  animation: lines 1s ease-in-out 0.8s, line-right 1s steps(1) 0.8s;
}

.bracket {
  position: absolute;
  z-index: 10;
  height: 70px;
  width: 4px;
  top: 165px;
  background: #ff8401;
  animation: bracket 0.4s ease-out 1.7s;
  animation-fill-mode: both;
}

.bracket:before,
.bracket:after {
  position: absolute;
  display: block;
  content: "";
  width: 25px;
  height: 4px;
  background: #ff8401;
}

.bracket.left {
  left: 127px;
}

.bracket.left:before {
  top: 0;
  left: 0;
  transform-origin: 0% 50%;
  animation: bracket-line 0.2s ease-out 2.1s;
  animation-fill-mode: both;
}

.bracket.left:after {
  bottom: 0;
  left: 0;
  transform-origin: 0% 50%;
  animation: bracket-line 0.2s ease-out 2.1s;
  animation-fill-mode: both;
}

.bracket.right {
  right: 127px;
}

.bracket.right:before {
  top: 0;
  right: 0;
  transform-origin: 100% 50%;
  animation: bracket-line 0.2s ease-out 2.1s;
  animation-fill-mode: both;
}

.bracket.right:after {
  bottom: 0;
  right: 0;
  transform-origin: 100% 50%;
  animation: bracket-line 0.2s ease-out 2.1s;
  animation-fill-mode: both;
}

.big {
  position: absolute;
  z-index: 5;
  top: 173px;
  width: 600px;
  text-align: center;
  font-weight: 800;
  font-size: 35px;
  color: #4dbdf6;
  line-height: 50px;
  text-transform: uppercase;
}

.hide {
  position: absolute;
  z-index: 7;
  width: 600px;
  height: 50px;
  background: #fff;
  left: 0;
  animation: reveal 0.4s ease-out 1.7s;
  animation-fill-mode: both;
}

.hide.top {
  bottom: 49%;
  transform-origin: 50% 0%;
}

.hide.bottom {
  top: 49%;
  transform-origin: 50% 100%;
}

.small {
  position: absolute;
  z-index: 10;
  width: 600px;
  text-align: center;
  left: 0;
  font-weight: 300;
  font-size: 30px;
  color: #000000;
  line-height: 30px;
  text-transform: uppercase;
}

.small.top {
  top: 140px;
  animation: small-top 0.5s ease-out 2.2s;
  animation-fill-mode: both;
}

.small.bottom {
  bottom: 140px;
  animation: small-bottom 0.5s ease-out 2.2s;
  animation-fill-mode: both;
}

@keyframes circle {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  90%,
  100% {
    transform: scale(0);
  }
}

@keyframes lines {
  0% {
    transform: scaleX(0);
  }

  50% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0);
  }
}

@keyframes line-left {
  0% {
    transform-origin: 100% 50%;
  }

  50%,
  100% {
    transform-origin: 0% 50%;
  }
}

@keyframes line-right {
  0% {
    transform-origin: 0% 50%;
  }

  50%,
  100% {
    transform-origin: 100% 50%;
  }
}

@keyframes bracket {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
}

@keyframes bracket-line {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

@keyframes reveal {
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0);
  }
}

@keyframes small-top {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes small-bottom {
  0% {
    transform: translateX(20px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.rounded {
  border-radius: 10px 10px 0px 0px;
}
</style>
