<template>
    <div>
      <!-- Checkbox to toggle task completion -->
      <input type="checkbox" :checked="task.completed" @change="$emit('toggle-task', task.id)" />
      <!-- Display task name with conditional styling -->
      <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.name }}</span>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      task: {
        type: Object as () => { id: number; name: string; completed: boolean },
        required: true,
      }, // Task data passed as a prop
    },
  };
  </script>