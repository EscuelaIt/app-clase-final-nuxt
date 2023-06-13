<template>
  <div class="content">
    <div class="fixed top-0 bottom-0 w-40 border-r h-full sidebar bg-[#e74c3c] text-white">
      <img class="w-10 h-10" src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600" />
      <div class="flex flex-col">
        <NuxtLink to="/admin/courses">Cursos</NuxtLink>
        <NuxtLink to="/admin/users">Usuarios</NuxtLink>
      </div>
    </div>
    <main class="main bg-[#303030] text-white">
      <slot />
    </main>
  </div>
</template>

<style>
.content {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 10rem 1fr;
  grid-template-areas: 
    'sidebar main';
  height: 100vh;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
</style>