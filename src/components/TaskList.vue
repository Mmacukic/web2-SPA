<template>
    <div>
      <h2>Tasks</h2>
      <!-- Display loading message if tasks are not loaded -->
      <div v-if="!tasks.length">Loading tasks...</div>
      <ul>
        <!-- Loop through and display each task using TaskItem component -->
        <li v-for="task in filteredTasks" :key="task.id">
          <TaskItem :task="task" @toggle-task="toggleTaskCompletion" />
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { useTaskStore } from '../stores/taskStore';
  import TaskItem from './TaskItem.vue';
  import { computed, onMounted } from 'vue';
  
  export default {
    components: { TaskItem }, // Register TaskItem component
    setup() {
      const store = useTaskStore();
  
      // Fetch tasks when the component is mounted
      onMounted(() => {
        store.fetchTasks();
      });
  
      // Computed property to get all tasks
      const tasks = computed(() => store.tasks);
      // Computed property to filter tasks that are not completed
      const filteredTasks = computed(() => tasks.value.filter(t => !t.completed));
  
      // Toggle completion status of a task
      const toggleTaskCompletion = (taskId: number) => {
        store.toggleTaskCompletion(taskId);
      };
  
      return { tasks, filteredTasks, toggleTaskCompletion };
    },
  };
  </script>