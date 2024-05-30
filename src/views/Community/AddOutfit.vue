<template>
    <CommunityLayout>
        <main>
            <section id="left">
                <label v-if="!isUploaded" class="choose-file-area">
                    Choose a file or drag and drop it here
                    <p id="description-label">JPEG, PNG and PDG, up to 50MB</p>

                    <p id="button-browse-file">Browse file</p>
                    <input id="choose-file" type="file" accept="image/*" class="display-none" @change="handleInputChange"/>
                </label>

                <img id="preview-image" class="choose-file-area" v-else :src="previewImageUrl" alt="preview"/>
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

                <button @click="handleUpload">Upload</button>
            </section>
        </main>
    </CommunityLayout>
</template>

<script setup>
import CommunityLayout from "../../layouts/Community.vue"
import { ref, onMounted } from "vue"

let isUploaded = ref(false);
let previewImageUrl = ref('');
let chooseFile = ref(null);

onMounted(() => {
    chooseFile.value = document.getElementById('choose-file');
})

function handleUpload() {
    let data = new FormData();
    data.append('image', chooseFile.value.files[0]);

    fetch('http://localhost:2000/image-server/upload', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

async function handleInputChange(event) {
    isUploaded.value = await true;
    previewImageUrl.value = URL.createObjectURL(event.target.files[0]);
}
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

.choose-file-area {
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
    max-width: 517px;
    object-fit: cover;
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

#remove-uploaded-image {
  align-items: center;
  background-color: #FFE7E7;
  background-position: 0 0;
  border: 1px solid #FEE0E0;
  border-radius: 11px;
  box-sizing: border-box;
  color: #D33A2C;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 33.4929px;
  list-style: outside url(https://www.smashingmagazine.com/images/bullet.svg) none;
  padding: 2px 12px;
  text-align: center;
  transition: border .2s ease-in-out,box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  word-break: break-word;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
}

#remove-uploaded-image:active,
#remove-uploaded-image:hover,
#remove-uploaded-image:focus {
  outline: 0;
}


#remove-uploaded-image:active {
  background-color: #D33A2C;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #FFFFFF;
}

#remove-uploaded-image:hover {
  background-color: #FFE3E3;
  border-color: #FAA4A4;
}

#remove-uploaded-image:active:hover,
#remove-uploaded-image:focus:hover,
#remove-uploaded-image:focus {
  background-color: #D33A2C;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #FFFFFF;
}
</style>