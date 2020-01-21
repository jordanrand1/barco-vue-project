<template>
  <div>
    <div class="row">
      <div class="column">
        <div class="sticky">
          <sui-card v-if="user">
            <sui-card-content>
              <sui-card-header>{{user.name}}</sui-card-header>
              <sui-card-meta>{{user.email}}</sui-card-meta>
              <sui-card-description>{{user.company.catchPhrase}}</sui-card-description>
            </sui-card-content>
            <sui-card-content extra>
              <sui-icon name="user"/>
              {{user.company.name}}
              <span slot="right">{{user.address.city}}</span>
            </sui-card-content>
          </sui-card>
          <div v-else></div>
        </div>
      </div>
      <div class="column center">
        <Posts v-bind:userId="userId"/>
      </div>
      <div class="column">
        <div class="sticky">
          <sui-button v-on:click="goBack">Back</sui-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from "./Posts";
import axios from "axios";

export default {
  name: "Profile",
  components: {
    Posts
  },
  data() {
    return {
      userId: 0,
      user: {},
      error: {}
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.userId = parseInt(this.$route.params.userId, []);
    axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${this.userId}`)
      .then(res => (this.user = res.data[0]))
      .catch(err => (this.error = err));
  }
};
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.column {
  flex: 1;
}

.center {
  flex: 2;
  margin-top: 40px;
}

.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 40px;
}
</style>
