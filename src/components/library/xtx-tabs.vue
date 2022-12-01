<script>
import { useVModel } from '@vueuse/core'
import { provide } from 'vue'
export default {
    name: 'XtxTabs',
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        mouseIndex: {
            type: Number,
            default: null
        }
    },
    setup(props, { emit }) {
        // 获取父组件的值
        const activeName = useVModel(props, 'modelValue', emit)
        const mouseIndex = useVModel(props, 'mouseIndex', emit)
        // 给xtx-tabs-panel传值
        provide('activeName', activeName, mouseIndex)
        const tabMouseover = (i) => {
            emit('tab-mouseover', { i })
        }
        const tabclick = (name, i) => {
            emit('tab-click', { name, i })
        }
        return { tabclick, activeName, tabMouseover }
    },
    render() {
        // 默认插槽节点
        const panels = this.$slots.default()
        // console.log(panels)
        // 判断是否是动静态
        const dynamicPanel = []
        panels.forEach(item => {
            // 静态
            if (item.type.name === 'XtxTabsPanel') {
                dynamicPanel.push(item)
            } else {
                // 动态
                item.children.forEach(item => {
                    dynamicPanel.push(item)
                })
            }
        })
        // console.log(this)
        // 遍历label
        const nav = <nav>{
            dynamicPanel.map((item, i) => {
                return <a href="javascript:;" onMouseover={() => { this.tabMouseover(i) }} onclick={() => { this.tabclick(item.props.name, i) }} class={{ active: item.props.name === this.activeName, activeMove: i === this.mouseIndex }} >{item.props.label}</a>
            })
        }</nav>

        return <div class="xtx-tabs">{[nav, panels]}

        </div>
    }
}
</script>
<style lang="less">
.xtx-tabs {
    background: #fff;

    >nav {
        height: 60px;
        line-height: 60px;
        display: flex;
        border-bottom: 1px solid #f5f5f5;

        >a {
            width: 110px;
            border-right: 1px solid #f5f5f5;
            text-align: center;
            font-size: 16px;
            color: #2C2E30;
            font-weight: 600;

            &.active {
                color: #03C4C2;
                height: 60px;
                background: #fff;
                line-height: 56px;
            }

            &.activeMove {
                border-top: 5px solid #03C4C2;
                background-color: #F0F9F9;
            }
        }
    }
}
</style>