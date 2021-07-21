    new Vue({
        el: '#app',
        data: {
            keyword: '',
            addText: '',
            users: [
                {
                    id: 1,
                    name: '鈴木太郎',
                    email: 'suzukitaro@example.com'
                },
                {
                    id: 2,
                    name: '佐藤二郎',
                    email: 'satoujiro@example.com'
                },
                {
                    id: 3,
                    name: '田中三郎',
                    email: 'tanakasaburo@example.com'
                },
                {
                    id: 4,
                    name: '山本四郎',
                    email: 'yamamotoshiro@example.com'
                },
                {
                    id: 5,
                    name: '高橋五郎',
                    email: 'takahashigoro@example.com'
                },
            ]
        },
        computed: {
            filteredUsers: function() {

                var users = [];

                for(var i in this.users) {

                    var user = this.users[i];

                    if(user.name.indexOf(this.keyword) !== -1 ||
                        user.email.indexOf(this.keyword) !== -1) {

                        users.push(user);

                    }

                }

                return users;

            }
        },
        methods: {
            addToDo: function() {
                if (this.addText !== '') {
                    this.user.push({
                        text: this.addText, 
                        isChecked: false,
                    });
                }
                this.addText = '';
            },
            deleteBtn: function() {
                this.list = this.user.filter(function(todo) {
                    return !todo.isChecked;
                });
            }
        }
    });