<template>
    <form @submit.prevent="submitForm">
      <!-- Input field for task name with two-way binding -->
      <input v-model="taskName" type="text" placeholder="Task name" />
      <!-- Button to submit the form -->
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  
  export default {
    emits: ['add-task'], // Emits an event when a task is added
    setup(_, { emit }) {
      const taskName = ref(''); // Task name input value
  
      // Handle form submission
      const submitForm = () => {
        if (taskName.value.trim()) {
          // Emit the add-task event with task details
          emit('add-task', { id: Date.now(), name: taskName.value, completed: false });
          taskName.value = ''; // Clear the input field
        }
      };
  
      return { taskName, submitForm };
    },
  };
  </script>