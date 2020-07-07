<template>
  <div class="page">
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="7">
          <el-form-item label="uri：">
            <el-input v-model="form.uri"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="7">
          <el-form-item label="project：">
            <el-input v-model="form.project"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="method：">
            <el-select
              v-model="form.method"
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in urlData"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="loadData()">搜索</el-button>
        </el-col>
      </el-row>
    </el-form>

    <el-button
      type="primary"
      style="float:left;margin-bottom:20px"
      @click="$router.push({ name: 'mockadd' })"
    >
      添加
    </el-button>

    <el-table :data="listData.list" stripe style="width: 100%">
      <el-table-column
        prop="project"
        label="project"
        width="120"
        fixed="left"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="uri" label="uri" width="270"></el-table-column>
      <el-table-column
        prop="contains"
        label="contains"
        width="270"
      ></el-table-column>
      <el-table-column prop="method" label="method" width="100">
      </el-table-column>
      <el-table-column label="requestBody" show-overflow-tooltip width="150">
        <template slot-scope="scope">
          <div class="body-item">
            <el-button type="text" @click="onJsonClick(scope.row.requestBody)">
              详情
            </el-button>
            <el-button type="text" v-clipboard:copy="scope.row.requestBody">
              复制
            </el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="responseBody" show-overflow-tooltip width="150">
        <template slot-scope="scope">
          <div class="body-item">
            <el-button type="text" @click="onJsonClick(scope.row.responseBody)">
              详情
            </el-button>
            <el-button type="text" v-clipboard:copy="scope.row.responseBody">
              复制
            </el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="info" label="描述" width="200"></el-table-column>
      <el-table-column label="操作" fixed="right" width="200">
        <template slot-scope="scope">
          <el-button type="text" @click="onEdit(scope.row)">编辑</el-button>
          <el-button type="text" @click="onDelete(scope.row.id)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="pageNum"
      :page-size="listData.pageSize"
      :total="listData.total"
      hide-on-single-page
    >
    </el-pagination>

    <el-drawer
      :visible.sync="drawer"
      :withHeader="false"
      :show-close="false"
      custom-class="mock-drawer"
      size="60%"
      style="overflow:scroll"
    >
      <div style="text-align:left">
        <json-view :data="jsonData" :deep="5" theme="one-dark"></json-view>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import jsonView from "vue-json-views";

export default {
  name: "Index",
  components: {
    jsonView
  },
  data() {
    return {
      pageNum: 1,
      listData: [],
      form: {
        uri: "",
        project: "",
        method: ""
      },
      urlData: ["GET", "POST", "PUT", "DELETE"],
      jsonData: [],
      drawer: false
    };
  },
  async mounted() {
    this.loadData();
  },
  methods: {
    async loadData(pageNum = 1) {
      const pagin = {
        pageNum: pageNum,
        pageSize: 10
      };
      const res = await this.$http.get("/api/mock/query", {
        ...pagin,
        ...this.form
      });
      this.listData = res.data;
    },
    handleCurrentChange(pageNum) {
      this.pageNum = pageNum;
      this.loadData(pageNum);
    },
    onEdit(item) {
      const detail = {
        id: item.id,
        project: item.project,
        uri: item.uri,
        method: item.method,
        contains: item.contains,
        requestBody: item.requestBody,
        responseBody: item.responseBody,
        info: item.info
      };
      this.$router.push({
        path: "mock/add",
        query: {
          detail: JSON.stringify(detail)
        }
      });
    },
    async onDelete(id) {
      const res = await this.$http.delete(`/api/mock/${id}`);
      this.$message.success("删除成功");
      this.loadData();
    },
    onJsonClick(data) {
      this.drawer = true;
      this.jsonData = JSON.parse(data);
    },
    handleClose() {
      this.drawer = false;
    }
  }
};
</script>
<style scoped></style>
