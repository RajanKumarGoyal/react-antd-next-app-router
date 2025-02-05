
const StorageService = {
    setKey: function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },
    getKey: function (key) {
        const data = localStorage.getItem(key);
        return data == null ? null : JSON.parse(data);
    },
    clearKey: function (key) {
        localStorage.removeItem(key);
    },
};

export default StorageService;