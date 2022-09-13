export const Search = {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="search-form" @submit.prevent=''>
                    <input type="text" class="search-field" v-model='userSearch'>
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`,

    // template: `<form action="#" class="search-form" @submit.prevent='$parent.filter'>
    //             <input type="text" class="search-field" v-model='$parent.userSearch'>
    //             <button class="btn-search" type="submit">
    //                 <i class="fas fa-search"></i>
    //             </button>
    //         </form>`,
};