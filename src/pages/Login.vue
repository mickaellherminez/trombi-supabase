<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center"> Login </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Email" color="info" v-model="form.email" lazy-rules :rules="[val => validateEmail(val),]" />

        <q-input v-model="form.password" label="New Password" :type="isPwd ? 'password' : 'text'" lazy-rules :rules="[val => (val && val.length >= 6) || 'Password required with minimum 6 characters']">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>

        <div class="full-width q-pt-md">
          <q-btn label="Login" color="info" class="full-width" outline rounded type="submit" />
        </div>

        <div class="full-width q-gutter-y-sm">
          <q-btn label="Register" color="info" class="full-width" rounded flat to="/register" size="sm" />
          <q-btn label="Forgot Password ?" color="info" class="full-width" rounded flat :to="{ name: 'forgot-password'}"
            size="sm" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import useNotify from 'src/composables/UseNotify'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'LoginPage',

  setup() {
    const router = useRouter()

    const { login } = useAuthUser()

    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      email: '',
      password: ''
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        notifySuccess('Login successfully!')
        router.push({ name: 'me' })
      }
      catch (error) {
        notifyError(error.message)
        // alert (error. message)
      }
    }

    return {
      isPwd: ref(true),
      form,
      handleLogin
    }
  },
  methods: {
    validateEmail(email) {
      if (email) {
        return /[a-z0-9]+@gmail.com/.test(email) ? true : 'Objectware email required';
      } else {
        return 'Email is required'
      }
    }
  }
})
</script>
