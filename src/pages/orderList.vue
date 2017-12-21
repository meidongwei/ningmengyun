<template>
  <div class="order-wrap">
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        开始日期：
        <v-date-picker @on-change="changeStartDate"></v-date-picker>
      </div>
      <div class="order-list-option">
        结束日期：
        <v-date-picker @on-change="changeEndDate"></v-date-picker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads"
          @click="changeOrder(head)"
          :class="{active:head.active}">
            {{ head.label }}
          </th>
          <tr v-for="item in tableData">
            <td v-for="head in tableHeads">
              {{ item[head.key] }}
            </td>
          </tr>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import VSelection from '../components/selection'
import VDatePicker from '../components/datepicker'
import axios from 'axios'
export default {
  components: {
    VSelection,
    VDatePicker
  },
  data () {
    return {
      query: '',
      productId: 0,
      startDate: '',
      endDate: '',
      products: [
        {
          label: '云服务器 ECS',
          value: 0
        },
        {
          label: '轻量应用服务器',
          value: 1
        },
        {
          label: '龙珠云服务器',
          value: 2
        },
        {
          label: '容器镜像服务',
          value: 3
        }
      ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
      // tableData: [],
      currentOrder: 'desc'
    }
  },
  computed: {
    tableData () {
      return this.$store.getters.getOrderList
    }
  },
  watch: {
    query () {
      this.$store.dispatch('fetchOrderList')
      // this.getTableData()
    }
  },
  methods: {
    productChange (obj) {
      this.$store.commit('updateParams', {
        key: 'productId',
        val: obj.value
      })
      this.$store.dispatch('fetchOrderList')
      // this.productId = obj.value
      // this.getTableData()
    },
    changeStartDate (date) {
      this.$store.commit('updateParams', {
        key: 'startDate',
        val: date
      })
      this.$store.dispatch('fetchOrderList')
      // this.startDate = date
      // this.getTableData()
    },
    changeEndDate (date) {
      this.$store.commit('updateParams', {
        key: 'endDate',
        val: date
      })
      this.$store.dispatch('fetchOrderList')
      // this.endDate = date
      // this.getTableData()
    },
    getTableData () {
      let reqParam = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      }
      axios.post('/api/getOrderList', reqParam)
      .then((res) => {
        this.tableData = res.data.data.list
      })
      .catch((err) => {
        console.log(err)
      })
    },
    changeOrder (headItem) {
      this.tableHeads.map((item) => {
        item.active = false
        return item
      })
      headItem.active = true
      if (this.currentOrder === 'asc') {
        this.currentOrder = 'desc'
      } else if (this.currentOrder === 'desc') {
        this.currentOrder = 'asc'
      }
      var oList = _.orderBy(this.tableData, headItem.key, this.currentOrder)
      this.$store.commit('changeDesc', oList)
      // this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
    }
  },
  mounted () {
    // this.getTableData()
    this.$store.dispatch('fetchOrderList')
    // console.log(this.$store)
  }
}
</script>

<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #00a0e9;
  color: #fff;
  border: 1px solid #00a0e0;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>
