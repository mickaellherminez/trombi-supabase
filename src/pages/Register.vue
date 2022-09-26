<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center"> Register </p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">

        <q-input label="Name" color="info" v-model="form.name" lazy-rules
          :rules="[val => (val && val.length > 0) || 'Name is required']" />
        <q-input label="Email" color="info" v-model="form.email" lazy-rules :rules="[val => validateEmail(val),]" />

        <q-input v-model="form.password" label="Password" color="info" :type="isPwd ? 'password' : 'text'" lazy-rules
          :rules="[val => (val && val.length >= 6) || 'Password required with minimum 6 characters']">
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
          </template>
        </q-input>

        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn label="Register" color="info" class="full-width" outline rounded type="submit" />
          <q-btn label="Back" color="dark" class="full-width" rounded flat :to="{ name: 'login'}" />
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
  name: 'PageRegister',

  setup() {
    const router = useRouter()
    const { register } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      name: '',
      email: '',
      password: ''
    })

    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess()
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      isPwd: ref(true),
      form,
      handleRegister
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
