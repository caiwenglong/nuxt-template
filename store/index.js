// state 返回的是函数 所以用（）包裹
export const state = () => ({
    err: 1,
    data: {}
})

// mutation
export const mutations = {
    M_UPDATE_DATA (state, payload) {
        state.err = payload.err
        state.data = payload.data
    }
}

export const actions = {
    nuxtServerInit(store, context) {
        /* 
            在这个钩子里面，我们通常可以做一些初始化的操作，
            并且将初始化的数据同步到store中
        */
        console.log('nextServerInit1');
        
    },

    A_UPDATE_DATA ({ commit, state }, payload) {
        commit('M_UPDATE_DATA', payload)
        console.log('state')
        console.log(state)
    }
}


// getters
export const getters = {
    getData (state) {
        return state.data
    }
}