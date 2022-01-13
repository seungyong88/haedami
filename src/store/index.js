import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      menu: [
        { 
          id: 'americano_ice', 
          image: "/assets/images/americano_ice.jpg",
          title: "아이스 아메리카노",
          title_eng: 'americano',
          price: 1000,
          description: '에스프레소에 정수물과 얼음을 더하여 시원하게 즐길 수 있는 커피',
          temperature: 'ice',
        },
        { 
          id: 'americano_hot', 
          image: "assets/images/americano_hot.jpg",
          title: "아메리카노", 
          title_eng: 'americano',
          price: 1000,
          description: '에스프레소와 뜨거운 물을 섞어 부드럽게 즐길 수 있는 커피',
          temperature: 'hot',
        },
      ]
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
      }

      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    }
  },
  getters: {
    menu(state) {
      return state.menu;
    },
    item(state) {
      return (menuId) => {
        return state.menu.find(item => item.id === menuId)
      } 
    }
  }
});

export default store;