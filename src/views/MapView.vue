<template>
  <div>
    <!-- 顶部横条 -->
    <el-row>
      <el-col :span="24" :style="'height:' + fullHeight * 0.05 + 'px;'"
        ><div class="grid-content bg-purple-dark" style="height: 100%"></div
      ></el-col>
    </el-row>
    <!-- 中部地图和边栏 -->
    <el-row>
      <!-- 边栏 -->
      <el-col :span="4" :style="'height:' + fullHeight * 0.65 + 'px;'">
        <el-tag type="" effect="plain">设备参数显示窗口</el-tag>

        <side-bar :table_data="dev_info" style="height: 100%"></side-bar>
      </el-col>
      <!-- 地图 -->
      <el-col :span="20" :style="'height:' + fullHeight * 0.65 + 'px;'"
        ><map-content
          style="height: 100%; width: 80%; position: absolute; margin-left: 3%"
        ></map-content
      ></el-col>
    </el-row>
    <!-- 底部表格 -->
    <el-row :style="'height:' + fullHeight * 0.05 + 'px;'">
      <el-tag :span="24" type="" effect="plain">设备参数显示窗口</el-tag>

    <el-col :span="24" :style="'height:' + fullHeight * 0.2 + 'px;'">
      <tab-bar :table_data="dev_info"></tab-bar>
    </el-col>
    <!-- <point-create @form_data="form_rec"></point-create> -->
    </el-row>
  </div>
</template>

<script>
import TabBar from "../components/tabbar/TabBar";
import MapContent from "../components/content/MapContent";
import SideBar from "../components/tabbar/SideBar";
import PointCreate from "../components/form/PointCreate.vue";

export default {
  name: "MapView",
  components: {
    TabBar,
    MapContent,
    SideBar,
    PointCreate,
  },
  data() {
    return {
      fullHeight: document.documentElement.clientHeight,
      dev_info: [],
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
    form_rec(item) {
      console.log(this.dev_info);
      this.dev_info.push({
        id: this.dev_info.length,
        name: item.name,
        log: item.log,
        lng: item.lng,
        money: item.money,
      });
      console.log(this.dev_info.id);
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