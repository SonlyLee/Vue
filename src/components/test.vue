<template>
    <div class="test">
        <List v-for="video in videos" :video-info="video">
            <span>{{video.text}}</span>
        </List>
        <List v-for="video in videos" :video-info="video">
            <p>{{video.text}}</p>
        </List>
    </div>
</template>

<script>
import List from './List'
export default {
    name: 'test',
    data () {
        return {
            videos: [{
                text: 'video1'
            }, {
                text: 'video2'
            }]
        }
    }
}
</script>

