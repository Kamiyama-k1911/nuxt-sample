<template>
  <div>
    <div v-if="score >= 80">良くできました！</div>
    <div v-else-if="score >= 30">もっと行ける！</div>
    <div v-else>もっと頑張ろう</div>

    <!-- 上の記述をマスキッシュ記法で1行で書く -->
    <!-- <div>{{ toggleComment() }}</div> -->

    <!-- <a v-bind:href="googleLink">Googleへのリンク</a> -->
    <img v-bind:src="imageUrl()" width="100px" />

    <!-- <v-btn @click="showMessage('クリック')">クリック</v-btn>
    <v-btn @dblclick="showMessage('ダブルクリック')">ダブルクリック</v-btn>
    <v-btn @mouseenter="showMessage('マウスエンター')">マウスエンター</v-btn> -->

    <!-- <div v-show="isShown">みえるかな？</div>
    <v-btn elevation="2" v-on:click="toggleShown">表示/非表示の切り替え</v-btn> -->
    <input v-model="score" type="text" />
    <v-text-field v-model="score" type="text" />

    <div v-for="fruit in fruits" :key="fruit.name">{{ fruit.name }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShown: true,
      score: 80,
      googleLink: 'https://google.com',
      comment: '良くできました！',
      fruits: [
        { name: 'apple' },
        { name: 'orange' },
        { name: 'grape' },
        { name: 'peach' },
      ],
    }
  },
  methods: {
    toggleShown() {
      this.isShown = !this.isShown
    },
    imageUrl() {
      if (this.score >= 80) {
        return 'https://2.bp.blogspot.com/-zDsrPiqkR_0/U0pTNj7lpoI/AAAAAAAAfGA/2Z1onz10tAw/s800/grade2_yokudekimashita.png'
      } else if (this.score >= 30) {
        return 'https://2.bp.blogspot.com/-wJDmO2MIKkg/U0pTOEZT-JI/AAAAAAAAfGc/p9uwt9Msq9A/s800/grade3_ganbarimashita.png'
      } else {
        return 'https://2.bp.blogspot.com/-Bc8NTQ2PqY8/U0pTOuIDWQI/AAAAAAAAfGY/1RU2LKdozKs/s800/grade5_ganbarimasyou.png'
      }
    },
    toggleComment() {
      if (this.score >= 80) {
        return this.comment
      } else if (this.score >= 30) {
        this.comment = '頑張りました！'
        return this.comment
      } else {
        this.comment = 'もっと頑張ろう！'
        return this.comment
      }
    },
    showMessage(message) {
      alert(message)
    },
  },
}
</script>
