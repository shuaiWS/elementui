<template>
  <div class="block">
    <div class="block control-box">
      <el-input v-model="pageDate.courseName" placeholder="请输入课程名称" size="middle" @keyup.enter.native="handlesearch"></el-input>
      <el-button type="primary" @click="handlesearch">搜索</el-button>
      <router-link class="el-button el-button--primary" :to="{name: 'newCourse'}">新建课程</router-link>
    </div>
    <div class="block bg-lightBlue table-info small">
       <i class="el-icon-info blue"></i>
       <span>已搜索到</span>
       <span class="blue">{{pageDate.totalNum}}</span>
       <span>项数据</span>
    </div>
    <div class="block">
      <el-table :data="pageDate.courseList" style="width: 100%">
        <el-table-column  prop="cid" label="课程ID" width="100"></el-table-column>
        <el-table-column prop="title" label="课程名称" width="240"></el-table-column>
        <el-table-column prop="categoryName" label="所属分类"  width="100">
          <template slot-scope="scope">
              <el-tag type="primary" close-transition>{{scope.row.categoryName}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="scale" label="分成比例"  width="100">
          <template slot-scope="scope">
              <span>{{scope.row.scale}}%</span>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="售价"  width="80">
          <template slot-scope="scope">
              <span>{{scope.row.price/100}}元</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="是否发布"  width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.status == 1">已发布</span>
            <span v-if="scope.row.status == 0">草稿</span>
          </template>
        </el-table-column>
        <el-table-column prop="ctime" label="更新时间"  width="180"></el-table-column>
        <el-table-column prop="h" label="操作"  width="100">
          <template slot-scope="scope">
            <el-button @click="goDetail(scope.row)" type="text" size="small">详情</el-button>
            <el-button type="text" size="small" v-if="scope.row.status == 1">下架</el-button>
            <el-button type="text" size="small" v-if="scope.row.status == 0">上架</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>    
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageDate.currentPage"
        :page-size="pageDate.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="pageDate.totalNum">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts" src="./CourseList.ts"></script>

<style lang="scss" scoped type="text/css" src="./CourseList.scss"></style>

