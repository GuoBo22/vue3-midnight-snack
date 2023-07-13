<script setup>
import { reactive } from 'vue';
import { ElMessage } from 'element-plus';
 const form = reactive({
    name: '',
    password: '',
    sex: '',
    birthday: '',
    email: '',
 })

 const save = () => {
    ElMessage.success('保存成功！')
 }
</script>

<template>
    <div style="height: 100vh; background-color: #f4f1eb;">
        <el-button style="margin: 20px;" size="large" @click="$router.back()"><i
                    class="iconfont icon-fanhui"></i></el-button>
        <div class="container">
            <div class="avatar">
                <el-avatar src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    :size="100" />
            </div>
            <div class="userInfo">
                <el-card class="box-card" style="width: 800px;">
                    <el-tabs type="border-card" stretch=true>
                        <el-tab-pane label="个人信息">
                            <div style="display: flex; justify-content: center; align-items: center;flex-direction: column;">
                                <el-form label-width="120px">
                                    <el-form-item label="用户名">
                                        <el-input v-model="form.name"/>
                                    </el-form-item>
                                    <el-form-item label="密码">
                                        <el-input v-model="form.password" type="password" show-password/>
                                    </el-form-item>
                                    <el-form-item label="性别">
                                        <el-radio-group v-model="form.sex">
                                            <el-radio label="男" />
                                            <el-radio label="女" />
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="生日">
                                        <el-date-picker v-model="form.birthday" type="date" placeholder="Pick a date" style="width: 100%" />
                                    </el-form-item>
                                    <el-form-item label="邮箱">
                                        <el-input v-model="form.email" />
                                    </el-form-item>
                                    
                                </el-form>
                                <el-button type="primary" @click="save">保存</el-button>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="历史订单">
                            <div style="display: flex; justify-content: center; align-items: center;">
    
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="地址">地址</el-tab-pane>
                        <el-tab-pane label="收藏">收藏</el-tab-pane>
                    </el-tabs>
                </el-card>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background-color: #f4f1eb;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.avatar {
    margin-top: 100px;
}

.userInfo {
    width: 800px;
    align-items: center;
    /* margin: auto; */
    margin-top: 60px;
}
</style>