import { PropsWithChildren } from "react";
import Header from "../header/Header";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-900">
            <Header />
            {children}
        </div>
    );
}
