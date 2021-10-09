import AsyncStorage from '@react-native-async-storage/async-storage'

const Async = {
    set: async (key, value) => {
        try {
            const valueJSON = JSON.stringify(value)
            await AsyncStorage.setItem(key, valueJSON)
        } catch (e) {
            console.log('ASYNC STORAGE SET ', e)
        }
    },

    get: async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (e) {
            console.log('ASYNC STORAGE GET ', e)
        }
    },

    remove: async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (e) {
            console.log('ASYNC STORAGE REMOVE ', e)
        }
    }
}

export default Async

