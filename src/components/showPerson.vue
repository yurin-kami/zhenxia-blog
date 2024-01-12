<template>
  <div class="all">
    <el-container>
      <el-header>
        <img src="../images/zhenxia.jpg" alt="箴黠" id="zhenxia2" @click="gotoPage('')">
        欢迎小笨蛋们来到箴黠blog
        <!--         <div id="navRight">
          <a href="#">我的音乐</a>
          <a href="#">开源</a>
        </div> -->

        <ul>
          <li><el-dropdown @command="handleCommand" popper-class="vertical-dropdown-menu">
              <span class="el-dropdown-link">
                爱好<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu class="vertical-dropdown-menu">
                  <el-dropdown-item command="" @click="gotoPage('animation')">动漫</el-dropdown-item><!-- 跳转内部页面 -->
                  <el-dropdown-item command="" @click="gotoPage('game')">游戏</el-dropdown-item><!-- 跳转内部页面 -->
                  <el-dropdown-item command="" @click="gotoPage('notes')">轻小说</el-dropdown-item><!-- 跳转内部页面 -->
                  <el-dropdown-item command="" @click="gotoPage('cosPhos')">cosplay</el-dropdown-item><!-- 跳转内部页面 -->
                  <el-dropdown-item command="" @click="gotoPage('codeProj')">coding</el-dropdown-item><!-- 跳转内部页面 -->
                  <el-dropdown-item command="cmp" >喜欢的音乐</el-dropdown-item><!-- 网易云歌单 -->
                </el-dropdown-menu>
              </template>
            </el-dropdown></li>
          <li><a href="https://github.com/yurin-kami">开源</a></li>
          <li>
            <el-dropdown @command="handleCommand" popper-class="vertical-dropdown-menu">
              <span class="el-dropdown-link">
                社交号<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu class="vertical-dropdown-menu">
                  <el-dropdown-item :command="bilibiliLink">B站</el-dropdown-item><!-- 外部 -->
                  <el-dropdown-item :command="dy">抖音</el-dropdown-item><!-- 外部 -->
                  <el-dropdown-item :command="qq">QQ</el-dropdown-item><!-- 外部 -->
                  <el-dropdown-item :command="mys" >米游社</el-dropdown-item><!-- 外部 -->
                  <el-dropdown-item :command="cm" >cloud music</el-dropdown-item><!-- 外部网易云个人 -->
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
          <li><a href="https://user.qzone.qq.com/2063294262">QQ空间</a></li>
        </ul>
      </el-header>
    </el-container>
    <router-view />
  </div>
</template>

<script >
import { ElMessage } from 'element-plus'

export default{
  data() {
    return {
      bilibiliLink: "bilibili", 
      dy:"dy",
      qq:"qq",
      mys:"mys",
      cm:"cm",
      cmp:"cmp",
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "bilibili") {
        // 执行页面跳转，这里可以使用 window.location.href 或者 Vue Router 等方式
        window.location.href = "https://space.bilibili.com/388419468?spm_id_from=333.1007.0.0";
      };
      if (command === "dy") {
        window.location.href = "https://www.douyin.com/user/MS4wLjABAAAADaB0lxO_ZKXX7ay36Rx4je5FDQV-AuiJ8TYjR-LC54waS0zOELwPyww1w8pZmzm7";
      };
      if (command === "qq") {
        window.location.href = "https://qm.qq.com/cgi-bin/qm/qr?k=VYdjRa20HYgKLC5w0hNdhCUdywnkI8x4";
      };
      if (command === "mys") {
        window.location.href = "https://www.miyoushe.com/ys/accountCenter/postList?id=245357593";
      };
      if (command === "cm") {
        window.location.href = "https://music.163.com/#/user/home?id=6374247744";
      };
      if (command === "cmp") {
        window.location.href = "https://music.163.com/#/my/m/music/playlist?id=7213130386";
      };
    },
    //gotoPage函数
    gotoPage(page) {
    this.$router.push({ path: '/' + page });
    console.log(`跳转到本地页面: ${page}`);
  }
  },
};
</script>

<style>
a {
  display: block;
  position: relative;
  text-decoration: none;
  color: aqua;
  top: -50px;
}

.all {
  height: 98vh;
  background-image: url("../images/preview.gif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: aqua;
}

#navRight {
  position: absolute;
  right: 60px;
}

#zhenxia2 {
  border-radius: 50%;
  height: 10vh;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  height: 100%;
  position: fixed;
  top: 100px;
  right: 150px;
  /* 将 ul 放置在页面的右侧 */
  overflow: auto;
  display: flex;
  /* 使用弹性盒子布局 */
  flex-direction: row;
  overflow: visible;
}

li {
  text-align: center;
  margin-right: 10px;
  flex: 1;
  margin: 0 3px;
}

li:last-child {
  margin-right: 0;
  /* 最后一个 li 元素去除右边距，可根据需要调整 */
}

li a {
  /*这个block其实没什么用，因为块和浮动是矛和盾，互相无法限制*/
  /*此处去掉block之后，在li中设置line-height或者height效果基本类似*/
  color: aqua;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  color: aqua;
  /*字体*/
}

li a:hover{
  /*当鼠标悬浮在此处时，背景颜色变为灰色*/
  color: palevioletred;
  /*当鼠标悬浮在该处时，字变为白色*/
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: start;
}
.vertical-dropdown-menu {
  /* 设置下拉菜单选项垂直排列 */
  display: flex;
  flex-direction: column;
}
span{
  font-size: 15px;
  color: aqua;
}
span:hover{
  color: palevioletred;
}
</style>