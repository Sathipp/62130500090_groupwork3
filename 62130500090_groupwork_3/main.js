    const app = {
        data() {
            return {
                tasks: [{
                    title: 'ShiragaP', detail: "Role: Producer @PRISMA",
                      url: './images/1.png', done: false ,count: 864},
                { title: 'Peony', detail: "Role: Content Manager @PRISMA", 
                      url: './images/2.png', done: false ,count: 230},
                { title: 'Together', detail: "since October 5th, 2020 ", 
                      url: './images/3.jpg', done: false ,count: 32},
                ]
            
            }
    
        },
        methods: {
            toggleDone(index){
                if (this.tasks[index].done) {
                    this.tasks[index].done = !this.tasks[index].done
                    this.tasks[index].count -= 1
                }else
                {
                    this.tasks[index].done = !this.tasks[index].done
                    this.tasks[index].count += 1
                }
            }
        },
        computed: {
            countLike(){
                return this.tasks.filter( i => i.done).length
            },
            countPic(){
                return this.tasks.filter( i => i).length
            }
        }
    
    }
mountedApp = Vue.createApp(app).mount('#app')
