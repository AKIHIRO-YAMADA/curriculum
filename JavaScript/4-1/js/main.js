var app = new Vue({
    el: '#app',
    data: {
        keyword: '',
        list: [],
        addText: '',
    },
    //watchでlistの変更を監視
    watch: {
        list: {
            handler: function() {
                //localStorageにデータを保存
                localStorage.setItem("list", JSON.stringify(this.list));
            },
            deep: true
        }
    },
    //マウントされた時にlocalStorageからデータを取得
    mounted: function() {
        this.list = JSON.parse(localStorage.getItem("list")) || [];
    },
    computed: {
    isNotDoneToDos () {
        return this.list.filter((todo) => {
          return !todo.isChecked;
        });
      },
      isDoneToDos () {
        return this.list.filter((todo) => {
          return todo.isChecked;
        });
      },
      filteredList: function() {

        var findlist = [];

        for(var i in this.list) {

            let todo = this.list[i];

            if(todo.text.indexOf(this.keyword) !== -1) {

                findlist.push(todo);

            }

        }
        return findlist;
    }
    },
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    isChecked: false,
                });
            }
            this.addText = '';
        },
        deleteBtn: function() {
            this.list = this.list.filter(function(todo) {
                return !todo.isChecked;
            });
        }
    }
});
