<template>
    <div class="top-bar">
        <header>
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <div class="header-left">
                            <h5>仓库后台管理系统</h5>
                        </div>
                    </div>
                    </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple-light">
                        <div class="header-right">
                            <span class="el-dropdown-link" @mouseenter="mouseEnter()">
                                <i class="el-icon-user el-icon--right" style="font-size: 20px;"></i>
                            </span>
                            <div class="nav" v-show="dropMenu" @mouseleave="mouseLeave()">
                                <div class="nav-item" v-for="(item, index) in menuList" :key="index" @mouseenter="menuChose(index)":class="{active:index == isActive}">
                                    <p>{{ item.value }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </el-col>
            </el-row>
        </header>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                menuList: [
                    {
                        lable: 'name',
                        value: 'Leo'
                    },
                    {
                        lable: 'permision',
                        value: '权限管理'
                    }
                ],
                isActive: false,
                dropMenu: false
            }
        },
        methods: {
            mouseEnter(){
                this.dropMenu = true;
            },
            mouseLeave(){
                this.dropMenu = false;
                this.isActive = null;
            },
            menuChose(index){
                this.isActive = index;
            }
        }
    }
</script>

<style scoped>

</style>