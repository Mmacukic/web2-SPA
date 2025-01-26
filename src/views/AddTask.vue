<template>
    <div>
      <h1>Add Task</h1>
      <!-- Include AddTaskForm and listen for add-task event -->
      <AddTaskForm @add-task="addTask" />
      <!-- Link to go back to the Home page -->
      <router-link to="/">Back to Home</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { useTaskStore } from '../stores/taskStore';
  import AddTaskForm from '../components/AddTaskForm.vue';
  
  export default {
    components: { AddTaskForm }, // Register AddTaskForm component
    setup() {
      const store = useTaskStore();
  
      // Handle the addition of a new task
      const addTask = (task: { id: number; name: string; completed: boolean }) => {
        store.addTask(task);
      };
  
      return { addTask };
    },
  };
  </script>
  