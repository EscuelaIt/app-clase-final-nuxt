<script setup>
definePageMeta({
  layout: 'auth'
})

const router = useRouter()

const email = ref('')
const password = ref('')
const username = ref('')

const onSubmit = async () => {
  try {
    const { data, error } = await $fetch('/api/auth/register', { method: 'POST', body:
      {
        email: email.value, password: password.value, username: username.value
      } })

    console.log(error)
    if (error) throw new Error(error.message || error.error_description)

    console.log(data)
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
      <input v-model="username" type="text" placeholder="Nombre usuario" class="input input-bordered w-full max-w-xs" />
      <input v-model="password" type="text" placeholder="Contraseña" class="input input-bordered w-full max-w-xs" />

      <NuxtLink to="/auth/login" class="mt-7">¿Ya estás registrado?</NuxtLink>

      <button class="btn mt-7">Registrarme</button>
    </form>
  </section>
</template>