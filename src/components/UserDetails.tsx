import type { User } from '../types/user';


export default function UserDetails({ user }: { user: User }) {
    return (
        <>
            <p>{user?.name}</p>
            <p>{user?.address?.street}</p>
            <p>{user?.address?.suite}</p>
            <p>{user?.address?.zipcode}</p>
        </>
    );
}