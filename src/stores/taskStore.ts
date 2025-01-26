import { defineStore } from 'pinia';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[], // Holds the list of tasks
  }),
  actions: {
    // Simulate async fetch of tasks
    async fetchTasks() {
      if (this.tasks.length === 0) { // Ensure tasks are not overwritten if already loaded
        const fetchedTasks = await new Promise<Task[]>((resolve) => {
          setTimeout(() => resolve([
            { id: 1, name: 'Learn Vue 3', completed: false },
            { id: 2, name: 'Build a Task App', completed: false },
          ]), 1000);
        });
        this.tasks = fetchedTasks;
      }
    },
    // Add a new task to the list
    addTask(task: Task) {
      this.tasks.push(task);
    },
    // Toggle the completion status of a task
    toggleTaskCompletion(taskId: number) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) task.completed = !task.completed;
    },
  },
});