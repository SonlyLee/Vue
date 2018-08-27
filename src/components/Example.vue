<template>
    <div id="Example">
        <button v-on:click="counter+=1">Add 1</button>
        <p>The button above has been clicked {{counter}} times.</p>
        <button v-on:click="greet">Greet</button>
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
        <!-- 访问原始的DOM事件 -->
        <button v-on:click="warn('Form cannot be submitted yet.',$event)">Submit</button>

        <!-- 表单 -->
        <input v-model="message" placeholder="edit me">
        <p>Message is:{{message}}</p>

        <span>Multiline message is:</span>
        <p style="white-space:pre-line">{{message}}</p>
        <br>
        <textarea v-model="message" placeholder="add multiple lines" cols="30" rows="10"></textarea>

        <input type="checkbox" id="checkbox" v-model="checked"/>
        <label for="checkbox">{{checked}}</label>
        <!-- 多个复选框 -->
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{checkedNames}}</span>  <!-- 复选框中，checkedNames在data中定义是数组-->
        <!-- 单选按钮 -->
        <input type="radio" id="one" value="One" v-model.lazy="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{picked}}</span> <!-- 单选按钮中，picked在data中定义是空字符串-->

        <!-- 选择框 -->
        <select v-model="selected">
            <option value="" disabled>请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>selected: {{selected}}</span>   <!--选择框中selected在data中定义是空字符串-->
        <br>
        <select v-model="selecteds" multiple style="width:50px">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <br>
        <span>Selected:{{selecteds}}</span>
        <br>    
        <div :style="{fontSize: postFontSize+'em'}">
            <BlogPost
                v-for="post in posts"
                v-bind:key="post.id"
                v-bind:post="post"
                v-on:enlarge-text="onEnlargeText"></BlogPost>
        </div>
    </div>
</template>
<script>
import BlogPost from './BlogPost'

export default {
    name: 'Example',
    data(){
        return{
           counter: 0,
           name: 'Vue.js',
           message: 'skr!',
           checked: false,
           checkedNames: [],  
           picked: '',
           selected:'',
           selecteds: [],
           postFontSize: 1,
           posts: [
               {id:1,title:'lee',content:'sonly'},
               {id:2,title:'zhog',content:'愿你历尽千帆，归来仍是少年'}
           ]
        }
    },
    methods:{
        greet: function(event){
            //this在方法里指向当前的Vue实例
            alert('Hello'+this.name+'!')
            //event是原生DOM事件
            if(event){
                alert(event.target.tagName)
            }
        },
        say: function(message){
            alert(message)
        },
        warn: function(message,event){
            //现在访问原生事件对象
            if(event)  event.preventDefault();
            alert(message)
        },
        onEnlargeText:function(enlargrAmount){
            this.postFontSize += enlargrAmount
        }
    },
    components:{
        'BlogPost': BlogPost
    }
}
</script>
<style scoped>

</style>

