<template>
  <workout-calendar/>
</template>

<script>
import workoutDay from './WorkoutDay'
import workoutCalendar from './WorkoutCalendar'
export default {
  components:{
    workoutDay,workoutCalendar
  },
  name: 'app'
}
</script>


