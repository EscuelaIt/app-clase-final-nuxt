<script setup>
definePageMeta({
  layout: 'auth'
})

const router = useRouter()

const email = ref('')
const password = ref('')

const onSubmit = async () => {
  try {
    const { data, error } = await $fetch('/api/auth/login', { method: 'POST', body:
      {
        email: email.value, password: password.value
      } })

    console.log(error)
    if (error) throw new Error(error.message || error.error_description)

    console.log(data)
    useState('user', () => data.user)
    router.push('/')
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <section class="border rounded-lg w-3/4 flex justify-center p-4">
    <form @submit.prevent="onSubmit()" class="flex flex-col">
      <input v-model="email" type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
      <input v-model="password" type="text" placeholder="Contraseña" class="input input-bordered w-full max-w-xs" />

      <NuxtLink to="/auth/register" class="mt-7">¿No te has registrado?</NuxtLink>

      <button class="btn mt-7">Iniciar sesión</button>
    </form>
  </section>
</template>