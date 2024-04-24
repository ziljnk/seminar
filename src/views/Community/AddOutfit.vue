<template>
    <CommunityLayout>
        <main>
            <section id="left">
                <label id="choose-file-area">
                    Choose a file or drag and drop it here
                    <p id="description-label">JPEG, PNG and PDG, up to 50MB</p>

                    <p id="button-browse-file">Browse file</p>
                    <input id="choose-file" type="file" accept="image/*" class="display-none"/>
                </label>
            </section>

            <section id="right">
                <div class="input-group">
                    <h1>Title</h1>
                    <input placeholder="Add title"/>
                </div>

                <div class="input-group">
                    <h1>Description</h1>
                    <input placeholder="Add description"/>
                </div>

                <div class="input-group">
                    <h1>Link</h1>
                    <input placeholder="Add link"/>
                </div>

                <div class="input-group">
                    <h1>Subject</h1>
                    <input placeholder="Add subject"/>
                </div>

                <div class="input-group">
                    <h1>Hastag</h1>
                    <input placeholder="Add hastag"/>
                </div>

                <button>Upload</button>
            </section>
        </main>
    </CommunityLayout>
</template>

<script setup>
import CommunityLayout from "../../layouts/Community.vue"
</script>
<style scoped>
main {
    display: flex;
    gap: 50px;
}

#left, #right {
    width: 50%;
}

#right {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-inline: 20px;
}

#right button {
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 16px;
    background-color: #000;
    cursor: pointer;
    color: #fff;
    transition: all .3s cubic-bezier(.39,.575,.565,1);
    outline: 1px solid #000;
}

#right button:hover {
    background-color: #fff;
    color: #000;
    outline: 1px solid #000;
}

#choose-file-area {
    height: 500px;
    outline: 1px dashed black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 4.30108px 8.60215px 34.4086px 0px rgba(0, 0, 0, 0.08);
    font-weight: bold;
    font-size: 20px;
    background-color: #f8f8f8;
    cursor: pointer;
}

#description-label {
    font-weight: normal;
    font-size: 16px;
}

#button-browse-file {
    border: 1px solid lightgray;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: normal;
    font-size: 16px;
    transition: all .3s cubic-bezier(.39,.575,.565,1);
}

#button-browse-file:hover {
    background-color: lightgray;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-group input {
    height: 40px;
    border-radius: 10px;
    border: 1px solid lightgray;
    outline: none;
    padding: 0 20px;
}

.input-group h1 {
    margin: 0;
}
</style>