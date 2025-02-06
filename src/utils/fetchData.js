import ApiInstance from "@/helpers/Api.helper";

export async function fetchPosts() {

    console.log('Fetching Posts ...');
    
    return ApiInstance.get('posts').then(({ data }) => data).catch((error) => {
        throw new Error(error.message || "Failed to fetch posts");
    });
}