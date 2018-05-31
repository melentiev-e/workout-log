import api from '../api/index'

// actions
export const getAllTrainings = ({ commit }) => {
      api.getAllTrainings(trainings => {
        commit('setTrainings', trainings)
      })
    }
  