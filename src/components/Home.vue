<template>
  <div id="home" style="margin-top: 40px;">
    <div class="row">
      <div class="column">
      </div>
      <div class="column center">
        <sui-card-group :items-per-row="3" style="width: 920px;">
          <div v-for="user in users" v-bind:key="user.id">
            <sui-card v-on:click="profileClicked(user.id)" style="cursor: pointer;">
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
          </div>
        </sui-card-group>
      </div>
      <div class="column">

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      users: [],
      error: ""
    };
  },
  methods: {
    profileClicked(userId) {
      this.$router.push({
        path: "/profile",
        name: "profile",
        params: { userId }
      });
    }
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => (this.users = res.data))
      .catch(err => (this.error = err));
  }
};
</script>

<style>
body {
  height: auto !important;
}

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
  margin-top: 80px;
}

.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 40px;
}
</style>

