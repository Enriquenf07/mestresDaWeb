import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
    user: string
    loggedAt: Date | null
    setUser: (newUser: string) => void
    isUserLoggedIn: () => boolean
}

const calculateTimeDifference = (userTime: Date) => {
    const now = new Date();
    return now.getTime() - userTime.getTime();
}

export const useMyStore = create<Store>()(
    persist(
        (set, get) => ({
            user: '',
            loggedAt: null,
            setUser: (newUser) => set({ user: newUser, loggedAt: new Date() }),
            isUserLoggedIn: () => {
                if (!get().loggedAt){
                    return false
                }
                const userTime = new Date(get().loggedAt);
                const loginExpireIn = 30 * 60 * 1000;
                return calculateTimeDifference(userTime) < loginExpireIn;
            },
        }),
        {
            name: 'Store'
        },
    )
)