<script setup>
const courses = ref([])
const showCourses = async () => {
  courses.value = await $fetch('/api/courses')
  // courses.value = await $fetch('/courses')
}
const addCourse = async () => {
  const course = await $fetch('/api/courses', { method: 'POST', body: { name: 'vue' } })
  console.log(course)
}
const changeCourse = async () => {
  try {
    isLoading = true
    const course = await $fetch('/api/courses/vuee', { method: 'PUT', body: { newName: 'vue3' } })
    console.log(course)
  } catch (error) {
    
  } finally {
    isLoading = false
  }
}

const deleteCourse = () => {
  $fetch('/api/courses/vue', { method: 'DELETE' })
}
</script>

<template>
  <button class="btn">Button</button>
  
  <button @click="addCourse()">Crear Curso</button>
  <button @click="changeCourse()">Modificar Curso</button>
  <button @click="deleteCourse()">Eliminar Curso</button>
  <button @click="showCourses()">Mostrar cursos</button>
  <ul>
    <li v-for="course in courses">{{ course }}</li>
  </ul>
</template>
