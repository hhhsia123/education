<template>
    <nav class="contain">
        <!-- 头部电话 -->
        <nav class="main">
            <ul class="topPhone">
                <li>中国电话:400-885-8793</li>
                <li>美国电话: +1(315 544-5327)</li>
                <li> 微信号:cheersu123</li>
            </ul>
            <div class="topNav">
                <!-- icon -->
                <img class="pic" src="../assets/style/images/logo.png" alt="">
                <!-- 导航栏 -->
                <div class="member-order">
                    <XtxTabs v-model="activeName" @tab-click="tabClick" :mouseIndex="mouseIndex"
                        @tab-mouseover="mouseover">
                        <XtxTabsPanel v-for=" tab in navigationBarDate" :key="tab.label" :label="tab.label"
                            :name="tab.name">
                            <!-- {{ tab }}  -->
                        </XtxTabsPanel>
                    </XtxTabs>
                    <div class="dropDown " v-for="i in 7" :key="i">
                        <div class="down" ref="target" v-show="closeDropDown">
                            <ul :style="{ opacity: (mouseIndex + 1 === i ? '1' : '0') }">
                                <li>硕士申请{{ i }}</li>
                                <li>本科申请</li>
                                <li>转学服务</li>
                                <li>艺术申请</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 侧边栏 -->
                <div class="aside">
                    <a href="JavaScript:;" @mouseover="overRightDrop" @mouseleave="leaveRightDrop"
                        :class="{ active: rightDrop }">
                        langauges
                    </a>
                    <div class="downright " v-for="i in 1" :key="i">
                        <div class="down" ref="target" v-if="rightDrop">
                            <ul>
                                <li>硕士申请{{ i }}</li>
                                <li>本科申请</li>
                                <li>转学服务</li>
                                <li>艺术申请</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 点击登录跳转到登录页面 -->
                <RouterLink :to="'/user/login'"> <el-button type="success" round>登录</el-button></RouterLink>
            </div>

        </nav>

    </nav>
</template>
<script>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { navigationBarDate } from '../api/constant'
export default {
    name: 'navTop',
    components: {

    },
    setup() {
        const rightDrop = ref(false)
        const target = ref(null)
        const closeDropDown = ref(true)
        const mouseIndex = ref('')
        const activeName = ref('OverseasStudyService')
        // 点击切换tap栏
        const tabClick = (tab) => {
            activeName.value = tab.name
        }
        // 经过触发tab栏
        const mouseover = ({ i }) => {
            closeDropDown.value = true
            console.log(i)
            mouseIndex.value = i
        }
        // 经过右边的下拉触发函数
        const overRightDrop = () => {
            rightDrop.value = !rightDrop.value
            closeDropDown.value = false
        }
        // 经过右边的下拉触发函数
        const leaveRightDrop = () => {
            rightDrop.value = !rightDrop.value
        }
        // 获取dom 点击调用函数
        onClickOutside(target, () => {
            closeDropDown.value = false
        })
        return { navigationBarDate, activeName, tabClick, mouseover, mouseIndex, closeDropDown, target, overRightDrop, leaveRightDrop, rightDrop }
    }
}
</script>
<style lang="less">
.contain {
    height: 40px;
    background-color: #F5F5F5;
    line-height: 40px;
    position: relative;

    .main {
        width: 1240px;
        margin: auto;

        // visibility:hidden
        .topPhone {
            display: flex;
            justify-content: space-evenly;
        }

        .topNav {
            display: flex;
            justify-content: start;

            .pic {
                width: 127px;
                height: 43px;
                margin-top: 8px;
            }

            .el-button {
                color: #fff;
                font-weight: 700;
                margin-left: 10px;
                margin-top: 15px;
            }

            .aside {
                text-align: center;
                margin-left: 100px;
                cursor: pointer;

                .downright {
                    float: left;
                    position: relative;
                    top: 0 !important;

                    ul {
                        transition: all 0.3s;
                        text-align: center;
                        width: 110px;
                        border: 1px solid #03C4C2;
                        background-color: #fff;
                        border-radius: 5px;

                        li {
                            height: 40px;
                            width: 100%;
                            line-height: 40px;
                            font-weight: 700;

                            &:hover {
                                background-color: #F0F9F9;
                            }
                        }
                    }
                }

                a {
                    display: block;
                    width: 110px;
                    height: 61px;
                    line-height: 59px;
                    font-weight: 700;
                    border: 1px solid #eee;

                    &.active {
                        border-top: 5px solid #03C4C2;
                        background-color: #F0F9F9;
                    }
                }

            }

            .dropDown {
                position: relative;

                .down {
                    float: left;

                    ul {
                        transition: all 0.3s;
                        text-align: center;
                        width: 110px;
                        border: 1px solid #03C4C2;
                        background-color: #fff;
                        border-radius: 5px;

                        li {
                            height: 40px;
                            width: 100%;
                            line-height: 40px;
                            font-weight: 700;

                            &:hover {
                                background-color: #F0F9F9;
                            }
                        }
                    }
                }
            }

        }

    }
}
</style>