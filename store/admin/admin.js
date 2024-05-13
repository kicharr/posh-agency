export const useAdminStore = defineStore('admin', () => {
    const token = ref('');


    const tokenize = (token) => {
        if (!token) {
            return;
        }

    }

    const tokenVerification = () => {

    }

    const login = async () => {

    }


    return {
        tokenize,
        tokenVerification,
        login
    }
})