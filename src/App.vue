<template>
  <div id="app">
    <!-- <el-container>
      <el-header style="text-align: right; font-size: 12px;height: 50px">Header</el-header>

        <el-side style="background-color: rgb(238, 241, 246);height:15px;width:15rem">111</el-side>
        <el-container>
          <el-col><map-content></map-content></el-col>
          <el-footer><tab-bar></tab-bar></el-footer>
        </el-container>
      </el-container> -->
    <!-- 顶部横条 -->
    <el-row> 
      <el-col :span="24" :style="'height:' + fullHeight * 0.05 + 'px;'"
        ><div class="grid-content bg-purple-dark" style="height: 100%"></div
      ></el-col>
    </el-row>
    <!-- 中部地图和边栏 -->
    <el-row>
      <!-- 边栏 -->
      <el-col :span="4" :style="'height:' + fullHeight * 0.67 + 'px;'"
        ><box-shadow><side-bar style="height: 100% "></side-bar></box-shadow>
        </el-col>
      <!-- 地图 -->
      <el-col :span="20"
        ><map-content style="height: 100%;width: 83%;position: absolute"></map-content
      ></el-col>
    </el-row>
    <!-- 底部表格 -->
    <el-row>
      <el-col :span="24" :style="'height:' + fullHeight * 0.2 + 'px;'">
        <tab-bar style="height: 100%"></tab-bar>
      </el-col>
    </el-row>

    <!-- <el-container>
      <el-main><map-content></map-content></el-main>
    </el-container> -->
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import MapContent from "./components/content/MapContent";
import SideBar from "./components/tabbar/SideBar";

export default {
  name: "App",
  components: {
    TabBar,
    MapContent,
    SideBar,
  },
  data() {
    return {
      fullHeight: document.documentElement.clientHeight,
    };
  },
  watch: {
    fullHeight(val) {
      //监控浏览器高度变化
      if (!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted() {
    this.get_bodyHeight();
  },
  methods: {
    get_bodyHeight() {
      //动态获取浏览器高度
      const that = this;
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight;
          that.fullHeight = window.fullHeight;
        })();
      };
    },
  },
};
</script>


<style>
.el-row {
  margin-bottom: 1%;
}
/* .el-col {
  border-radius: 1%;
} */
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

