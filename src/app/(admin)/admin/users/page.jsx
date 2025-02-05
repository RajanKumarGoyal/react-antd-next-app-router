
import ApiInstance from "@/helpers/Api.helper";
import UserList from "@/components/admin/Users/Index";

export const metadata = {
    title: 'Admin Dashboard - Users',
    description: 'A user admin dashboard configured with Next.js, Antd, JavaScript, and Prettier.'
};

function fetchUsers() {
    return ApiInstance.get('/users').then(({ data }) => data).catch((error) => {
        throw new Error(error.message || "Failed to fetch users");
    });
};

const page = async () => {

    const users = await fetchUsers();

    return (
        <>
            <UserList initialUsers={users} />
        </>
    );
};

export default page;