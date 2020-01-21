<template>
  <div id="posts">
    <sui-feed-event v-for="post in posts" v-bind:key="post.id">
      <sui-feed-label>
        <img class="profile-pic-post" src="../assets/joe.jpg">
      </sui-feed-label>
      <sui-feed-content style="margin-left: 70px; margin-top: -50px">
        <sui-feed-summary>
          <b>{{user.name}}</b> posted on their page
          <sui-feed-date>
            <b>{{post.title}}</b>
          </sui-feed-date>
          <br>
        </sui-feed-summary>
        <sui-feed-extra text>{{post.body}}</sui-feed-extra>

        <sui-feed-meta>
          <div v-if="!hidden && openPost == post.id">
            <div v-for="comment in comments" v-bind:key="comment.id">
              <Comment v-bind:commentData="comment"/>
            </div>
            <a v-on:click="hideComments">Hide Comments</a>
          </div>
          <div v-else>
            <a v-on:click="showComments(post.id)">Show Comments</a>
          </div>
        </sui-feed-meta>
      </sui-feed-content>
    </sui-feed-event>
  </div>
</template>

<script>
import axios from "axios";
import Comment from "./Comment";

export default {
  name: "Posts",
  props: {
    userId: Number,
    postData: Object
  },
  data() {
    return {
      user: {},
      posts: [],
      comments: [],
      error: "",
      hidden: true,
      openPost: 0
    };
  },
  components: {
    Comment
  },
  methods: {
    showComments(postId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => (this.comments = res.data))
        .catch(err => (this.error = err));
      this.hidden = !this.hidden;
      this.openPost = postId;
    },
    hideComments() {
      this.hidden = !this.hidden;
      this.comments = [];
    },
    goToProfile(userId) {
      this.$router.push({ name: "profile", params: { userId: userId } });
    }
  },
  mounted() {
    axios
      .all([
        axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${
            this.$route.params.userId
          }`
        ),
        axios.get(
          `https://jsonplaceholder.typicode.com/users?id=${
            this.$route.params.userId
          }`
        )
      ])
      .then(
        axios.spread((postsResponse, userResponse) => {
          this.posts = postsResponse.data;
          this.user = userResponse.data[0];
        })
      )
      .catch(err => (this.error = err));
  }
};
</script>

<style>
a {
  cursor: pointer;
}

.comment {
  margin: 10px 50px;
}

.profile-pic-post {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
}
</style>

