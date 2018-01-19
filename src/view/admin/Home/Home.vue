<template>
  <div>   
    <div class="block">
      <span>欢迎你，丰盛管理员</span>
      <router-link class="el-button el-button--primary" :to="{name: 'newCourse'}">新建课程</router-link>
    </div>
    <div class="block todayCollect-box">
      <div class="flex-row">
        <div class="todayCollect-item border-normal">
          <div class="revenue item-left"></div>
          <div class="item-right">
            <div class="warning">1000</div>
            <div>今日收入</div>
          </div>
        </div>
        <div class="todayCollect-item border-normal">
          <div class="revenue item-left"></div>
          <div class="item-right">
            <div class="warning">1000</div>
            <div>今日订单</div>
          </div>
        </div>
        <div class="todayCollect-item border-normal">
          <div class="revenue item-left"></div>
          <div class="item-right">
            <div class="warning">1000</div>
            <div>今日UV</div>
          </div>
        </div>
        <div class="todayCollect-item border-normal">
          <div class="revenue item-left"></div>
          <div class="item-right">
            <div class="warning">1000</div>
            <div>今日PV</div>
          </div>
        </div>
      </div>
    </div>

    <div class="block bg-lightBlue table-info small">
       <span>数据总览</span>
       <span class="fr">更多课程数据   >></span>
    </div>
    <div class="block control-box">
      <span>时间:</span>
      <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>
      <span>渠道:</span>
      <el-dropdown trigger="click" @command="handleCommand">
          <el-button >
          选择分类<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item command="a">学习</el-dropdown-item>
          <el-dropdown-item command="b">娱乐</el-dropdown-item>
          <el-dropdown-item command="c">记忆力</el-dropdown-item>
          <el-dropdown-item command="d">书法</el-dropdown-item>
          <el-dropdown-item command="e">国文</el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="block control-box">
      
      <div class="flex-row collect-box">
        <div class="collect-item">
          <div class="warning">1000</div>
          <div>UV</div>
        </div>
        <div class="collect-item">
          <div class="warning">1000</div>
          <div>PV</div>
        </div>
        <div class="collect-item">
          <div class="warning">1000</div>
          <div>下单UV</div>
        </div>
        <div class="collect-item">
          <div class="warning">1000</div>
          <div>订单数</div>
        </div>
        <div class="collect-item">
          <div class="warning">1000</div>
          <div>总收入</div>
        </div>
        <div class="collect-item">
          <div class="warning">1000</div>
          <div>实际收入</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="scss" scoped="" type="text/css" src="./Home.scss"></style>