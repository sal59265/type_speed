<template>
<div>
  <div v-for="(user,index) in users"
  :key="index">
    <div>{{user.name}}</div>
    <div>{{user.wpm}}</div>
    <div>{{user.accuracy}}</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
export default {
  name: 'LeaderBoard',
  data: () => ({
    users: []
  }),
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers(){
      const res = await axios.get(`${BASE_URL}/users/`)
      this.users = res.data.users
    }
  }
}
</script>
