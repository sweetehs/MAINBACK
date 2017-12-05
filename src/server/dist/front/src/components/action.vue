<style lang="less">
    .action-copying {
        border: dashed 2px #333;
        animation: flick 1s ease-in infinite;
    }
    
    @keyframes flick {
        0% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.5;
        }
    }
    
    .common-widget-action {
        ul.common-widget-action-absolute {
            position: absolute;
            display: inline-block;
            font-size: 14px;
            background: #fff;
            box-shadow: 0 0 10px #888;
            border-radius: 4px;
            position: absolute;
            width: 80px;
            text-align: center;
            left: -8px;
            z-index: 1;
            li {
                padding: 5px 0;
                line-height: 1.4;
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
        .common-widget-action-fixed {
            ul {
                display: flex;
                align-items: center;
            }
            li {
                margin: 0 10px;
                &:hover {
                    cursor: pointer
                }
            }
        }
    }
</style>

<template>
    <div class="common-widget-action" @click="stopUp">
        <div class="common-widget-action-fixed">
            <ul>
                <li @click="exec('prev')"><i class="el-icon-d-arrow-left"></i></li>
                <li @click="exec('next')"><i class="el-icon-d-arrow-right"></i></li>
                <li @click="exec('allscreen')"><i class="el-icon-rank"></i></li>
            </ul>
        </div>
        <ul class="common-widget-action-absolute" v-show="isShowAction" :style="position">
            <li @click="exec('copy')">复制</li>
            <li @click="exec('paste')" v-show="actionCopid">粘贴</li>
            <li @click="exec('deletei')">删除</li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios"
    import util from "./util/util"
    import widgetConfig from "./widgets/config"
    import {
        mount
    } from "./widgets/mount"
    export default {
        data() {
            return {
                isShowAction: false,
                actionId: "", // 目标id
                actionCopid: "",
                target: "",
                position: {
                    top: 0,
                    left: 0,
                }
            }
        },
        props: ["cvue"],
        methods: {
            setData({
                x,
                y,
                target
            }) {
                this.isShowAction = true
                this.position.left = x
                this.position.top = y
                this.target = target
                this.actionId = util.getId(util.getParentByClassName(target, "widget-wrapper").className)
            },
            stopUp(event) {
                event.cancelBubble = true
            },
            hide() {
                this.isShowAction = false
            },
            exec(type) {
                this.isShowAction = false
                if (this.actionId == "c0" && (type == "copy" || type == "deletei")) {
                    return
                }
                this[type]()
            },
            copy() {
                this.actionCopid = this.actionId
                util.removeClass(document.querySelector(".action-copying"), "action-copying")
                util.addClass(document.querySelector("." + this.actionCopid), "action-copying")
            },
            paste() {
                if (this.actionCopid == this.actionId) {
                    alert("不能复制到自己当中")
                    return
                }
                if (util.getParentByClassName(document.querySelector("." + this.actionId), this.actionCopid)) {
                    alert("不能复制到子元素当中")
                    return
                }
                const cData = this.$store.getters.getById(this.actionCopid)
                let pid = this.actionId
                util.loop([cData], (_data, index, list) => {
                    let $wrapper = ""
                    let id = util.randomid()
                    $wrapper = document.querySelector("." + pid)
                    mount($wrapper, id, Object.assign(widgetConfig[_data.option.name](), util.deepClone(_data.option)), this.$store, true)
                    if (index == list.length - 1) {
                        pid = id
                    }
                })
            },
            deletei() {
                this.$store.dispatch("delete", this.actionId)
                util.getParentByClassName(this.target, "widget-wrapper").remove()
            },
            allscreen() {                                
                axios.post("/api/test", {
                    data:JSON.stringify(this.$store.state.widgets)
                }).then(() => {           
                    window.open("http://localhost:8080/#/test")         
                })
            },
            prev() {
                this.$store.dispatch("historyprev")
                this.$emit("initAll")
            },
            next() {
                this.$store.dispatch("historynext")
                this.$emit("initAll")
            }
        }
    }
</script>

