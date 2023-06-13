<template>
  <header class="flex justify-between border-b px-5 py-3">
    <img class="w-8 h-8" src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600" />

    <div class="grid grid-cols-4 gap-4 items-center">
      <NuxtLink>Cursos</NuxtLink>
      <NuxtLink to="/profile">Profile</NuxtLink>
      <NuxtLink to="/admin">Admin</NuxtLink>
      <NuxtLink to="/auth/login">Login</NuxtLink>
    </div>
  </header>
</template>