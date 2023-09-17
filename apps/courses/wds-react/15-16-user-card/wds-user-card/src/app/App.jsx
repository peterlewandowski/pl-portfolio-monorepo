import "./user.css";
import user from "./user.json";
import { UserCard } from "./UserCard";
import { UserCardClass } from "./UserCardClass";

export const App = () => {
    return (
        <>
            <UserCard
                name={user.name}
                age={user.age}
                phoneNumber={user.phoneNumber}
                address={user.address}
            />
            <br />
            <UserCardClass
                name={user.name}
                age={user.age}
                phoneNumber={user.phoneNumber}
                address={user.address}
            />
        </>
    );
};
