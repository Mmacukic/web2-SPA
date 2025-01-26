<template>
  <div>
    <h1>Task Manager</h1>
    <!-- Display the task list component -->
    <p>Total Tasks: {{ tasksCount }}</p>

    <TaskList />
    <!-- Link to the Add Task page -->
    <router-link to="/add">Add a Task</router-link>
  </div>
</template>

<script lang="ts">
import TaskList from '../components/TaskList.vue';
import { useTaskStore } from '../stores/taskStore';
import { computed } from 'vue';

export default {
  components: { TaskList },
  setup() {
    const store = useTaskStore();
    
    // Computed property to count tasks
    const tasksCount = computed(() => store.tasks.length);

    return { tasksCount };
  },
};
</script>