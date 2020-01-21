<template>
  <div id="comment">
    <sui-comment>
      <img class="profile-pic-comment" src="../assets/elliot.jpg">
      <sui-comment-content class="comment">
        <a is="sui-comment-author">{{commentData.email}}</a>
        <sui-comment-text>{{commentData.body}}</sui-comment-text>
      </sui-comment-content>
    </sui-comment>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    commentData: Object
  }
};
</script>

<style>
.profile-pic-comment {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 60px;
  margin-right: 20px;
}

.comment {
  margin-left: 50px !important;
  margin-top: -40px !important;
}
</style>
