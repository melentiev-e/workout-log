<template>
    <div class="workoutday">
        <div>{{training.Date}}</div>
        <div v-for="(exercise, key) in training.Exercises" :key="key">
            <div>
                {{exercise.title}}
            </div>
            <div class="set" v-for="(set,key) in exercise.sets" :key="('set'+key)">
                <div className="set-item" v-for="(s,key) in set" :key="'s'+key">
                    {{s}}-{{exercise.quntities[key]}}
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "workout",
  computed: mapGetters({
    training: "training"
  }),
  created() {
    this.$store.dispatch("getTraining");
  }
};
</script>
<style lang="scss" scoped>
.set{
    display: flex;
}
</style>
