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
                            <span class="el-dropdown-link" @mouseover="mouseOver" @mouseleave="mouseLeave">
                                <i class="el-icon-user el-icon--right" style="font-size: 20px;"></i>
                            </span>
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
                
            }
        },
        methods: {
            mouseOver(){
                
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>