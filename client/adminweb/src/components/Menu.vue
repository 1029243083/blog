<template>
  <el-menu
    background-color="#545C64"
    text-color="#fff"
    @open="handleOpen"
    :default-active="active"
  >
    <el-submenu index="admin">
      <template slot="title">
        <i class="el-icon-s-custom"></i>
        <span>管理员</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="admin-1">
          <router-link tag="li" to="/admin">管理员列表</router-link>
        </el-menu-item>
        <el-menu-item index="admin-2">
          <router-link tag="li" to="/addAdmin">添加管理员</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="user">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>用户</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="user-1">
          <router-link tag="li" to="/user">用户列表</router-link>
        </el-menu-item>
        <el-menu-item index="user-2">
          <router-link tag="li" to="/adduser">添加用户</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="list">
      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span>文章列表</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="list-1">
          <router-link tag="li" to="list">文章列表</router-link>
        </el-menu-item>
        <el-menu-item index="list-2">
          <router-link tag="li" to="addlist">添加列表</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="article">
      <template slot="title">
        <i class="el-icon-reading"></i>
        <span>文章</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="article-1">
          <router-link to="/article" tag="li">文章</router-link>
        </el-menu-item>
        <el-menu-item index="article-2">
          <router-link tag="li" to="/addarticle">添加文章</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="label">
      <template slot="title">
        <i class="el-icon-price-tag"></i>
        <span>标签</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="label-1">
          <router-link tag="li" to="/label">标签列表</router-link>
        </el-menu-item>
        <el-menu-item index="label-2">
          <router-link tag="li" to="/addlabel">添加标签</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="message">
      <template slot="title">
        <i class="el-icon-chat-dot-round"></i>
        <span>留言</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="message-1">
          <router-link tag="li" to="/message">留言列表</router-link>
        </el-menu-item>
        <el-menu-item index="message-2">
          <router-link tag="li" to="/addmessage">添加留言</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      active: "admin-1",
    };
  },
  methods: {
    handleOpen(index, a) {
      this.active = index + "-1";
      const path = `/${index}`;
      if (this.$route.path === path) return;
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.el-menu {
  height: 100%;
}
</style>