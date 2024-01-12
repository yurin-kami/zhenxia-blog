<template>
    <div class="noteList">
        <div class="box">
            <ul>
                <li v-for="note in notes" :key="note">{{ note }}</li><br />
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.noteList {
    position: relative;
    right: 50vh;
    left: -5vh;
    top: 3vh;
    background-color: rgb(177, 163, 253);
    border: 1px solid rgb(177, 163, 253);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 300px;
    margin: 10vh;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

li {
    position: relative;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 5px;
    margin-left: -260vh;
    margin-top: 10px;
    list-style: none; 
}
.box ul {
  display: flex;
  flex-wrap: wrap;
}
</style>