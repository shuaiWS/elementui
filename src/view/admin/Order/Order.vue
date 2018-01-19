<template>
  <div class="block">
    <div class="block control-box">
      <el-input v-model="input" placeholder="请输入课程名称 / 订单编号 / 用户昵称" size="middle"></el-input>
      <span>下单时间:</span>
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
    <div class="block bg-lightBlue table-info small">
       <i class="el-icon-info blue"></i>
       <span>已搜索到</span>
       <span class="blue">5</span>
       <span>项数据</span>
    </div>
    <div class="block">
      <el-dialog  title="新建推广"  :visible.sync="centerDialogVisible"  width="30%"  center>
        <el-row>
          <el-col :span="6" class="align-right">推广名称</el-col>
          <el-col :span="18"><el-input v-model="input" placeholder="请输入内容" size="small"></el-input></el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="align-right">推广ID</el-col>
          <el-col :span="18"><el-input v-model="input" placeholder="请输入内容" size="small"></el-input></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>   
    </div>
    <div class="block">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column  prop="a" label="订单编号" width="180"></el-table-column>
        <el-table-column prop="b" label="课程名称" width="180"></el-table-column>
        <el-table-column prop="c" label="购买时间"></el-table-column>
        <el-table-column prop="d" label="课程收入"></el-table-column>
        <el-table-column prop="e" label="分成比例"></el-table-column>
        <el-table-column prop="f" label="实际收入"></el-table-column>
        <el-table-column prop="g" label="渠道来源"></el-table-column>
        <el-table-column prop="h" label="渠道ID"></el-table-column>
        <el-table-column prop="i" label="用户昵称"></el-table-column>
      </el-table>
    </div>    
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts" src="./Order.ts"></script>

<style lang="scss" scoped type="text/css" src="./Order.scss"></style>

