<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          v-for="(item, index) in productList" 
          :key="index">
          <el-submenu :index="item.index">
            <template slot="title">
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="(data, index) in item.children" :key="index">
              <el-menu-item :index="data.index" @click="changeRouter(data.value)">{{ data.name }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-aside>
  </el-container>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        productList: [
          {
            name: '空调',
            value: 'air-conditioning',
            index: '1',
            children: [
              {
                name: '挂机',
                value: 'hang-up',
                index: '1-1'
              },
              {
                name: '柜机',
                value: 'cabinet-machine',
                index: '1-2'
              },
              {
                name: '中央空调',
                value: 'central-air-conditioning',
                index: '1-3'
              }
            ]
          },
          {
            name: '洗衣机',
            value: 'washing-machine',
            index: '2',
            children: [
              {
                name: '滚筒洗衣机',
                value: 'roller',
                index: '2-1'
              },
              {
                name: '波轮洗衣机',
                value: 'wave-wheel',
                index: '2-2'
              },
              {
                name: '洗烘一体机',
                value: 'washing-drying',
                index: '2-3'
              }
            ]
          },
          {
            name: '电视',
            value: 'tv',
            index: '3',
            children: [
              {
                name: '超薄电视',
                value: 'ultra-thin',
                index: '3-1'
              },
              {
                name: '全面屏电视',
                value: 'full-screen',
                index: '3-2'
              },
              {
                name: '智能电视',
                value: 'smart',
                index: '3-3'
              },
              {
                name: 'OLED电视',
                value: 'oled',
                index: '3-4'
              },
              {
                name: '4K超清电视',
                value: '4K-ultra-clear',
                index: '4-4'
              }
            ]
          },
          {
            name: '冰箱',
            value: 'refrigerator',
            index: '4',
            children: [
              {
                name: '多门',
                value: 'multiple-doors',
                index: '4-1'
              },
              {
                name: '对开门',
                value: 'opening-the-door',
                index: '4-2'
              },
              {
                name: '三门',
                value: 'three-doors',
                index: '4-3'
              },
              {
                name: '双门',
                value: 'double-door',
                index: '4-4'
              },
              {
                name: '冷柜',
                value: 'freezer',
                index: '4-5'
              },
              {
                name: '酒柜',
                value: 'wine-cooler',
                index: '4-6'
              }
            ]
          },
          {
            name: '厨卫大电',
            value: 'kitchen-bathroom',
            index: '5',
            children: [
              {
                name: '油烟机',
                value: 'hood',
                index: '5-1'
              },
              {
                name: '燃气灶',
                value: 'gas-stoves',
                index: '5-2'
              },
              {
                name: '消毒柜',
                value: 'disinfection-cabinet',
                index: '5-3'
              },
              {
                name: '洗碗机',
                value: 'dishwasher',
                index: '5-4'
              },
              {
                name: '集成灶',
                value: 'integrated-stove',
                index: '5-5'
              },
              {
                name: '热水器',
                value: 'water-heater',
                index: '5-6'
              }
            ]
          },
          {
            name: '厨房小电',
            value: 'kitchen-electric',
            index: '6',
            children: [
              {
                name: '破壁机',
                value: 'broken-wall-machine',
                index: '6-1'
              },
              {
                name: '烤箱',
                value: 'oven',
                index: '6-2'
              },
              {
                name: '电饭锅',
                value: 'rice-cooker',
                index: '6-3'
              },
              {
                name: '电压力锅',
                value: 'electric-pressure-cooker',
                index: '6-4'
              },
              {
                name: '豆浆机',
                value: 'soymilk-machine',
                index: '6-5'
              },
              {
                name: '料理机',
                value: 'cooking-machine',
                index: '6-6'
              },
              {
                name: '电饼铛',
                value: 'electric-baking-pan',
                index: '6-7'
              },
              {
                name: '榨汁机',
                value: 'juicer',
                index: '6-8'
              },
              {
                name: '电水壶',
                value: 'electric-kettle',
                index: '6-9'
              },
              {
                name: '微波炉',
                value: 'microwave-oven',
                index: '6-10'
              },
              {
                name: '电磁炉',
                value: 'induction-cooker',
                index: '6-11'
              },
              {
                name: '空气炸锅',
                value: 'air-fryer',
                index: '6-12'
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath){},
      handleClose(){},
      changeRouter(data){}
    }
  }
</script>

<style lang="" scoped>
  
</style>