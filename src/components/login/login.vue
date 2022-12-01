<template>
    <div class="Logincontain">
        <div class="loginWindow">
            <div class="loginNmae">登录</div>
            <el-form :model="formLabelAlign" :rules="rules" ref="ruleFormRef">
                <el-form-item prop="uname">
                    <el-input :prefix-icon="Search" v-model="formLabelAlign.uname" placeholder="请用户名和邮箱">
                        <template #prepend>用户名/邮箱</template>
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <Iphone />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" type="password" v-model="formLabelAlign.password" show-password>
                        <template #prepend>密码</template>
                        <template #prefix>
                            <el-icon>
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                    <span style="position: absolute;color:#4ABBC1;;left: 510px;top: 40px; cursor: pointer;">忘记密码?</span>
                </el-form-item>
                <div style="display: flex; flex-direction: column; margin: 30px 0 0 126px;">
                    <el-button style="width: 450px; margin-bottom: 20px;" color="#4ABBC1" @click="login">
                        登录
                    </el-button>
                    <div style="height: 1px;width: 450px; background-color: #eee;"></div>
                    <el-button style="width: 450px; margin: 0 0 15px 0;margin-top: 20px;" color="#1AAD19"
                        @click="wxlogin">
                        微信账号登录
                    </el-button>
                </div>

            </el-form>
            <div class="isShowQrcode" v-if="showWxewm">
                请用微信扫描二维码并关注服务号登录！<br />
                （无账号用户请与顾问联系获取）
            </div>
            <img v-if="showWxewm" class="qrCode" src="../../assets/style/images/showqrcode.jpg" alt="">
        </div>
    </div>
</template>
<script>
import { longinApi } from '../../api/userLogin'
import { Lock, Iphone } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
export default {
    name: 'registerLogin',
    components: {
        Lock,
        Iphone
    },
    setup() {
        // 发送请求
        const getLonginApi = (formLabelAlign) => {
            longinApi(formLabelAlign).then((res) => {
                console.log(res)
            })
        }
        // 发送请求
        const login = () => {
            getLonginApi(formLabelAlign)
        }
        const showWxewm = ref(false)
        // 表单验证
        const formLabelAlign = reactive({
            uname: '76550639@qq.com',
            password: 'IyNVYQAr'
        })
        // 表单预验证
        const rules = reactive({
            uname: [
                { trigger: 'blur', validator: checkName }
            ],
            password: [
                {
                    trigger: 'blur',
                    validator: validatePass
                }
            ]
        })
        // 微信登录
        const wxlogin = () => {
            showWxewm.value = true
        }
        function checkName(rule, value, callback) {
            if (!value) {
                return callback(new Error('不能为空'))
            }
            setTimeout(() => {
                let myreg = /^([a-zA-Z0-9_-]{4,16})|[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
                if (!myreg.test(value)) {
                    callback(new Error('请输入正确的邮箱或者用户名'))
                } else {
                    callback()
                }
            }, 1000)
        };
        function validatePass(rule, value, callback) {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                callback()
            }
        }
        return { formLabelAlign, rules, wxlogin, showWxewm, login }
    }
}
</script>
<style lang="less" scoped>
/deep/.el-input {

    width: 450px !important;
    --el-input-focus-border-color: @themeColor;
    margin: 9px 126px !important;
}

/deep/.el-form {
    margin-top: 50px;
}

/deep/.el-button {
    --el-button-text-color: #ffffff !important;
    --el-button-hover-text-color: #ffffff !important;

}

/deep/.el-form-item__error {
    left: 126px;
}

.Logincontain {
    background-color: #F5F5F5;
    padding: 61px 0 61px 0px;

    .loginWindow {
        position: relative;
        width: 700px;
        min-height: 500px;
        background-color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        text-align: center;

        .loginNmae {
            padding-top: 30px;
            font-size: 45px;
            font-weight: 700;
        }

        .qrCode {
            width: 200px;
            height: 200px;
            margin-bottom: 20px;
        }
    }
}
</style>