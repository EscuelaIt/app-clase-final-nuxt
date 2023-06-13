<script setup>
definePageMeta({
  layout: 'admin'
})

const courses = ref([])

const loadData = async () => {
  const { data, error } = await $fetch('/api/courses')
  if (error) throw new Error(error.message || error.error_description)
  courses.value = data
}

loadData()
</script>

<template>
  <h2>Cursos</h2>

  <ul>
    <li v-for="course in courses">
      {{  course.name }}
    </li>
  </ul>
  <div class="overflow-x-auto">
  <table class="table w-full text-black">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr v-for="course in courses">
        <th>1</th>
        <td>{{ course.name }}</td>
      </tr>
      <!-- row 2 -->
      <tr v-for="course in courses">
        <th>2</th>
        <td>{{ course.id }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>